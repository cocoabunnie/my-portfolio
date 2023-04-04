import { ReactNode } from 'react'
import NavigationBar from './sections/nav'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children }: Props) => (
  <div className="min-h-[100vh] overflow-x-hidden scroll-smooth">
    <header id="home" className="fixed mt-32 lg:mt-0 z-10">
      <NavigationBar />
    </header>
    <div>{children}</div>
  </div>
)

export default Layout
