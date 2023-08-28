import { useEffect } from "react";
import { InitialDashboard, Characteristics, Challenges } from ".";

const Dashboard = () => {
  useEffect(() => {
    document.title = "Unimar - Dashboard";
  }, []);

  return (
    <main className="bg-forest-500">
      <InitialDashboard />
      <Characteristics />
      <Challenges />
    </main>
  );
};

export default Dashboard;
