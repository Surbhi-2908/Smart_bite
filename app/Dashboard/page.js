import Sidebar from "./components/Sidebar";
import DashboardCards from "./components/DashboardCards";
import SpendingChart from "./components/SpendingChart";
import GamificationPanel from "./components/GamificationPanel";
import QuickMenu from "./components/QuickMenu";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-6 space-y-6">
        <h1 className="text-2xl font-semibold">Welcome Back, Student Name!</h1>
        <DashboardCards />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <SpendingChart />
          <GamificationPanel />
        </div>
        <QuickMenu />
      </main>
    </div>
  );
}
