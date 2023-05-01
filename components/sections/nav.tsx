import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function NavigationBar() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const download = () => {
    const fileUrl = '/path/to/your/file.pdf'
    const fileName = 'resume.pdf'
    //download(fileUrl, fileName, 'application/pdf')
  }

  return (
    <div
      className={
        'font-mono fixed flex flex-row items-center w-screen z-[1] bg-black text-white'
      }
    >
      <div className="flex flex-row grow justify-start items-center pl-10">
        {router.pathname !== '/' && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        )}

        <Link className="uppercase" href="/">
          {router.pathname === '/' ? 'Brianna Duvivier 🐶💕' : 'Back'}
        </Link>
      </div>

      {/* Desktop and Tablet */}
      <div className="hidden md:flex flex-row w-fit gap-10 justify-end pr-10">
        <Link
          className="cursor-pointer px-2 py-1 rounded-xl hover:bg-pink"
          href="/#projects"
        >
          Projects
        </Link>
        <p className="cursor-pointer px-2 py-1 rounded-xl hover:bg-pink">
          Resume
        </p>
        <Link
          className="cursor-pointer px-2 py-1 rounded-xl hover:bg-pink"
          href="/#about"
        >
          About
        </Link>
      </div>

      {/* Mobile */}
      <div className="md:hidden flex w-fit justify-end">
        <button className="z-[2] pr-10 w-fit" onClick={() => toggleMenu()}>
          {!isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 w-9 my-2"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 w-9 my-2"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </button>

        {isOpen && (
          <div className="animate-mobileMenuSlide absolute flex flex-col justify-center items-center gap-10 w-screen h-screen bg-pink z-[1]">
            <Link
              className="cursor-pointer text-[calc(8vw)] px-2 py-1 rounded-xl hover:bg-pink"
              href="/#projects"
              onClick={() => toggleMenu()}
            >
              Projects
            </Link>
            <p
              className="cursor-pointer text-[calc(8vw)] px-2 py-1 rounded-xl hover:bg-pink"
              onClick={() => toggleMenu()}
            >
              Resume
            </p>
            <Link
              className="cursor-pointer text-[calc(8vw)] px-2 py-1 rounded-xl hover:bg-pink"
              href="/#about"
              onClick={() => toggleMenu()}
            >
              About
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
