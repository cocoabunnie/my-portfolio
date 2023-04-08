import Image from 'next/image'

export default function Header() {
  return (
    <div className="relative flex font-mono w-screen h-screen text-white">
      <div className="w-full items-center absolute left-0 top-60 pl-5 md:pl-32 py-16 text-left bg-white text-black">
        <p className="animate-slideInFromLeftFast font-bold text-pink text-[calc(8vw)] md:text-[calc(5vw)] uppercase tracking-widest">
          Brianna Duvivier
        </p>
        <p className="animate-slideInFromLeftMedium text-[calc(2.5vw)] md:text-[calc(1.5vw)] mb-4">
          Full Stack Developer, creative technologist and
          <br />
          dog enthusiast
        </p>

        <div className="animate-slideInFromLeftSlow flex flex-row justify-start gap-4 my-3">
          <a
            className="border border-black rounded-xl py-2 px-1 bg-black text-[calc(3vw)] md:text-[calc(1.5vw)] lg:text-[calc(1vw)] text-white hover:bg-pink hover:text-white hover:border-pink"
            href={'https://github.com/cocoabunnie'}
            target={'_blank'}
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="border border-black rounded-xl py-2 px-1 bg-black text-[calc(3vw)] md:text-[calc(1.5vw)] lg:text-[calc(1vw)] text-white hover:bg-pink hover:text-white hover:border-pink"
            href={'https://www.linkedin.com/in/duvbri/'}
            target={'_blank'}
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <Image
        className="animate-slideInFromRight absolute top-96 w-[calc(60vw)] md:top-72 lg:top-60 right-0 md:w-[calc(45vw)] h-auto justify-end"
        src="/images/meOnABeanBag.png"
        alt=""
        width={10000}
        height={10000}
      />
    </div>
  )
}
