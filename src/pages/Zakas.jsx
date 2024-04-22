import React from "react";
import BackupTableIcon from "@mui/icons-material/BackupTable";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ModeIcon from "@mui/icons-material/Mode";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import TableChartIcon from "@mui/icons-material/TableChart";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import chap from "./../assets/chap.svg";
import ong from "./../assets/ong.svg";
import Table from "./Table";

const Zakas = () => {
  return (
    <div className=" w-[1400px] h-[643px]">
      <main>
        <div className=" items-center flex justify-between">
          <h2 className=" font-bold  text-xl">Заказы</h2>
          <div className=" flex">
            <span className=" w-[130px] h-[44px] border border-[#6580A8] flex items-center gap-3">
              <span className=" pl-2 text-[#6580A8]">
                <BackupTableIcon />
              </span>
              <h2 className=" text-[#6E8BB7] font-normal">Таблица</h2>
            </span>
            <span className=" w-[130px] h-[44px] border border-[#6580A8] flex items-center gap-3">
              <span className=" pl-2 text-[#6580A8]">
                <LocationOnIcon />
              </span>
              <h2 className=" text-[#6E8BB7] font-normal">Карта</h2>
            </span>{" "}
            <span className=" w-[130px] h-[44px] border border-[#6580A8] flex items-center gap-3">
              <span className=" pl-2 text-blue-400 ">
                <ModeIcon />
              </span>
              <h2 className=" text-blue-400 font-normal">Действия</h2>
            </span>
            <span className=" w-[130px] h-[44px] border border-[#6580A8] flex items-center gap-3">
              <span className=" pl-2 text-green-400 ">
                <AddIcon />
              </span>
              <h2 className=" text-green-400 font-normal">Действия</h2>
            </span>
          </div>
        </div>
        <div className=" flex items-center justify-between mt-4">
          <span className=" pt-3 py-3 w-[756px]  pr-[300px] border rounded ">
            <span className=" pl-3">
              <SearchIcon />
            </span>
            <input
              type="text"
              placeholder="Поиск"
              className=" outline-none text-xl"
            />
          </span>
          <div className=" flex">
            <div className=" items-center mr-6 gap-3 flex w-[145px]">
              {/* <img className="w-2 border-2 p-2" src={chap} alt="" /> */}
              <span className=" text-[#4094F7] border-2">
                <KeyboardArrowLeftIcon />
              </span>
              <h2 className=" font-normal text-sm">Сегодня</h2>
              {/* <img className=" w-2" src={ong} alt="" /> */}
              <span className=" text-[#4094F7] border-2">
                <KeyboardArrowRightIcon />
              </span>
            </div>
            <div className=" gap-2 justify-center mr-3 flex items-center">
              <span className="w-5 h-5">
                <TableChartIcon />
              </span>
              <h2 className=" font-medium text-sm">Столбцы</h2>
            </div>
            <div className=" ml-2 gap-2 mr-3 flex items-center">
              <span>
                <FilterAltIcon />
              </span>
              <h2 className=" font-medium text-sm">Фильтр</h2>
            </div>
            <div className=" gap-2 flex items-center">
              <span>
                <ArrowDownwardIcon />
              </span>
              <h2 className=" font-medium text-sm">Скачать</h2>
            </div>
          </div>
        </div>
        <div>
          {/* table */}

          <div>
            <Table />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Zakas;
