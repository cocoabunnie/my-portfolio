export default function NavigationBar() {
  return (
    <div className="font-mono fixed flex flex-row pt-2 py-[10px] w-screen z-[1] bg-black text-white">
      <div className="flex flex-row gap-10 w-full justify-start pl-10">
        <p className="uppercase">Brianna Duvivier 🐶💕</p>
      </div>
      <div className="flex flex-row gap-10 w-full justify-end pr-10">
        <a
          className="cursor-pointer px-2 py-1 rounded-xl hover:bg-pink"
          href="#projects"
        >
          Projects
        </a>
        <p className="cursor-pointer px-2 py-1 rounded-xl hover:bg-pink">
          Resume
        </p>
        <a
          className="cursor-pointer px-2 py-1 rounded-xl hover:bg-pink"
          href="#about"
        >
          About
        </a>
      </div>
    </div>
  )
}
