import { Link, useLocation, Location } from "react-router-dom";
import Header from "../../../components/Header/Header";
import unitalk from "../../../assets/unitalk-onlydraw1.png";
import { useEffect, useState } from "react";
import Hamburguer from "../../../components/Header/Hamburguer";
import useAuth from "../../../hooks/useAuth";
import Unlogged from "./Unlogged";
import Logged from "./Logged";

const UniTalkHeader = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { user } = useAuth();

  const location: Location = useLocation();
  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <Header>
      <Link to="/unitalk" className="flex items-center gap-2 md:w-max w-12">
        <img src={unitalk} alt="UniTalk logo" />
        <h1 className="font-logo md:text-5xl text-2xl">UniTalk</h1>
      </Link>
      {user ? (
        <Logged />
      ) : (
        <Unlogged open={open} />
      )}
      {!user && <Hamburguer open={open} setOpen={setOpen} />}
    </Header>
  );
};

export default UniTalkHeader;
