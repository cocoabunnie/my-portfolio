export default function Header() {
  return (
    <div className="relative flex font-mono w-screen h-screen text-white">
      <div className="absolute w-full left-0 top-60 pl-32 py-16 text-left bg-white text-black">
        <p className="font-bold text-pink text-[calc(5vw)] uppercase tracking-widest">
          Brianna Duvivier
        </p>
        <p className="text-[calc(1.5vw)] mb-4">
          Full Stack Developer, creative technologist and
          <br />
          dog enthusiast
        </p>

        <div className="flex flex-row gap-4 my-3">
          <a
            className="border border-black rounded-xl py-2 px-1 bg-black text-[calc(1vw)] text-white hover:bg-pink hover:text-white hover:border-pink"
            href={'https://github.com/cocoabunnie'}
            target={'_blank'}
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="border border-black rounded-xl py-2 px-1 bg-black text-[calc(1vw)] text-white hover:bg-pink hover:text-white hover:border-pink"
            href={'https://www.linkedin.com/in/duvbri/'}
            target={'_blank'}
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <img
        className="absolute top-60 right-0 w-[calc(40vw)] h-auto justify-end"
        src="/images/selfIllustration.png"
        alt=""
      />
    </div>
  )
}
