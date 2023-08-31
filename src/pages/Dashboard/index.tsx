import Aside from "./Aside";
import Nav from "./Nav";
import Main from "./Main";

const Dashboard = () => {

  return (
    <div className="bg-gradient-to-r from-forest-800 to-forest-900 py-32 font-logo">
      <div className="container h-full mx-auto flex">
        <Nav />
        <Main />
        <Aside />
      </div>
    </div>
  );
};

export default Dashboard;
