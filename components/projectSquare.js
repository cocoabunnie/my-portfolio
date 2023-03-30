import Link from 'next/link'

export default function ProjectSquare(props) {
  return (
    <Link
      href={'/project/' + props.slug}
      className="cursor-pointer w-[600px] h-auto hover:opacity-50"
    >
      <img
        className="border border-pink border-4 rounded-lg hover:border-pink"
        src={props.imageSrc}
        alt="project"
      />
    </Link>
  )
}
