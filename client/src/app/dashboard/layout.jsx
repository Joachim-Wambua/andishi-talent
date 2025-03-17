"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { IoFolderOpenOutline, IoSettingsOutline } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { ImNewspaper } from "react-icons/im";
import { LiaBullhornSolid } from "react-icons/lia";
import { LuClipboardList } from "react-icons/lu";
import { MdOutlineChat, MdOutlineHeadsetMic } from "react-icons/md";
import { PiHandCoins } from "react-icons/pi";
import { RxHamburgerMenu, RxDashboard } from "react-icons/rx";
import { RiGraduationCapLine } from "react-icons/ri";

const DashboardLayout = ({ children, role }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isCareerResourcesOpen, setIsCareerResourcesOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleCareerResources = () =>
    setIsCareerResourcesOpen(!isCareerResourcesOpen);

  const menuItems = {
    admin: [
      { name: "Dashboard", link: "/dashboard/admin", icon: <RxDashboard /> },
      { name: "Courses", link: "/courses", icon: <RiGraduationCapLine /> },
      { name: "Students", link: "/students", icon: "👨‍🎓" },
      { name: "Assignments", link: "/assignments", icon: <LuClipboardList /> },
      { name: "Chat Box", link: "/chat", icon: <MdOutlineChat /> },
      { name: "Support", link: "/support", icon: <MdOutlineHeadsetMic /> },
      { name: "Settings", link: "/settings", icon: <IoSettingsOutline /> },
    ],
    student: [
      { name: "Dashboard", link: "/dashboard/student", icon: <RxDashboard /> },
      { name: "Courses", link: "/courses", icon: <RiGraduationCapLine /> },
      { name: "Assignments", link: "/assignments", icon: <LuClipboardList /> },
      {
        name: "Career Resources",
        icon: <IoFolderOpenOutline />,
        subMenu: [
          { name: "Events", link: "/events", icon: <LiaBullhornSolid /> },
          {
            name: "Opportunities",
            link: "/opportunities",
            icon: <PiHandCoins />,
          },
          { name: "Blog", link: "/blog", icon: <ImNewspaper /> },
        ],
      },
      { name: "Mentor Chat", link: "/mentor-chat", icon: <MdOutlineChat /> },
      { name: "Support", link: "/support", icon: <MdOutlineHeadsetMic /> },
      { name: "Settings", link: "/settings", icon: <IoSettingsOutline /> },
    ],
  };

  // Ensure the role exists, otherwise default to 'student'
  const selectedMenu = menuItems[role] || menuItems.student;

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <motion.aside
        animate={{ width: isSidebarOpen ? 250 : 0 }}
        transition={{ duration: 0.3 }}
        className="bg-[#e6f4f8] text-[#0D1216] font-nunito p-6 min-h-screen overflow-hidden"
      >
        <div className={`${isSidebarOpen ? "m-0" : "-m-4" }`} >
          <button onClick={toggleSidebar} className="mb-4 p-2">
            <RxHamburgerMenu className="text-xl" />
          </button>
          <nav>
            <ul>
              {selectedMenu.map((item) => (
                <li key={item.name} className="mb-2">
                  {item.subMenu ? (
                    <div>
                      <button
                        onClick={toggleCareerResources}
                        className="flex items-center p-2 hover:bg-[#21B1E6] rounded w-full text-left"
                      >
                        <span>{item.icon}</span>
                        <span
                          className={`ml-2 flex-1 ${
                            !isSidebarOpen && "hidden"
                          }`}
                        >
                          {item.name}
                        </span>
                        {isCareerResourcesOpen ? (
                          <IoIosArrowDown />
                        ) : (
                          <IoIosArrowUp />
                        )}
                      </button>
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: isCareerResourcesOpen ? "auto" : 0,
                          opacity: isCareerResourcesOpen ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className={`ml-4 mt-1 overflow-hidden ${
                          !isSidebarOpen && "hidden"
                        }`}
                      >
                        {item.subMenu.map((sub) => (
                          <li key={sub.name} className="mb-1">
                            <a
                              href={sub.link}
                              className="flex items-center p-2 hover:bg-[#21B1E6] rounded"
                            >
                              <span>{sub.icon}</span>
                              <span className="ml-2">{sub.name}</span>
                            </a>
                          </li>
                        ))}
                      </motion.ul>
                    </div>
                  ) : (
                    <a
                      href={item.link || "#"}
                      className="flex items-center p-2 hover:bg-[#21B1E6] rounded"
                    >
                      <span>{item.icon}</span>
                      <span className={`ml-2 ${!isSidebarOpen && "hidden"}`}>
                        {item.name}
                      </span>
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-white">{children}</main>
    </div>
  );
};

export default DashboardLayout;
