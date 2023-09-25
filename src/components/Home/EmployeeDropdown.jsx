import { Autocomplete, Box, TextField, Typography } from "@mui/material";
import React from "react";
const sampleEmployees = [
  {
    id: 1,
    name: "Almark Duma-op",
  },
  {
    id: 2,
    name: "John Eric Palpal",
  },
  {
    id: 3,
    name: "Albert Rhey Dejalde",
  },
  {
    id: 4,
    name: "Kenneth Cordero",
  },
  {
    id: 5,
    name: "Sherwin Dewara",
  },
  {
    id: 6,
    name: "Joshua Ignacio",
  },
];
const EmployeeDropdown = () => {
  return (
    <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column", gap: 3 }}>
      <Autocomplete
        multiple
        disableCloseOnSelect
        options={sampleEmployees}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => (
          <TextField {...params} variant="standard" label="Select Employee" />
        )}
      />
    </Box>
  );
};

export default EmployeeDropdown;
