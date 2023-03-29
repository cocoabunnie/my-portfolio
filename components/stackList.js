export default function StackList(props) {
  return (
    <div className="flex flex-col gap-5 justify-center items-center text-white">
      <p className="text-[30px]">{props.title}</p>
      {props.data.map((data, index) => {
        return (
          <div
            key={index}
            className="flex flex-row items-center gap-2 w-fit h-fit"
          >
            <img className="w-10" src={data.imageSrc} alt="icon" />
            <p className="text-[20px]">{data.name}</p>
          </div>
        )
      })}
    </div>
  )
}
