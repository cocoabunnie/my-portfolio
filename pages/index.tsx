import Layout from '@/components/Layout'
import { Inter } from 'next/font/google'
import AboutMe from '../components/sections/about'
import Header from '../components/sections/header'
import Projects from '../components/sections/projects'
import TechStack from '../components/sections/techstack'

const inter = Inter({ subsets: ['latin'] })

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
