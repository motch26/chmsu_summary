import { Box, useTheme } from "@mui/material";
import {
  DateCalendar,
  LocalizationProvider,
  PickersDay,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import React, { useState } from "react";
let list = [];

const CalendarDatePicker = ({ daysList, setDaysList }) => {
  list = daysList;
  const theme = useTheme();
  const [value, setValue] = useState(dayjs());

  const onChangeHandler = (val) => {
    const formatted = val.format("YYYY-MM-DD");
    if (daysList.includes(formatted)) {
      setDaysList((prev) => prev.filter((day) => day !== formatted));
    } else {
      setDaysList((prev) => [...prev, formatted]);
      setValue(val);
    }
  };
  return (
    <Box
      sx={{
        width: "100%",
        flexGrow: 1,
        bgcolor: "red",
        display: "flex",
        alignItems: "center",
        "& .MuiDateCalendar-root": {
          flexGrow: 1,
          maxHeight: "1000px",
        },
        "& .MuiDayCalendar-weekDayLabel, & .MuiPickersDay-root": {
          flexGrow: 1,
          fontSize: "1rem",
          py: 2,
        },
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          value={value}
          showDaysOutsideCurrentMonth
          onChange={onChangeHandler}
          slots={{
            day: pickersDayHandler,
          }}
          sx={{}}
        />
      </LocalizationProvider>
    </Box>
  );
};

const pickersDayHandler = ({ day, ...others }) => {
  const isSelected = list.includes(day.format("YYYY-MM-DD"));
  return <PickersDay day={day} {...others} selected={isSelected} is />;
};

export default CalendarDatePicker;
