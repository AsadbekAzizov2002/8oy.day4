import React from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";

const Otzif = () => {
  return (
    <div>
      <main className="h-[515px] ">
        <div className=" ">
          <div className="   flex items-center border h-12 ">
            <h2 className=" font-semibold w-[640px] pl-3">Название</h2>
            <h2 className=" font-semibold w-[200px] px-[87px]">Тип</h2>
            <h2 className=" px-[74px] w-[200px] font-semibold ml-16">Статус</h2>
          </div>
          <div className="  flex items-center border h-12 ">
            <h2 className=" pl-4 pr-[491px]">😉 Курьер молодец</h2>
            <span className=" w-[200px]  ml-14 pr-[90px] text-green-600">
              <ThumbUpIcon />
            </span>
            <button className=" pl-20 w-[200px]">
              <span className=" p-1 text-[#4094F7] bg-[#E3EFFE]">Активный</span>
            </button>
            <button className=" text-[#4094F7] pl-10">
              <MoreHorizIcon />
            </button>
          </div>
          <div className="  flex items-center border h-12 ">
            <h2 className=" pl-4 pr-[491px]">⚡️ Быстрая доставка </h2>
            <span className=" w-[200px]  ml-14 pr-[90px] text-green-600">
              <ThumbUpIcon />
            </span>
            <button className=" pl-20 w-[200px]">
              <span className=" p-1 text-[#4094F7] bg-[#E3EFFE]">Активный</span>
            </button>
            <button className=" text-[#4094F7] pl-10">
              <MoreHorizIcon />
            </button>
          </div>
          <div className="  flex items-center border h-12 ">
            <h2 className=" pl-4 pr-[px]">😋 Вкусная еда </h2>
            <span className=" w-[200px]  ml-[590px] pr-[90px] text-green-600">
              <ThumbUpIcon />
            </span>
            <button className=" pl-20 w-[200px]">
              <span className=" p-1 text-[#4094F7] bg-[#E3EFFE]">Активный</span>
            </button>
            <button className=" text-[#4094F7] pl-10">
              <MoreHorizIcon />
            </button>
          </div>
          <div className="  flex items-center border h-12 ">
            <h2 className=" pl-4 pr-[px]">
              🤝 Оператор был вежлив и дружелюбен{" "}
            </h2>
            <span className=" ml-[390px] w-[200px]  pr-[90px] text-green-600">
              <ThumbUpIcon />
            </span>
            <button className=" pl-20 w-[200px]">
              <span className=" p-1 text-[#4094F7] bg-[#E3EFFE]">Активный</span>
            </button>
            <button className=" text-[#4094F7] pl-10">
              <MoreHorizIcon />
            </button>
          </div>
          <div className="  flex items-center border h-12 ">
            <h2 className=" pl-4 pr-[px] ">🐌 Долгая доставка </h2>
            <span className=" w-[200px]  ml-[590px] pr-[90px] text-red-600">
              <ThumbDownAltIcon />
            </span>
            <button className=" pl-20 w-[200px]">
              <span className=" p-1 text-[#4094F7] bg-[#E3EFFE]">Активный</span>
            </button>
            <button className=" text-[#4094F7] pl-10">
              <MoreHorizIcon />
            </button>
          </div>
          <div className="  flex items-center border h-12 ">
            <h2 className=" pl-4 pr-[px] ">🙁 Остывшая еда </h2>
            <span className=" w-[200px]  ml-[590px] pr-[90px] text-red-600">
              <ThumbDownAltIcon />
            </span>
            <button className=" pl-20 w-[200px]">
              <span className=" p-1 text-[#4094F7] bg-[#E3EFFE]">Активный</span>
            </button>
            <button className=" text-[#4094F7] pl-10">
              <MoreHorizIcon />
            </button>
          </div>
          <div className="  flex items-center border h-12 ">
            <h2 className=" pl-4 pr-[px] ">🙁 Проблемы с курьером </h2>
            <span className=" w-[200px]  ml-[590px] pr-[90px] text-red-600">
              <ThumbDownAltIcon />
            </span>
            <button className=" pl-20 w-[200px]">
              <span className=" p-1 text-[#4094F7] bg-[#E3EFFE]">Активный</span>
            </button>
            <button className=" text-[#4094F7] pl-10">
              <MoreHorizIcon />
            </button>
          </div>
          <div className="  flex items-center border h-12 ">
            <h2 className=" pl-4 pr-[px] ">🙁 Проблемы с оператором</h2>
            <span className=" w-[200px]  ml-[590px] pr-[90px] text-red-600">
              <ThumbDownAltIcon />
            </span>
            <button className=" pl-20 w-[200px]">
              <span className=" p-1 text-[#4094F7] bg-[#E3EFFE]">Активный</span>
            </button>
            <button className=" text-[#4094F7] pl-10">
              <MoreHorizIcon />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Otzif;
