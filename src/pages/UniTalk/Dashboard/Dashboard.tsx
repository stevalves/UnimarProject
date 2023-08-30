import { AiOutlineMail } from "react-icons/ai";
import { BiHash } from "react-icons/bi";
import { PiSuitcaseDuotone, PiTargetDuotone, PiHouseBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import { BsCameraVideo, BsFillImageFill } from "react-icons/bs";
import useAuth from "../../../hooks/useAuth";

const Dashboard = () => {

  const { user } = useAuth()

  return (
    <div className="bg-gradient-to-r from-forest-800 to-forest-900 py-32 font-logo">
      <div className="container h-full mx-auto flex">
        <nav className="w-1/6 flex flex-col items-center h-max sticky top-28">
          <ul className="text-2xl w-full bg-forest-700 rounded-left flex flex-col gap-4 p-2 text-forest-50">
            <li className="border-b border-forest-50">
              <Link to="/unitalk/dashboard" className="flex gap-2 items-center py-2 hover:text-forest-100"><PiHouseBold /> Home</Link>
            </li>
            <li className="border-b border-forest-50">
              <Link to="/unitalk/dashboard" className="flex gap-2 items-center py-2 hover:text-forest-100"><BiHash /> Explorar</Link></li>
            <li className="border-b border-forest-50">
              <Link to="/unitalk/dashboard" className="flex gap-2 items-center py-2 hover:text-forest-100"><PiSuitcaseDuotone /> Vagas</Link></li>
            <li className="border-b border-forest-50">
              <Link to="/unitalk/dashboard" className="flex gap-2 items-center py-2 hover:text-forest-100"><PiTargetDuotone /> Aplicadas</Link></li>
            <li className="border-b border-forest-50">
              <Link to="/unitalk/dashboard" className="flex gap-2 items-center py-2 hover:text-forest-100"><AiOutlineMail /> Mensagens</Link></li>
          </ul>
          <button className="my-2 py-2 px-4 w-max border border-forest-50 text-forest-50 rounded-sm bg-transparent hover:bg-white/10 transition-colors duration-300">Contribuir</button>
        </nav>
        <main className="h-[400vh] rounded-top w-4/6 bg-black p-2 text-forest-50">
          <div className="border-b border-forest-50 py-2 sm:w-4/5 mx-auto ">
            <div className="flex gap-4 items-center mb-2 w-full">
              <span className="w-8 h-8 flex items-center justify-center text-xl p-6 rounded-full border">{user.split("")[0]}</span>
              <h6>{user}</h6>
            </div>
            <textarea name="post" id="publi" className="bg-forest-800 text-forest-50 resize-none placeholder:text-forest-50/75 w-full rounded min-h-[150px]" placeholder="Iniciar um assunto" />
            <div className="w-full flex justify-between">
              <div className="flex gap-4">
                <button className="w-max border p-2 rounded flex items-center gap-2"><BsFillImageFill />Imagem</button>
                <button className="w-max border p-2 rounded flex items-center gap-2"><BsCameraVideo />Vídeo</button>
              </div>
              <button className="w-max border p-2 rounded">Publicar</button>
            </div>
          </div>
        </main>
        <aside className="h-max w-1/6 bg-forest-700 p-2 rounded-right sticky top-28 text-forest-50">
          Últimas notícias
        </aside>
      </div>
    </div>
  );
};

export default Dashboard;
