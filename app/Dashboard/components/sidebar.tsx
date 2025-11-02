"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Orders", href: "/orders" },
    { name: "Rewards", href: "/rewards" },
    { name: "Sustainability", href: "/sustainability" },
    { name: "Profile", href: "/profile" },
  ];

  return (
    <div className="w-1/4 bg-white h-screen shadow-md p-6 flex flex-col">
      <h2 className="text-2xl font-bold text-green-600 mb-6">SmartBite</h2>
      <nav className="space-y-3">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`block p-2 rounded-md text-gray-700 hover:bg-green-100 ${
              pathname === item.href ? "bg-green-200 font-semibold" : ""
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
      <div className="mt-auto">
        <button className="w-full bg-red-100 text-red-600 p-2 rounded-md hover:bg-red-200">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
