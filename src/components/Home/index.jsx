import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const Home = () => {
  const [filter, setFilter] = useState({
    designation: "",
    employee: {},
  });
  return (
    <Box sx={{ flexGrow: 1, p: 3, overflowY: "auto" }}>
      <Container fixed>
        <Grid container columnSpacing={3}>
          <Grid item xs={5}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Designation Type</Typography>
                </AccordionSummary>
                <AccordionDetails></AccordionDetails>
              </Accordion>
            </Box>
          </Grid>
          <Grid item xs={7}></Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
