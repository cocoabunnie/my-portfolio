export default function ProjectTechStack({ data }: any) {
  return (
    <div className="my-5">
      <p className="text-center md:text-left font-bold text-[calc(5vw)] sm:text-[20px]">
        Tech Stack Used
      </p>
      <div className="grid grid-cols-2 md:flex md:flex-row">
        {data.map((item: any) => {
          return (
            <div
              key={item}
              className="uppercase flex justify-center items-center"
            >
              <p className="flex w-fit text-[calc(3.5vw)] md:text-[20px] font-bold bg-pink px-2 m-1 rounded-lg">
                {item}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
