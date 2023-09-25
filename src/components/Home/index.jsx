import { Box, Container, Grid } from "@mui/material";
import React, { useState } from "react";
import CalendarDatePicker from "../Reusables/CalendarDatePicker";

const Home = () => {
  const [daysList, setDaysList] = useState([]);
  return (
    <Box sx={{ flexGrow: 1, p: 3, overflowY: "auto" }}>
      <Container fixed>
        <Grid container columnSpacing={3}>
          <Grid item xs={7} sx={{ flexDirection: "column" }}>
            <CalendarDatePicker daysList={daysList} setDaysList={setDaysList} />
          </Grid>
          <Grid item xs={5}></Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
