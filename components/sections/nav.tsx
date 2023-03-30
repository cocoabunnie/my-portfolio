import Link from 'next/link'

export default function NavigationBar() {
  return (
    <div className="font-mono fixed flex flex-row pt-2 py-[10px] w-screen z-[1] bg-black text-white">
      <div className="flex flex-row gap-10 w-full justify-start pl-10">
        <Link className="uppercase" href="/">
          Brianna Duvivier 🐶💕
        </Link>
      </div>
      <div className="flex flex-row gap-10 w-full justify-end pr-10">
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
    </div>
  )
}
