export default function AboutMe() {
  return (
    <div
      id="about"
      className="font-mono h-[calc(50vh)] w-screen bg-black text-white"
    >
      <div className="flex flex-row justify-center items-center">
        <img
          className="w-[400px] h-auto"
          src="/images/selfIllustration.png"
          alt=""
        />
        <div className="flex flex-col gap-4">
          <p className="flex text-[40px] text-pink font-bold uppercase justify-center items-center w-full">
            About Me
          </p>
          <p>
            This is just filler text but this is basically gonna talk a little
            bit about
            <br />
            me... how I got into programming, my backstory/history, etc. 🙃 And
            the
            <br />
            picture might be an actual picture of me or an illustration
            depending
            <br />
            on how I&apos;m feeling when I get to working on that part.
          </p>
        </div>
      </div>
    </div>
  )
}
