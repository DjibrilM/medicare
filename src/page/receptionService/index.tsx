import React from "react";
import ReceptionCard from "../../components/ReceptionCard";
import { CiMedicalCase } from "react-icons/ci";
import { CiMedicalCross } from "react-icons/ci";
import { LuBed } from "react-icons/lu";
import ReceptionCaseTable from "../../components/ReceptionCaseTable";

const RecpetionService: React.FC = () => {
  return (
    <main className="w-full p-4   h-full ">
      <div className="flex md:flex-nowrap md:gap-5 flex-wrap justify-between pt-5">
        <ReceptionCard
          background="linear-gradient(to top right, #F87171 1%, #CF1512 100%)"
          Icon={<CiMedicalCase />}
          label="Available Case"
          count={40}
        />

        <ReceptionCard
          background="linear-gradient(to top right, #4ADE80 1%, #16a34a 100%)"
          Icon={<CiMedicalCross />}
          label="Doctors"
          count={17}
        />

        <ReceptionCard
          background="linear-gradient(to top right, #A78BFA 1%, #7c3aed 100%)"
          Icon={<LuBed />}
          label="Free rooms"
          count={13}
        />
      </div>

      <div className="w-full mt-20">
        <ReceptionCaseTable />
      </div>
    </main>
  );
};

export default RecpetionService;
