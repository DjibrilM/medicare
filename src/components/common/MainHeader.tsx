import React from "react";
import { cn } from "../../util/cn";

const MainHeader: React.FC = () => {
  return (
    <>
      <header className="h-16 fixed bg-primary-500 w-[calc(100%-250px)] left-[250px] flex items-center px-10"></header>
    </>
  );
};

export default MainHeader;
