import React, { useState } from 'react'



import Aksiya from "./Aksiya";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import Banner from "./Banner";
import Otzif from "./Otzif";
import Rassilka from "./Rassilka";


import ReplayIcon from "@mui/icons-material/Replay";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import TableChartIcon from "@mui/icons-material/TableChart";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import VerticalAlignBottomIcon from "@mui/icons-material/VerticalAlignBottom";
import Foydalanuvchi from './Foydalanuvchi';
import Xodimlar from './Xodimlar';
import Kopmaniya from './Kopmaniya';
import Tovar from './Tovar';
import Integratsiya from './Integratsiya';



function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ px: "5px", width: "1188px", border: "2px solid" }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}




const Nastroyka = () => {




  const [value, setValue] = useState(0); // Set initial value to 0 for the first tab

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <main>
        <div>
          <div>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 10fr)",

                // 3 , 1fr
                gap: 13,
              }}
            >
              <Tabs
                orientation="vertical"
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                sx={{
                  width: "110px",
                }}
              >
                <h1 className=" font-bold w- h-10 rounded bg-blue-500 items-center justify-center flex ml-4 mt-3">
                  Delever
                </h1>
                <Tab label="Ползователи" />
                <Tab label="Персонал" />

                <Tab label="Компания" />
                <Tab label="Товары" />
                <Tab label="Интеграции" />
              </Tabs>
              <div>
                <div className=" flex justify-between w-full bg-white h-16">
                  <h2 className="pt-5 pl-5 font-semibold text-xl">
                    Список компаний
                  </h2>
                  <div className=" flex">
                    <div className=" border  w-[196px] h-16 flex items-center">
                      <span className=" text-blue-300">
                        <ReplayIcon />
                      </span>
                      <h2 className=" font-medium text-blue-400">
                        Обновить Telegram
                      </h2>
                    </div>
                    <div className=" flex items-center w-[196px] h-16 ">
                      <span className=" text-green-500">
                        <AddIcon />
                      </span>
                      <h2 className=" text-green-400 font-medium">Добавить</h2>
                    </div>
                  </div>
                </div>
                <div className=" flex items-center justify-between">
                  <div className=" mb-2 mt-3 items-center flex  w-[410px] h-8 bg-white border">
                    <span className=" pl-5">
                      <SearchIcon />
                    </span>
                    <input type="text" placeholder="Поиск..." />
                  </div>
                  <div className=" ml-[382px] flex">
                    <span>
                      <TableChartIcon />
                    </span>
                    <h2>Столбцы</h2>
                  </div>
                  <div className=" flex">
                    <span>
                      <FilterAltIcon />
                    </span>
                    <h2>Фильтр</h2>
                  </div>
                  <div className=" flex">
                    <span>
                      <VerticalAlignBottomIcon />
                    </span>
                    <h2>Скачать</h2>
                  </div>
                </div>
                <CustomTabPanel value={value} index={1}>
                  <Foydalanuvchi />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                  <Xodimlar />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={3}>
                  <Kopmaniya />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={4}>
                  <Tovar />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={5}>
                  <Integratsiya />
                </CustomTabPanel>
              </div>
            </Box>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Nastroyka