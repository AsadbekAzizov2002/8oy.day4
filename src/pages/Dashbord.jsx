import React from "react";

import img1 from "./../assets/chart1.png"
import img2 from "./../assets/chart2.png"
import img3 from "./../assets/chart3.png"
import img4 from "./../assets/chart4.png"
import img5 from "./../assets/chart5.png"
import img6 from "./../assets/chart6.png";
import img7 from "./../assets/chart7.png";

const Dashbord = () => {
  return (
    <div className=" bg-[#DCE9F9] w-[1400px] h-px]">
      <main>
        <div>
          <h1 className=" font-semibold text-xl w-[819px]">Dashbord</h1>

          <div>
            <div className=" ml-10">
              <img src={img1} alt="" />
            </div>
            <div className=" flex gap-5 ml-10 mt-5">
              <img src={img2} alt="" />
              <img src={img3} alt="" />
            </div>
            <div className= " gap-5 mt-5 ml-10 flex">
              <span>
                <img src={img4} alt="" />
                <img src={img5} alt="" />
              </span>
              <img src={img6} alt="" />
            </div>
            <div className=" pl-10 pb-5 mt-5">
              <img src={img7} alt="" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashbord;
