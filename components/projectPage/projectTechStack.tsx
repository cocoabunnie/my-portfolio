export default function ProjectTechStack({ data }: any) {
  return (
    <div className="my-5">
      <p className="font-bold">Tech Stack Used</p>
      <div className="flex flex-row">
        {data.map((item: any) => {
          return (
            <div
              key={item}
              className="uppercase font-bold w-fit h-fit bg-pink px-2 m-1 rounded-lg"
            >
              {item}
            </div>
          )
        })}
      </div>
    </div>
  )
}
