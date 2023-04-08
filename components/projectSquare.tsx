import Image from 'next/image'
import Link from 'next/link'

export default function ProjectSquare({ imageSrc, slug }: any) {
  return (
    <Link
      href={'/project/' + slug}
      className="cursor-pointer w-[calc(90vw)] lg:w-[calc(45vw)] hover:opacity-50"
    >
      <Image
        className="border border-pink border-4 rounded-lg hover:border-pink"
        src={imageSrc}
        alt="project"
        width={1000}
        height={1000}
      />
    </Link>
  )
}
