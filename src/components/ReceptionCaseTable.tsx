import { receptionCasesListData } from "../lib/constant";
import ReceptionTableListEl from "./ReceptionTableListEl";
import Button from "./common/Button";
import { IoPersonAddOutline } from "react-icons/io5";
import IconButton from "./common/Button/IconButton";
import { TbFingerprintScan } from "react-icons/tb";

function ReceptionCaseTable() {
  return (
    <table className="w-full bg-white rounded-md overflow-hidden p-3">
      <div className="flex px-4 py-6 w-full justify-between">
        <div className="">
          <h1 className="text-[18px] text-text-700 font-semibold">
            List of cases
          </h1>
          <p className="text-[12px] text-slate-400 mt-1">140 Available cases</p>
        </div>

        <div prefix="" className="flex gap-3 ">
          <Button variant="contained" className="items-center flex gap-2">
            <IoPersonAddOutline />
            <span>Add case</span>
          </Button>

          <IconButton variant="outline" >
            <TbFingerprintScan/>
          </IconButton>
        </div>
      </div>

      <div className="p-4">
        <table className="w-full">
          <tr className="justify-between text-text-500 text-sm font-semibold">
            <th className="p-4 px-7 rounded-tl-lg rounded-bl-lg bg-gray-200">
              Name
            </th>
            <th className="p-4 px-7 bg-gray-200">Number</th>
            <th className="p-4 px-7 bg-gray-200">Age</th>
            <th className="p-4 px-7 bg-gray-200">ID</th>
            <th className="p-4 px-7 rounded-tr-lg  rounded-br-lg  bg-gray-200">
              Test count
            </th>
          </tr>

          {receptionCasesListData.map((data, index) => (
            <ReceptionTableListEl key={index} {...data} />
          ))}
        </table>
      </div>
    </table>
  );
}

export default ReceptionCaseTable;
