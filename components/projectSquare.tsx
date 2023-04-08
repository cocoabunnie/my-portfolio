import Link from 'next/link'

export default function ProjectSquare({ imageSrc, slug }: any) {
  return (
    <Link
      href={'/project/' + slug}
      className="cursor-pointer w-[calc(70vw)] lg:w-[calc(45vw)] hover:opacity-50"
    >
      <img
        className="border border-pink border-4 rounded-lg hover:border-pink"
        src={imageSrc}
        alt="project"
      />
    </Link>
  )
}
