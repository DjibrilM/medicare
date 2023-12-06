import { receptionCasesListData } from "../lib/constant";
import ReceptionTableListEl from "./ReceptionTableListEl";

function ReceptionCaseTable() {
  return (
    <table className="w-full bg-white rounded-md overflow-hidden p-3">
      <div className="flex">
        <div className="px-4 py-6">
            <h1 className="text-[20px]">List of cases</h1>
        </div>
 

        <div className=""></div>
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
