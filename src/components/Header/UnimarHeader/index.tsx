import { Link } from "react-router-dom";
import Header from "..";
import Logo from "../../Logo";
import NavBar from "./NavBar";

const UnimarHeader = () => {
  return (
    <Header>
      <Link to="/unimar">
        <Logo />
      </Link>
      <NavBar />
    </Header>
  );
};

export default UnimarHeader;
