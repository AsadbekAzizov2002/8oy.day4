import React from "react";
import kamp from "./assets/kamp.png";

import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";

const Login = () => {
  return (
    <div className=" container max-w-[1400px]">
      <main>
        <div className=" flex">
          <div className=" w-[720px] h-[680px] bg-blue-500">
            <hr />
            <div className=" mt-[100px]">
              <img src={kamp} alt="" />
            </div>
          </div>
          <div className=" mt-[50px] ml-[64px]">
            <h1 className=" w-[390px] text-[#001A49] font-bold text-4xl">
              Вход в платформу
            </h1>
            <div className=" mt-10">
              <h2 className=" font-semibold mb-2">Имя пользователья*</h2>
              <span className=" border rounded flex mb-4">
                <span className=" pl-3 pt-2">
                  <PersonIcon />
                </span>
                <input
                  type="text "
                  placeholder="*******"
                  className="  py-3 px-3 w-[600px] "
                />
              </span>
              <h2 className=" font-semibold mb-2">Пароль *</h2>
              <span className=" flex items-center border rounded">
                <span className=" pl-2">
                  <LockIcon />
                </span>
                <input
                  type="text"
                  placeholder="Введите пароль"
                  className="w-[590px]  p-3"
                />
                <span className="pr-3">
                  <VisibilityIcon />
                </span>
              </span>
              <span className=" flex mt-6">
                <div className=" w-6 h-6 border rounded "></div>{" "}
                <input
                  type="text"
                  placeholder="Запомнить меня"
                  className=" w-[628px] ml-3 rounded border]"
                />
              </span>
              <button className=" py-3 px-[310px] border rounded-lg bg-blue-600 text-white mt-7 active:bg-blue-800">Войти</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
