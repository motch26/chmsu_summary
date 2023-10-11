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
    <Box sx={{ boxShadow: theme.shadows[3], margin: "auto" }}>
      <DateCalendar
        value={value}
        onChange={onChangeHandler}
        slots={{
          day: pickersDayHandler,
        }}
        sx={{}}
      />
    </Box>
  );
};

const pickersDayHandler = ({ day, ...others }) => {
  const isSelected = list.includes(day.format("YYYY-MM-DD"));
  return <PickersDay day={day} {...others} selected={isSelected} />;
};

export default CalendarDatePicker;
