export default function Header() {
  return (
    <div className="font-mono relative w-screen h-screen bg-black text-white">
      <div className="absolute w-full left-0 top-60 pl-32 py-16 text-left bg-white text-black">
        <p className="font-bold text-pink text-[70px] uppercase tracking-widest">
          Brianna Duvivier
        </p>
        <p className="text-[20px] mb-4">
          Full Stack Developer, creative technologist and
          <br />
          dog enthusiast
        </p>

        <div className="flex flex-row gap-4 my-3">
          <a
            className="border border-black rounded-xl py-2 px-1 bg-black text-white hover:bg-pink hover:text-white hover:border-pink"
            href={'https://github.com/cocoabunnie'}
            target={'_blank'}
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="border border-black rounded-xl py-2 px-1 bg-black text-white hover:bg-pink hover:text-white hover:border-pink"
            href={'https://www.linkedin.com/in/duvbri/'}
            target={'_blank'}
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <img
        className="absolute top-60 right-10 w-[600px] h-auto justify-end"
        src="/images/selfIllustration.png"
        alt=""
      />
    </div>
  )
}
