import { InitialDashboard, Characteristics, Challenges, EadBr, EadHere } from ".";
import { useEffect } from "react";

const Dashboard = () => {
  useEffect(() => {
    document.title = "Unimar - Dashboard";
  }, []);

  return (
    <main className="bg-forest-500">
      <InitialDashboard />
      <Characteristics />
      <Challenges />
      <EadBr />
      <EadHere />
    </main>
  );
};

export default Dashboard;
