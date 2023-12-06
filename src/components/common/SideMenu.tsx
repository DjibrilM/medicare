import { GiHospitalCross } from "react-icons/gi";
import { GrHomeRounded } from "react-icons/gr";
import { HiMiniUserGroup } from "react-icons/hi2";
import { MdSupervisorAccount } from "react-icons/md";
import { IoLeafOutline } from "react-icons/io5";
// import { useRecoilValue } from "recoil";
// import userSate from "../../state/user";
import { BsClockHistory } from "react-icons/bs";
import { ReactNode } from "react";
import Button from "./Button";
import { TbLogout2 } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { cn } from "../../util/cn";

const menuElements: Record<string, () => ReactNode> = {
  reception: () => (
    <>
      <NavLink
        to={"/reception"}
        className={({ isActive }) =>
          cn("hover:text-primary-500", {
            "active-side-menu text-primary-500 font-bold ": isActive,
            " text-text-500": !isActive,
          })
        }
      >
        <li className="flex items-center relative gap-3 pt-5">
          <GrHomeRounded className="text-3xl" />
          <span className="text-sm ">Home</span>{" "}
          <div className="w-full absolute"></div>
        </li>
      </NavLink>

      <NavLink
        to={"/doctors"}
        className={({ isActive }) =>
          cn("hover:text-primary-500", {
            "active-side-menu text-primary-500 font-bold": isActive,
            " text-text-500": !isActive,
          })
        }
      >
        <li className="flex items-center relative gap-3 pt-5">
          <MdSupervisorAccount className="text-3xl" />
          <span className="text-sm">Doctors</span>{" "}
          <div className="w-full absolute"></div>
        </li>
      </NavLink>

      <NavLink
        to={"/clients"}
        className={({ isActive }) =>
          cn("hover:text-primary-500", {
            "active-side-menu text-primary-500 font-bold": isActive,
            " text-text-500": !isActive,
          })
        }
      >
        <li className="flex items-center relative gap-3 pt-5">
          <HiMiniUserGroup className="text-3xl" />
          <span className="text-sm">Clients</span>{" "}
          <div className="w-full absolute"></div>
        </li>
      </NavLink>

      <NavLink
        to={"/pharmacy"}
        className={({ isActive }) =>
          cn("hover:text-primary-500", {
            "active-side-menu text-primary-500 font-bold": isActive,
            " text-text-500": !isActive,
          })
        }
      >
        <li className="flex items-center relative gap-3 pt-5">
          <IoLeafOutline className="text-3xl" />
          <span className="text-sm">Pharmacy</span>{" "}
          <div className="w-full absolute"></div>
        </li>
      </NavLink>

      <NavLink
        to={"/pharmacy"}
        className={({ isActive }) =>
          cn("hover:text-primary-500", {
            "active-side-menu text-primary-500 font-bold": isActive,
            " text-text-500": !isActive,
          })
        }
      >
        <li className="flex items-center relative gap-3 pt-5">
          <BsClockHistory className="text-3xl" />
          <span className="text-sm">Cases History</span>{" "}
          <div className="w-full absolute"></div>
        </li>
      </NavLink>
    </>
  ),
};

const SideMenu = () => {
  // const user = useRecoilValue(userSate);
  const MenuItems = menuElements.reception;

  return (
    <aside className="min-h-screen border-r border-[#9c949414] fixed max-w-[250px] pt-16 w-full bg-white">
      <div className="w-full h-screen relative">
        <div className="w-full flex items-center justify-center">
          <GiHospitalCross className="text-4xl text-primary-600" />
        </div>

        <div className="w-full h-full flex flex-col  justify-between">
          <ul className="w-full gap-5 flex flex-col px-5 pt-10 ">
            <MenuItems />
          </ul>

          <div className="w-full flex  items-center h-20 bottom-20 absolute  px-5 ">
            <Button
              className="w-full flex items-center justify-center gap-2"
              variant={"contained"}
            >
              <TbLogout2 className="text-2xl" />
              <span className="">Logout</span>
            </Button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideMenu;
