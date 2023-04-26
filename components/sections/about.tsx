export default function AboutMe() {
  return (
    <div
      id="about"
      className="overscroll-none font-mono h-fit w-screen bg-black text-white mb-10"
    >
      <div className="flex flex-col lg:flex-row justify-center items-center">
        <img
          className="w-[400px] h-auto"
          src="/images/selfIllustration.png"
          alt=""
        />
        <div className="flex flex-col gap-4">
          <p className="flex text-[40px] text-pink font-bold uppercase justify-center items-center w-full">
            About Me
          </p>
          <p className="text-center lg:text-left max-w-[700px] mx-10 md:mx-0">
            My passion for programming ignited at the age of 11, when I
            developed my first computer game, &quot;Space Puppies&quot;.
            Pursuing my love for technology, I earned a degree in Computer
            Science. As a problem-solver, I enjoy creating products that solve
            real-world issues. When I&apos;m not coding, I love to spend my free
            time reading, crocheting, and bonding with my dog Mellow. I believe
            technology can have a positive impact on society, and I continuously
            learn and stay up-to-date with new technologies. I strive to use my
            skills to make a meaningful impact on the world.
          </p>
        </div>
      </div>
    </div>
  )
}
