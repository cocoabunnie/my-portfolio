export default function ProjectTechStack({ data }: any) {
  return (
    <div>
      <p>Tech Stack Used</p>
      <div>
        {data.map((item: any) => {
          return <p key={item}>{item}</p>
        })}
      </div>
    </div>
  )
}
