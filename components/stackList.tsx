export default function StackList({ title, data }: any) {
  return (
    <div className="flex flex-col gap-5 justify-center items-center text-white">
      <p className="text-[calc(5vw)] md:text-[30px]">{title}</p>
      {data.map((data: any) => {
        return (
          <div
            key={data}
            className="flex flex-row items-center gap-2 w-fit h-fit"
          >
            <img className="w-10" src={data.imageSrc} alt="icon" />
            <p className="text-[calc(4vw)] md:text-[20px]">{data.name}</p>
          </div>
        )
      })}
    </div>
  )
}
