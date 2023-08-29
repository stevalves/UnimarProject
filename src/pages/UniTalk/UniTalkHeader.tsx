import { Link } from "react-router-dom"
import Header from "../../components/Header/Header"
import unitalk from "../../assets/unitalk-onlydraw1.png";

const UniTalkHeader = () => {
  return (
    <Header>
      <Link to="/unitalk" className="flex items-center gap-2 md:w-max w-12">
        <img src={unitalk} alt="UniTalk logo" />
        <h1 className="font-logo md:text-5xl text-2xl">UniTalk</h1>
      </Link>
      <div className="flex border-l border-forest-50 pl-4 text-2xl font-logo gap-2">
        <Link to="/unitalk/register" className="border px-2 py-1 hover:bg-forest-50 hover:text-forest-900 duration-300 transition-colors">Registro</Link>
        <Link to="/unitalk/login" className="border px-2 py-1 hover:bg-forest-50 hover:text-forest-900 duration-300 transition-colors">Login</Link>
      </div>
    </Header>
  )
}

export default UniTalkHeader