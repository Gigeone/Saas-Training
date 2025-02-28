"use client";
import { CreditCard, Notebook, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DashboardNav = () => {
  const pathname = usePathname();
  const menuDashboard = [
    {
      name: "Notes",
      path: "/dashboard/notes",
      icon: <Notebook />,
    },
    {
      name: "Payment",
      path: "/dashboard/payment",
      icon: <CreditCard />,
    },
    {
      name: "Settings",
      path: "/dashboard/settings",
      icon: <Settings />,
    },
  ];
  return (
    <nav className="flex md:flex-col md:h-full md:w-16 w-full lg:w-60 gap-2 flex-wrap">
      {menuDashboard.map((link, index) => {
        const isActive = pathname.startsWith(link.path);
        return (
          <Link href={link.path} key={index} passHref>
            <div
              className={`flex items-center justify-center lg:justify-start gap-2 cursor-pointer lg:p-3 p-3 hover:bg-orange-500  hover:bg-opacity-50 hover:text-white text-sm font-bold rounded-md ${
                isActive && "bg-orange-500 text-white"
              }`}
            >
              <div className="w-4 mr-2">{link.icon}</div>
              <span className="hidden lg:block">{link.name}</span>
            </div>
          </Link>
        );
      })}
    </nav>
  );
};

export default DashboardNav;
