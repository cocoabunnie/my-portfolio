import Link from 'next/link'

export default function LinkToProject({ link }: any) {
  return (
    <div className="animate-jiggle flex w-full justify-center items-center my-5">
      <Link
        className="w-fit h-fit p-1 rounded-lg border border-2 border-white text-[calc(3.8vw)] sm:text-[18px] md:text-[18px] hover:bg-white hover:text-black"
        target={'_blank'}
        href={link}
      >
        Check Out The Project Here!
      </Link>
    </div>
  )
}
