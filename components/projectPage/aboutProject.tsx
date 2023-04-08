export default function AboutProject({ about }: any) {
  return (
    <div className="my-5 text-center md:text-left">
      <p className="font-bold uppercase text-[calc(5vw)] sm:text-[20px]">
        About This Project
      </p>
      <p className="text-[calc(3.5vw)] sm:text-[18px]">{about}</p>
    </div>
  )
}
