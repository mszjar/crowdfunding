import React from "react";

const CountBox = ({ title, value }) => {
  return (
    <div className="flex flex-col items-center w-[150px]">
      <h4 className="font-epilogue font-bold text-[30px] text-black p-3 bg-[rgba(0,0,0,0.2)] rounded-t-[10px] w-full text-center truncate">
        {value}
      </h4>
      <p className="font-epilogue font-normal text-[16px] text-[rgba(255,255,255,1)] bg-[rgba(0,0,0,0.5)] px-3 py-2 w-full rouned-b-[10px] text-center rounded-b-[10px]">
        {title}
      </p>
    </div>
  );
};

export default CountBox;
