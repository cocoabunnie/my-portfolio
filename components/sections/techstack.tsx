import StackList from '../stackList'

export default function TechStack() {
  const frontendData = [
    { name: 'ReactJS', imageSrc: '/icons/reactIcon.png' },
    { name: 'NextJS', imageSrc: '/icons/nextIcon.png' },
    { name: 'Typescript', imageSrc: '/icons/tsIcon.png' },
    { name: 'JavaScript', imageSrc: '/icons/jsIcon.png' },
    { name: 'Tailwind', imageSrc: '/icons/tailwindIcon.png' },
    { name: 'ChakraUI', imageSrc: '/icons/chakraIcon.png' },
    { name: 'HTML', imageSrc: '/icons/htmlIcon.png' },
    { name: 'CSS', imageSrc: '/icons/cssIcon.png' },
  ]

  const backendData = [
    { name: 'Firebase', imageSrc: '/icons/firebaseIcon.png' },
    { name: 'MongoDB', imageSrc: '/icons/mongoIcon.svg' },
    { name: 'NodeJS', imageSrc: '/icons/nodeIcon.png' },
    { name: 'SQL', imageSrc: '/icons/sqlIcon.png' },
    { name: 'PostgreSQL', imageSrc: '/icons/postgresIcon.png' },
  ]

  return (
    <div className="font-mono h-full w-screen bg-black">
      <p className="flex font-bold text-pink text-[40px] uppercase justify-center items-center w-screen">
        Technology Stack
      </p>
      <div className="grid grid-cols-2">
        <StackList title="Frontend" data={frontendData} />
        <StackList title="Backend" data={backendData} />
      </div>
    </div>
  )
}
