import Image from 'next/image'

export default function Header() {
  return (
    <div className="relative flex font-mono h-[calc(74vh)] sm:h-[calc(84vh)] md:w-screen md:h-screen text-white">
      <div className="w-full items-center absolute left-0 top-52 md:top-60 pl-5 pt-5 pb-20 md:pl-32 md:py-16 text-left bg-white text-black">
        <p className="animate-slideInFromLeftFast md:pb-0 font-bold text-pink text-[calc(8vw)] md:text-[calc(5vw)] uppercase tracking-widest">
          Brianna Duvivier
        </p>
        <p className="hidden md:block animate-slideInFromLeftMedium text-[calc(2.5vw)] md:text-[calc(1.5vw)] mb-4">
          Full stack developer, creative technologist and
          <br />
          dog enthusiast
        </p>

        <p className="block md:hidden animate-slideInFromLeftMedium text-[calc(3vw)] md:text-[calc(1.5vw)] mb-4">
          Full Stack Developer, creative
          <br />
          technologist and dog enthusiast
        </p>

        <div className="animate-slideInFromLeftSlow flex flex-row justify-start gap-4 my-3">
          <a
            className="border border-black rounded-xl py-2 px-1 bg-black text-[calc(3.5vw)] md:text-[calc(1.5vw)] lg:text-[calc(1vw)] text-white hover:bg-pink hover:text-white hover:border-pink"
            href={'https://github.com/cocoabunnie'}
            target={'_blank'}
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="border border-black rounded-xl py-2 px-1 bg-black text-[calc(3.5vw)] md:text-[calc(1.5vw)] lg:text-[calc(1vw)] text-white hover:bg-pink hover:text-white hover:border-pink"
            href={'https://www.linkedin.com/in/duvbri/'}
            target={'_blank'}
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <Image
        className="animate-slideInFromRight absolute top-60 -right-[42px] w-[calc(70vw)] md:top-72 lg:top-60 right-0 md:w-[calc(45vw)] h-auto justify-end"
        src="/images/meOnABeanBag.png"
        alt=""
        width={10000}
        height={10000}
      />
    </div>
  )
}
