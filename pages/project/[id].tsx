import AboutProject from '@/components/projectPage/aboutProject'
import ProjectTechStack from '@/components/projectPage/projectTechStack'
import ProjectTitle from '@/components/projectPage/projectTitle'
import NavigationBar from '@/components/sections/nav'
import { createClient } from 'contentful'

export default function ProjectDetailPage({ project }: any) {
  const { title, about, technologyStack } = project[0].fields

  return (
    <div className="text-white font-mono">
      <NavigationBar />
      <div className="mx-[20px] text-[20px]">
        <ProjectTitle title={title} />
        <AboutProject about={about} />
        <ProjectTechStack data={technologyStack} />
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  var client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID ?? '',
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN ?? '',
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
  var client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID ?? '',
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN ?? '',
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
