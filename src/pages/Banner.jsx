import React from 'react'

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";


import img2 from "./../assets/img2.png"
import img3 from "./../assets/img3.png";
import img4 from "./../assets/img4.png";
import img5 from "./../assets/img5.png";
import img6 from "./../assets/img6.png";


const Banner = () => {
  return (
    <div>
      <main className=" h-[515px] ">
        <div className="w-[1140px] h-[480px] border ml-2 bg-white ">
          <div className="  flex items-center border h-12 ">
            <h1 className=" w-[144px] items-center pl-2">Изображение</h1>
            <h2 className=" w-[376px] pl-5">Hазвание на узбекском</h2>
            <h2 className="mr-[100px] w-[376px] pl-5">Hазвание на русском</h2>
            <h2 className=" w-[144px] p-4">Статус</h2>
          </div>
          <div className=" h-[90px]   flex items-center border">
            <img className=" w-[80px] mr-[70px]" src={img2} alt="" />
            <h2 className=" w-[376px] py-9 pl-4">Баннер 1</h2>
            <h2 className=" w-[376px] py-9 pl-4">Баннер 1</h2>
            <button className=" pl-20 w-[200px]">
              <span className=" p-1 text-[#4094F7] bg-[#E3EFFE]">Активный</span>
            </button>
            <button className=" text-[#4094F7] pl-10">
              <MoreHorizIcon />
            </button>
          </div>
          <div className=" h-[90px]   flex items-center border">
            <img className=" w-[80px] mr-[70px]" src={img3} alt="" />
            <h2 className=" w-[376px] py-9 pl-4">Баннер 1</h2>
            <h2 className=" w-[376px] py-9 pl-4">Баннер 1</h2>
            <button className=" pl-20 w-[200px]">
              <span className=" p-1 text-[#4094F7] bg-[#E3EFFE]">Активный</span>
            </button>
            <button className=" text-[#4094F7] pl-10">
              <MoreHorizIcon />
            </button>
          </div>
          <div className=" h-[90px]   flex items-center border">
            <img className=" w-[80px] mr-[70px]" src={img4} alt="" />
            <h2 className=" w-[376px] py-9 pl-4">Баннер 1</h2>
            <h2 className=" w-[376px] py-9 pl-4">Баннер 1</h2>
            <button className=" pl-20 w-[200px]">
              <span className=" p-1 text-[#4094F7] bg-[#E3EFFE]">Активный</span>
            </button>
            <button className=" text-[#4094F7] pl-10">
              <MoreHorizIcon />
            </button>
          </div>
          <div className=" h-[90px]   flex items-center border">
            <img className=" w-[80px] mr-[70px]" src={img5} alt="" />
            <h2 className=" w-[376px] py-9 pl-4">Баннер 1</h2>
            <h2 className=" w-[376px] py-9 pl-4">Баннер 1</h2>
            <button className=" pl-20 w-[200px]">
              <span className=" p-1 text-[#4094F7] bg-[#E3EFFE]">Активный</span>
            </button>
            <button className=" text-[#4094F7] pl-10">
              <MoreHorizIcon />
            </button>
          </div>
          <div className=" h-[90px]   flex items-center border">
            <img className=" w-[80px] mr-[70px]" src={img6} alt="" />
            <h2 className=" w-[376px] py-9 pl-4">Баннер 1</h2>
            <h2 className=" w-[376px] py-9 pl-4">Баннер 1</h2>
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
}

export default Banner