import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box>
        <AppBar position="static">
          <Toolbar>
            <Box sx={{ mr: 3 }}>
              <Typography fontWeight={900}>LOGO</Typography>
            </Box>
            <Typography>CHMSU Summary of Attendance</Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "end",
                gap: 5,
              }}
            >
              <Button color="inherit">CREATE</Button>
              <Button color="inherit">RECORDS</Button>
              <Button color="inherit">GENERATE</Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Outlet />
    </Box>
  );
};

export default HomeLayout;
