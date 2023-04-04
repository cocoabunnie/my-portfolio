import Link from 'next/link'

export default function LinkToProject({ link }: any) {
  return (
    <div className="flex w-full justify-center items-center my-5">
      <Link
        className="w-fit h-fit p-1 rounded-lg border border-2 border-white hover:bg-white hover:text-black"
        target={'_blank'}
        href={link}
      >
        Check Out The Project Here!
      </Link>
    </div>
  )
}
