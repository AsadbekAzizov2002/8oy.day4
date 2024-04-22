// import React, { useState } from "react";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import GroupIcon from "@mui/icons-material/Group";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import SettingsIcon from "@mui/icons-material/Settings";

import girl from "./../assets/girl.png";
// import Dashbord from "./Dashbord";
// import Zakas from "./Zakas";
// import Klient from "./Klient";
// import Otzef from "./Otzef";

// import PropTypes from "prop-types";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";

// function CustomTabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// CustomTabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     "aria-controls": `simple-tabpanel-${index}`,
//   };
// }

// const Sidibar = () => {
//   const [value, setValue] = React.useState("1");

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };
//   return (
//     <div className=" bg-[#DCE9F9]">
//       {/* <main className=" flex">
//         <div className=" bg-white w-[64px] h-[680px]  border rounded">
//           <h1 className=" w-10 h-10 border rounded-3xl bg-blue-700 text-white px-3 py-1  items-center mx-auto mt-2 text-2xl font-bold">
//             D
//           </h1>
//           <ul className=" bg-[#F0F3F8] rounded mt-4 px-2">
//             <li className=" px-3 active:bg-blue-500 w-10 h-10 rounded-lg flex items-center justify-center">
//               <NavLink to="/dashbord">
//                 <span>
//                   <AnalyticsIcon />
//                 </span>
//               </NavLink>
//             </li>
//             <li className=" px-3 active:bg-blue-500 w-10 h-10 rounded-lg flex items-center justify-center">
//               <NavLink to="/zakas">
//                 <span>
//                   <ShoppingCartIcon />
//                 </span>
//               </NavLink>
//             </li>
//             <li className=" px-3 active:bg-blue-500 w-10 h-10 rounded-lg flex items-center justify-center">
//               <NavLink to="/klient">
//                 <span>
//                   <GroupIcon />
//                 </span>
//               </NavLink>
//             </li>
//             <li className=" px-3 active:bg-blue-500 w-10 h-10 rounded-lg flex items-center justify-center">
//               <NavLink to="/otzef">
//                 <span>
//                   <RadioButtonCheckedIcon />
//                 </span>
//               </NavLink>
//             </li>
//           </ul>
//           <ul className=" mt-[360px] px-2">
//             <li className=" px-3 active:bg-blue-500 w-10 h-10 rounded-lg flex items-center justify-center">
//               <NavLink to="/nastroyka">
//                 <span>
//                   <SettingsIcon />
//                 </span>
//               </NavLink>
//             </li>
//             <li>
//               <img src={girl} alt="nimajonni rasmi ekan :)" />
//             </li>
//           </ul>
//         </div>
//         <div>
//           <Routes>
//             <Route path="/dashbord" element={<Dashbord />} />
//             <Route path="/zakas" element={<Zakas />} />
//             <Route path="/klient" element={<Klient />} />
//             <Route path="/otzef" element={<Otzef />} />
//           </Routes>
//         </div>
//       </main> */}
//       <div>
//         <Box sx={{ width: "100%" }}>
//           <Box
//             sx={{ borderBottom: 1, borderColor: "divider", display: "block" }}
//           >
//             <Tabs
//               value={value}
//               onChange={handleChange}
//               aria-label="basic tabs example"
//             >
//               <Tab label="Item One" {...a11yProps(0)} />
//               <Tab label="Item Two" {...a11yProps(1)} />
//               <Tab label="Item Three" {...a11yProps(2)} />
//             </Tabs>
//           </Box>
//           <CustomTabPanel value={value} index={0}>
//             Item One
//           </CustomTabPanel>
//           <CustomTabPanel value={value} index={1}>
//             Item Two
//           </CustomTabPanel>
//           <CustomTabPanel value={value} index={2}>
//             Item Three
//           </CustomTabPanel>
//         </Box>
//       </div>
//     </div>
//   );
// };

// export default Sidibar;

import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Zakas from "./Zakas";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import Dashbord from "./Dashbord";
import Klient from "./Klient";
import Otzef from "./Otzef";
import Nastroyka from "./Nastroyka";

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
            <Otzef />
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
