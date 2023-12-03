import { Home, LayoutDashboard } from "lucide-react";

const menuLinks = [
  { title: "Home", icon: Home, href: "/" },
  { title: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { title: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { title: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { title: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { title: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { title: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { title: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { title: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { title: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { title: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { title: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { title: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { title: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { title: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { title: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { title: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { title: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { title: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { title: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { title: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { title: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
];

const Sidebar = ({ open }) => {
  return (
    <>
      <div className="flex gap-x-4 items-center sticky top-0 bg-orange-300 px-6 py-[15px] z-50 border border-white">
        <img
          src="./logo.png"
          alt=""
          className={`cursor-pointer duration-500 w-8 h-8`}
        />
        <h1
          className={`text-white origin-left font-medium text-2xl duration-300 ${
            !open && "scale-0"
          }`}
        >
          CliniVantage
        </h1>
      </div>
      <ul className="pt-2 p-5">
        {menuLinks.map((link) => (
          <li
            key={link.href}
            className={`text-white flex items-center gap-x-4 p-2 hover:bg-white/20 rounded-md mt-2 cursor-pointer`}
          >
            <div>
              <link.icon />
            </div>
            <span
              className={`${
                !open && "scale-0"
              } text-base origin-left duration-300`}
            >
              {link.title}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Sidebar;
