import React from "react";

import AddIcon from "@mui/icons-material/Add";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";



import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import NotificationsIcon from '@mui/icons-material/Notifications';
import GroupIcon from "@mui/icons-material/Group";
import StoreIcon from "@mui/icons-material/Store";
import SearchIcon from "@mui/icons-material/Search";
import TableChartIcon from "@mui/icons-material/TableChart";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Klient = () => {
  return (
    <div className=" bg-[#DCE9F9] w-[1400px] h-[890px]">
      <main>
        <div>
          <div className="border flex items-center justify-between bg-white">
            <h1 className=" font-semibold text-lg py-5 pl-5">Клиенты</h1>
            <button>
              <div className="flex gap-2 w-[155px] h-16 border">
                <span className=" py-5 pl-5 text-green-400">
                  <AddIcon />
                </span>
                <h2 className="py-5 text-green-400 ">Добавить</h2>
              </div>
            </button>
          </div>
          <div>
            <div className=" bg-white flex items-center justify-between mt-4">
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
                  <span className=" text-[#4094F7] border-2">
                    <KeyboardArrowLeftIcon />
                  </span>
                  <h2 className=" font-normal text-sm">Сегодня</h2>
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
          </div>
          <div className=" flex justify-between">
            <div className=" flex items-center w-[319px] h-32 ml-5 my-5 bg-white">
              <div className="  pl-5">
                <h2 className=" pt-4  w-8 h-10 text-[#4094F7] font-bold text-2xl">
                  24
                </h2>
                <h2 className=" text-[#6E8BB7] text-sm w-[63px] mt-8">
                  Филиалы
                </h2>
              </div>
              <span className=" ml-[136px] border tetx-[#E3EFFE] w-[72px] h-[72px] justify-center items-center text-[#4094F7]">
                <div className=" mt-5 ml-5 w-[28px] h-[28px] ">
                  <StoreIcon />
                </div>
              </span>
            </div>
            <div className=" flex items-center w-[319px] h-32 ml-5 my-5 bg-white">
              <div className="  pl-5">
                <h2 className=" pt-4  w-8 h-10 text-[#4094F7] font-bold text-2xl">
                  110,823
                </h2>
                <h2 className=" text-[#6E8BB7] text-sm w-[63px] mt-8">
                  Клиенты
                </h2>
              </div>
              <span className=" ml-[136px] border tetx-[#E3EFFE] w-[72px] h-[72px] justify-center items-center text-[#4094F7]">
                <div className=" mt-5 ml-5 w-[28px] h-[28px] ">
                  <GroupIcon />
                </div>
              </span>
            </div>
            <div className=" flex items-center w-[319px] h-32 ml-5 my-5 bg-white">
              <div className="  pl-5">
                <h2 className=" pt-4  w-8 h-10 text-[#4094F7] font-bold text-2xl">
                  110,823
                </h2>
                <h2 className=" text-[#6E8BB7] text-sm w-[63px] mt-8">
                  Подписчики
                </h2>
              </div>
              <span className=" ml-[136px] border tetx-[#E3EFFE] w-[72px] h-[72px] justify-center items-center text-[#4094F7]">
                <div className=" mt-5 ml-5 w-[28px] h-[28px] ">
                  <NotificationsIcon />
                </div>
              </span>
            </div>
            <div className=" mr-5 flex items-center w-[319px] h-32 ml-5 my-5 bg-white">
              <div className="  pl-5">
                <h2 className=" pt-4  w-8 h-10 text-[#4094F7] font-bold text-2xl">
                  75
                </h2>
                <h2 className=" text-[#6E8BB7] text-sm w-[63px] mt-8">
                  Курьеры
                </h2>
              </div>
              <span className=" ml-[136px] border tetx-[#E3EFFE] w-[72px] h-[72px] justify-center items-center text-[#4094F7]">
                <div className=" mt-5 ml-5 w-[28px] h-[28px] ">
                  <DirectionsCarIcon />
                </div>
              </span>
            </div>
          </div>
          <div>
            <div className=" ml-5 w-[1336px] h-[536px] border bg-white">
              <div className="border mt-2 items-center h-[48px] flex pt-5 px-5">
                <h2 className=" h-12 pb-2 pl-5 font-semibold  w-[776px]  ml-[]">
                  Название
                </h2>
                <h2 className=" px-[45px] w-[240px] pb-3 font-semibold">
                  Номер телефона
                </h2>
                <h2 className=" w-[260px]  px-[100px] ml-10 pb-3 font-semibold">
                  Статус
                </h2>
              </div>
              <div className="border  items-center h-[48px] flex  px-5">
                <h2 className=" h-12  pt-3   w-[776px] ">Cody Fisher</h2>
                <h2 className=" px-[45px] w-[240px] pb-3 ">(907) 555-0101</h2>
                <span className=" w-[260px]  px-[100px] ">
                  <span className=" bg-[#4094F726] w-[144px] h-3">
                    <h2 className=" ml-10 pb-3">Активный</h2>
                  </span>
                </span>
                <span className=" text-[#4094F7]">
                  <MoreHorizIcon />
                </span>
              </div>{" "}
              <div className="border  items-center h-[48px] flex  px-5">
                <h2 className=" h-12  pt-3   w-[776px] ">Ronald Richards</h2>
                <h2 className=" px-[45px] w-[240px] pb-3 ">(319) 555-0115</h2>
                <span className=" w-[260px]  px-[100px] ">
                  <span className=" bg-[#4094F726] w-[144px] h-3">
                    <h2 className=" ml-10 pb-3">Не активный</h2>
                  </span>
                </span>
                <span className=" text-[#4094F7]">
                  <MoreHorizIcon />
                </span>
              </div>
              <div className="border  items-center h-[48px] flex  px-5">
                <h2 className=" h-12  pt-3   w-[776px] ">Devon Lane </h2>
                <h2 className=" px-[45px] w-[240px] pb-3 ">(684) 555-0102</h2>
                <span className=" w-[260px]  px-[100px] ">
                  <span className=" bg-[#4094F726] w-[144px] h-3">
                    <h2 className=" ml-10 pb-3">Активный</h2>
                  </span>
                </span>
                <span className=" text-[#4094F7]">
                  <MoreHorizIcon />
                </span>
              </div>
              <div className="border  items-center h-[48px] flex  px-5">
                <h2 className=" h-12  pt-3   w-[776px] ">Kathryn Murphy</h2>
                <h2 className=" px-[45px] w-[240px] pb-3 ">(252) 555-0126</h2>
                <span className=" w-[260px]  px-[100px] ">
                  <span className=" bg-[#4094F726] w-[144px] h-3">
                    <h2 className=" ml-10 pb-3">Не активный</h2>
                  </span>
                </span>
                <span className=" text-[#4094F7]">
                  <MoreHorizIcon />
                </span>
              </div>{" "}
              <div className="border  items-center h-[48px] flex  px-5">
                <h2 className=" h-12  pt-3   w-[776px] ">Darrell Steward</h2>
                <h2 className=" px-[45px] w-[240px] pb-3 ">(302) 555-0107</h2>
                <span className=" w-[260px]  px-[100px] ">
                  <span className=" bg-[#4094F726] w-[144px] h-3">
                    <h2 className=" ml-10 pb-3">Не активный</h2>
                  </span>
                </span>
                <span className=" text-[#4094F7]">
                  <MoreHorizIcon />
                </span>
              </div>
              <div className="border  items-center h-[48px] flex  px-5">
                <h2 className=" h-12  pt-3   w-[776px] ">Dianne Russell </h2>
                <h2 className=" px-[45px] w-[240px] pb-3 ">(219) 555-0114</h2>
                <span className=" w-[260px]  px-[100px] ">
                  <span className=" bg-[#4094F726] w-[144px] h-3">
                    <h2 className=" ml-10 pb-3">Активный</h2>
                  </span>
                </span>
                <span className=" text-[#4094F7]">
                  <MoreHorizIcon />
                </span>
              </div>{" "}
              <div className="border  items-center h-[48px] flex  px-5">
                <h2 className=" h-12  pt-3   w-[776px] ">Jane Cooper</h2>
                <h2 className=" px-[45px] w-[240px] pb-3 ">(603) 555-0123</h2>
                <span className=" w-[260px]  px-[100px] ">
                  <span className=" bg-[#4094F726] w-[144px] h-3">
                    <h2 className=" ml-10 pb-3">Активный</h2>
                  </span>
                </span>
                <span className=" text-[#4094F7]">
                  <MoreHorizIcon />
                </span>
              </div>
              <div className="border  items-center h-[48px] flex  px-5">
                <h2 className=" h-12  pt-3   w-[776px] ">Eleanor Pena</h2>
                <h2 className=" px-[45px] w-[240px] pb-3 ">(270) 555-0117</h2>
                <span className=" w-[260px]  px-[100px] ">
                  <span className=" bg-[#4094F726] w-[144px] h-3">
                    <h2 className=" ml-10 pb-3">Активный</h2>
                  </span>
                </span>
                <span className=" text-[#4094F7]">
                  <MoreHorizIcon />
                </span>
              </div>
              <div className="border  items-center h-[48px] flex  px-5">
                <h2 className=" h-12  pt-3   w-[776px] ">Kristin Watson</h2>
                <h2 className=" px-[45px] w-[240px] pb-3 ">(205) 555-0100</h2>
                <span className=" w-[260px]  px-[100px] ">
                  <span className=" bg-[#4094F726] w-[144px] h-3">
                    <h2 className=" ml-10 pb-3">Не активный</h2>
                  </span>
                </span>
                <span className=" text-[#4094F7]">
                  <MoreHorizIcon />
                </span>
              </div>
              <div className="border  items-center h-[48px] flex  px-5">
                <h2 className=" h-12  pt-3   w-[776px] ">Robert Fox</h2>
                <h2 className=" px-[45px] w-[240px] pb-3 ">(209) 555-0104</h2>
                <span className=" w-[260px]  px-[100px] ">
                  <span className=" bg-[#4094F726] w-[144px] h-3">
                    <h2 className=" ml-10 pb-3">Не активный</h2>
                  </span>
                </span>
                <span className=" text-[#4094F7]">
                  <MoreHorizIcon />
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Klient;
