import Layout from '@/components/Layout'
import AboutMe from '../components/sections/about'
import Header from '../components/sections/header'
import Projects from '../components/sections/projects'
import TechStack from '../components/sections/techstack'

export default function Home() {
  return (
    <Layout>
      <Header />
      <Projects />
      <TechStack />
      <AboutMe />
    </Layout>
  )
}
