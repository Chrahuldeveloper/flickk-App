import React from "react";
import { FaCloudUploadAlt } from "react-icons/fa";

export default function Home() {
  return (
    <div className="bg-black w-screen h-screen p-5">
      <div className="bg-[#1e1e1e] p-5 rounded-lg space-y-5 max-w-md flex flex-col justify-center">
        <h1 className="text-slate-300  font-semibold text-2xl">
          Hello {"Rahul"}
        </h1>
        <div>
            <FaCloudUploadAlt />
        </div>
      </div>
    </div>
  );
}
