import { Box, Checkbox, FormControlLabel, Grid } from "@mui/material";
import { TimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import React from "react";
import { dateTimeFormat } from "../../constants";

const HoursSections = ({ hours, setHours }) => {
  const { amIn, amOut, pmIn, pmOut, hasOT, otIn, otOut } = hours;
  const checkHandler = (e) =>
    setHours((prev) => ({ ...prev, hasOT: e.target.checked }));
  const updateTimeHandler = (val, name) =>
    setHours((prev) => ({ ...prev, [name]: val.format(dateTimeFormat) }));

  const formatHours = (hour) => dayjs(hour);
  return (
    <Box>
      <Grid container columnSpacing={3}>
        <Grid item xs={hasOT ? 6 : 12}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
              alignItems: "center",
            }}
          >
            <TimePicker
              label="AM In"
              views={["hours", "minutes"]}
              value={formatHours(amIn)}
              onChange={(val) => updateTimeHandler(val, "amIn")}
            />
            <TimePicker
              label="AM Out"
              views={["hours", "minutes"]}
              value={formatHours(amOut)}
              onChange={(val) => updateTimeHandler(val, "amOut")}
            />
            <TimePicker
              label="PM In"
              views={["hours", "minutes"]}
              value={formatHours(pmIn)}
              onChange={(val) => updateTimeHandler(val, "pmIn")}
            />
            <TimePicker
              label="PM Out"
              views={["hours", "minutes"]}
              value={formatHours(pmOut)}
              onChange={(val) => updateTimeHandler(val, "pmOut")}
            />
          </Box>
        </Grid>
        {hasOT && (
          <Grid item xs={6} columnSpacing={3}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
                alignItems: "center",
              }}
            >
              <TimePicker
                label="OT In"
                views={["hours", "minutes"]}
                value={formatHours(otIn)}
                onChange={(val) => updateTimeHandler(val, "otIn")}
              />
              <TimePicker
                label="OTOut"
                views={["hours", "minutes"]}
                value={formatHours(otOut)}
                onChange={(val) => updateTimeHandler(val, "otOut")}
              />
            </Box>
          </Grid>
        )}
      </Grid>
      <FormControlLabel
        control={<Checkbox />}
        onChange={checkHandler}
        checked={hasOT}
        label="Has Overtime?"
      />
    </Box>
  );
};

export default HoursSections;
