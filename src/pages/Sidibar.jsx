

import AnalyticsIcon from "@mui/icons-material/Analytics";
import GroupIcon from "@mui/icons-material/Group";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import SettingsIcon from "@mui/icons-material/Settings";

import girl from "./../assets/girl.png";


import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Zakas from "./Zakas";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import Dashbord from "./Dashbord";
import Klient from "./Klient";
import Nastroyka from "./Nastroyka";
import Marceting from "./Marceting";

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
        <Box sx={{ p: 3, width: "full", border: "2px solid" }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const Sidibar = () => {
  const [value, setValue] = useState(0); // Set initial value to 0 for the first tab

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="bg-[#ffffff]">
      <div>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 0,
          }}
        >
          <Tabs
            orientation="vertical"
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={{
              width: "64px",
            }}
          >
            <h1 className=" font-bold w-10 h-10 rounded bg-blue-500 items-center justify-center flex ml-4 mt-3">
              D
            </h1>
            <Tab label=<AnalyticsIcon /> />
            <Tab label=<ShoppingCartIcon /> />
            <Tab label=<GroupIcon /> sx={{
                marginBottom:"340px"
            }} />
              <Tab label=<RadioButtonCheckedIcon /> />
              <Tab label=<SettingsIcon /> />
            
            <img className=" mt-px]  ml-3 w-10 h-19" src={girl} alt="" />
          </Tabs>
          <CustomTabPanel value={value} index={0}>
            <Dashbord />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <Dashbord />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <Zakas />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}>
            <Klient />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={4}>
            <Marceting/>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={5}>
            <Nastroyka />
          </CustomTabPanel>
        </Box>
      </div>
    </div>
  );
};

export default Sidibar;
