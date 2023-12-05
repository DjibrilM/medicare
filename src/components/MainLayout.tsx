import { ReactNode } from "react";
import MainHeader from "./common/MainHeader";
import SideMenu from "./common/SideMenu";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex min-h-screen min-w-max overflow-hidden">
      <SideMenu />
      <div className="w-full h-full">
        <MainHeader />
        <div className=" mt-16  ml-[250px] w-full h-full">{children}</div>
      </div>
    </main>
  );
};

export default MainLayout;
