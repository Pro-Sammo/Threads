import React from "react";

const Loading = () => {
  return (
    <div className=" rounded-md p-4 w-full mx-auto mt-16">
      <div className="animate-pulse flex space-x-4">
        <div className="flex-1 space-y-6 py-1">
          <div className="h-16 bg-slate-700  rounded"></div>
          <div className="space-y-8 pt-10">
            <div className="h-10 bg-slate-700 rounded"></div>
            <div className="h-10 bg-slate-700 rounded"></div>
            <div className="h-10 bg-slate-700 rounded"></div>
            <div className="h-10 bg-slate-700 rounded"></div>
            <div className="h-10 bg-slate-700 rounded"></div>
            <div className="h-10 bg-slate-700 rounded"></div>
            <div className="h-10 bg-slate-700 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
