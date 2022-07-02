import React from "react";
import MainChart from "../../../componants/comman/Chart/MainChart";
import MainSubChart from "../../../componants/comman/Chart/MainSubChart";
import DownloadChart from "../../../componants/comman/Chart/DownloadChart";
const DashBoard = () => {
  return (
    <div className="p-3 mt-3">
      <MainChart/>
      <div className="w-100 d-flex flex-row">
        <div className="w-50 p-5">
          <MainSubChart/>
        </div>
        <div className="w-50 p-5">
          <DownloadChart />
        </div>
      </div>
    </div>
  );
};
export default DashBoard;
