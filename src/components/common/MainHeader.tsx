import React from "react";
import { TbFingerprintScan } from "react-icons/tb";
import IconButton from "./Button/IconButton";
// import { cn } from "../../util/cn";

const MainHeader: React.FC = () => {
  return (
    <>
      <header className="h-16 fixed z-[1000] justify-between bg-primary-500 w-[calc(100%-250px)] left-[250px] flex items-center px-5">
        <div className="">
          <IconButton variant="contained" rounded>
            <TbFingerprintScan className="text-3xl w-6 h-6 text-primary-50" />
          </IconButton>
        </div>
        <div className="flex gap-3 text-right">
          <div className="">
            <h1 className="font-semibold text-primary-100 select-none">Marc</h1>
            <p className="text-sm text-primary-50 opacity-30 select-none">
              Reception
            </p>
          </div>

          <div className="w-12 h-12 flex items-center justify-center bg-primary-600 p-2 rounded">
            <h1 className="text-2xl text-primary-400 select-none">M</h1>
          </div>
        </div>
      </header>
    </>
  );
};

export default MainHeader;
