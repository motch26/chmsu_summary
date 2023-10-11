import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import CalendarDatePicker from "./CalendarDatePicker";
import HoursSections from "./HoursSections";
import dayjs from "dayjs";
import { dateTimeFormat } from "../../constants";
import EmployeeDropdown from "./EmployeeDropdown";
import { blue } from "@mui/material/colors";
const timeNow = dayjs().format(dateTimeFormat);
const hoursFormat = {
  amIn: timeNow,
  amOut: timeNow,
  pmIn: timeNow,
  pmOut: timeNow,
  hasOT: false,
  otIn: timeNow,
  otOut: timeNow,
};
const rulesFormat = {
  employees: [],
  hours: [],
  daysList: [],
};
const Home = () => {
  const [settings, setSettings] = useState(rulesFormat);
  const [daysList, setDaysList] = useState([]);
  const [hours, setHours] = useState(hoursFormat);
  const [selectedEmployees, setSelectedEmployees] = useState([]);

  const addSetting = () => {
    const payload = {
      hours,
      daysList,
      selectedEmployees,
    };
    console.log("payload", payload);
  };
  return (
    <Box sx={{ flexGrow: 1, p: 3, overflowY: "auto" }}>
      <Container
        fixed
        sx={{
          display: "flex",
          flexDirection: "column",

          height: "100%",
        }}
      >
        <Grid container columnSpacing={3} sx={{ flexGrow: 1 }}>
          <Grid item xs={7}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",

                flexDirection: "column",
                gap: 5,
              }}
            >
              <Typography
                sx={{
                  bgcolor: blue[50],
                  pl: 3,
                  borderLeft: "5px solid",
                  borderColor: blue[900],
                }}
                variant="h5"
              >
                Date and Time Section
              </Typography>
              <CalendarDatePicker
                daysList={daysList}
                setDaysList={setDaysList}
              />
              <Divider />
              <HoursSections hours={hours} setHours={setHours} />
            </Box>
          </Grid>
          <Grid item xs={5}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,

                height: "100%",
              }}
            >
              <Typography
                sx={{
                  bgcolor: blue[50],
                  pl: 3,
                  borderLeft: "5px solid",
                  borderColor: blue[900],
                }}
                variant="h5"
              >
                Employees Section
              </Typography>
              <EmployeeDropdown
                selectedEmployees={selectedEmployees}
                setSelectedEmployees={setSelectedEmployees}
              />
              <Button variant="contained" onClick={addSetting}>
                Add Setting
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
