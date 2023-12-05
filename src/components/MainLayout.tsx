import { ReactNode } from "react";
import MainHeader from "./common/MainHeader";
import SideMenu from "./common/SideMenu";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex min-h-screen min-w-max overflow-hidden">
      <SideMenu />
      <div className="w-full h-full bg-green-300">
        <MainHeader />
      </div>
    </main>
  );
};

export default MainLayout;
