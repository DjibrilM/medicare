import { GiHospitalCross } from "react-icons/gi";
import { GrHomeRounded } from "react-icons/gr";
import { PiBedLight } from "react-icons/pi";
// import { useRecoilValue } from "recoil";
// import userSate from "../../state/user";
import { BsClockHistory } from "react-icons/bs";
import { LiaBriefcaseMedicalSolid } from "react-icons/lia";
import { ReactNode } from "react";
import Button from "./Button";
import { TbLogout2 } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { cn } from "../../util/cn";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { AiOutlineSchedule } from "react-icons/ai";

const menuElements: Record<string, () => ReactNode> = {
  reception: () => (
    <>
      <NavLink
        to={"/reception"}
        className={({ isActive }) =>
          cn("side-menu-item", {
            "active-sidemu-item": isActive,
          })
        }
      >
        <GrHomeRounded className="" />
        <span className="text-sm ">Home</span>{" "}
      </NavLink>

      <NavLink
        to={"/doctors"}
        className={({ isActive }) =>
          cn("side-menu-item", {
            "active-sidemu-item": isActive,
          })
        }
      >
        <GrHomeRounded className="" />
        <span className="text-sm ">Doctors</span>{" "}
      </NavLink>

      <NavLink
        to={"/pharmacy"}
        className={({ isActive }) =>
          cn("side-menu-item", {
            "active-sidemu-item": isActive,
          })
        }
      >
        <LiaBriefcaseMedicalSolid />
        <span className="text-sm ">Pharmacy</span>{" "}
      </NavLink>

      <NavLink
        to={"/cases-history"}
        className={({ isActive }) =>
          cn("side-menu-item", {
            "active-sidemu-item": isActive,
          })
        }
      >
        <BsClockHistory />
        <span className="text-sm ">Cases History</span>{" "}
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
          <ul className="w-full gap-5 flex flex-col pt-10 ">
            <MenuItems />
            <hr />
            <NavLink
              to={"/apointment"}
              className={({ isActive }) =>
                cn("side-menu-item", {
                  "active-sidemu-item": isActive,
                })
              }
            >
              <IoCalendarNumberOutline />
              <span className="text-sm ">Apointment</span>{" "}
            </NavLink>

            <NavLink
              to={"/intern"}
              className={({ isActive }) =>
                cn("side-menu-item", {
                  "active-sidemu-item": isActive,
                })
              }
            >
              <PiBedLight />
              <span className="text-sm ">Interns</span>{" "}
            </NavLink>

            <NavLink
              to={"/schedule"}
              className={({ isActive }) =>
                cn("side-menu-item", {
                  "active-sidemu-item": isActive,
                })
              }
            >
              <AiOutlineSchedule />
              <span className="text-sm ">Schedule</span>{" "}
            </NavLink>
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
