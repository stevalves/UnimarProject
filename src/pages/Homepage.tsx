import { TbArrowDown } from "react-icons/tb"

interface iHomepage { }

const Homepage = ({ }: iHomepage) => {
  return (
    <>
      <section className="h-screen w-full flex items-center justify-center">
        <div className="p-4 md:p-16 flex flex-col items-center justify-center bg-forest-200/20 backdrop-blur-sm rounded">
          <h1 className="text-4xl font-bold text-center text-forest-50">
            Lorem ipsum dolor sit amet,<br /> <span className="text-forest-200 underline">consectetur</span> adipiscing elit,
          </h1>
          <div className="flex w-full mt-16 px-4 justify-evenly text-forest-50">
            <button className="border-2 px-4 py-2 rounded border-forest-50 hover:bg-forest-600/50 transition-colors duration-300">Need</button>
            <button className="border-2 px-4 py-2 rounded border-forest-50 hover:bg-forest-600/50 transition-colors duration-300">Help</button>
          </div>
        </div>
        <div className="absolute bottom-12 text-forest-50 text-5xl animate-goDown">
          <TbArrowDown />
        </div>
      </section>
      <section className="h-[400px] bg-forest-600/90">
        <div className="container h-full p-2 mx-auto flex gap-2 items-center overflow-x-auto">
          <div className="w-[360px] min-w-[360px] h-5/6 bg-white"></div>
          <div className="w-[360px] min-w-[360px] h-5/6 bg-white"></div>
          <div className="w-[360px] min-w-[360px] h-5/6 bg-white"></div>
          <div className="w-[360px] min-w-[360px] h-5/6 bg-white"></div>
          <div className="w-[360px] min-w-[360px] h-5/6 bg-white"></div>
          <div className="w-[360px] min-w-[360px] h-5/6 bg-white"></div>
        </div>
      </section>
    </>
  )
}

export default Homepage