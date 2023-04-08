import Link from 'next/link'
import { useState } from 'react'

export default function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div
      className={
        'font-mono fixed flex flex-row items-center w-screen z-[1] bg-black text-white'
      }
    >
      <div className="flex flex-row gap-10 w-full justify-start items-center pl-10">
        <Link className="uppercase" href="/">
          Brianna Duvivier 🐶💕
        </Link>
      </div>

      {/* Desktop and Tablet */}
      <div className="hidden md:flex flex-row gap-10 w-full justify-end pr-10">
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
      <div className="md:hidden flex w-screen justify-end">
        <button className="z-[2] pr-10" onClick={() => toggleMenu()}>
          {!isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 my-2"
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
              className="h-12 w-12 my-2"
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
