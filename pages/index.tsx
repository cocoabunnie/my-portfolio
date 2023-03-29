import { Inter } from 'next/font/google'
import AboutMe from '../components/sections/about'
import Header from '../components/sections/header'
import NavigationBar from '../components/sections/nav'
import Projects from '../components/sections/projects'
import TechStack from '../components/sections/techstack'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <NavigationBar />
      <Header />
      <Projects />
      <TechStack />
      <AboutMe />
    </>
  )
}
