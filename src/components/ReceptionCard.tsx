import React from "react";

interface Props {
  background: string;
  count: number;
  Icon: JSX.Element;
  label: string;
}

const ReceptionCard: React.FC<Props> = ({ background, count, Icon, label }) => {
  return (
    <div
      style={{ background: background }}
      className="w-[100%]  items-center select-none justify-between   flex px-6 py-8 rounded-[15px]"
    >
      <div className="">
        <p className=" text-white opacity-50">{label}</p>
        <h1 className="text-4xl font-semi-bold mt-2 text-primary-50">{count}</h1>
      </div>

      <div className="">
        <div className="w-20 h-20 border rounded-full items-center justify-center flex text-4xl border-[#ffffff21] text-[#ffffff76]">{Icon}</div>
      </div>
    </div>
  );
};

export default ReceptionCard;
