import AboutProject from '@/components/projectPage/aboutProject'
import ProjectTechStack from '@/components/projectPage/projectTechStack'
import ProjectTitle from '@/components/projectPage/projectTitle'
import NavigationBar from '@/components/sections/nav'
import { createClient } from 'contentful'

export default function ProjectDetailPage({ project }: any) {
  const { title, about, technologyStack } = project[0].fields
  console.log(project)
  console.log('ARRAY: ', technologyStack)

  return (
    <div className="text-white font-mono">
      <NavigationBar />
      <ProjectTitle title={title} />
      <AboutProject about={about} />
      <ProjectTechStack data={technologyStack} />
    </div>
  )
}

export async function getStaticPaths() {
  const client = createClient({
    space: String(process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID),
    accessToken: String(process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN),
  })

  const res = await client.getEntries({ content_type: 'portfolioProject' })

  const paths = res.items.map((project: any) => ({
    params: { id: project.fields.slug },
  }))

  return {
    paths,
    fallback: 'blocking',
  }
}

export async function getStaticProps({ params }: any) {
  const client = createClient({
    space: String(process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID),
    accessToken: String(process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN),
  })

  const { items } = await client.getEntries({
    content_type: 'portfolioProject',
    'fields.slug': params.id,
  })

  if (!items[0]) {
    return {
      notFound: true,
    }
  }

  return {
    props: { project: items },
    revalidate: 2,
  }
}
