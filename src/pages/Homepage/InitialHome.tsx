import { TbArrowDown } from "react-icons/tb"
import { Link } from "react-router-dom"

const InitialHome = () => {
  return (
    <section className="h-screen w-full flex items-center justify-center">
        <div className="p-4 md:p-16 flex flex-col items-center justify-center bg-forest-200/20 backdrop-blur-xl rounded">
          <h1 data-aos="fade-down" data-aos-delay="300" className="text-4xl font-bold text-center text-forest-50 leading-relaxed">
            Começe acreditando que<br /> <span className="text-forest-200 underline">TUDO</span> é possível!
          </h1>
          <div className="flex flex-col gap-4 w-full mt-16 px-4 justify-evenly text-forest-50">
            <Link to="ead" data-aos="fade-left" data-aos-delay="500" className="border-2 px-4 py-2 rounded border-forest-50 hover:bg-forest-600/50 text-center">Vamos lá</Link>
            <a href="#aboutus" data-aos="fade-right" data-aos-delay="700" className="border-2 px-4 py-2 rounded border-forest-50 hover:bg-forest-600/50 text-center">Quem somos nós?</a>
          </div>
        </div>
        <div className="absolute bottom-12 text-forest-50 text-5xl animate-goDown">
          <TbArrowDown />
        </div>
      </section>
  )
}

export default InitialHome