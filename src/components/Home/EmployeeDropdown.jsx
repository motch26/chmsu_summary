import TuneIcon from "@mui/icons-material/Tune";
import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Popover,
  TextField,
  Typography,
} from "@mui/material";
import React, { useMemo, useState } from "react";
import employeesList from "../../assets/employees.json";
import { normalizeName } from "../../constants";

const filtersFormat = {
  alphabetical: true,
  designation: false,
};

const getLabel = ({ employeeName }) => normalizeName(employeeName);

const EmployeeDropdown = ({ selectedEmployees, setSelectedEmployees }) => {
  console.log("selectedEmployees", selectedEmployees);
  const [filters, setFilters] = useState(filtersFormat);
  const [filterAnchor, setFilterAnchor] = useState(null);
  const [inputValue, setInputVallue] = useState("");

  // const selectedMemoized = useMemo(
  //   () =>
  //     employeesList.filter((employee) => {
  //       const item = selectedEmployees.find(
  //         (selected) => selected.employee_id === employee.employee_id
  //       );

  //       return Boolean(item);
  //     }),
  //   [employeesList]
  // );

  const autocompleteChange = (val) => {
    const employeeIDFromAutoComplete = val[0].employee_id;
    const item = selectedEmployees.find(
      (employee) => employee.employee_id === employeeIDFromAutoComplete
    );
    if (item)
      setSelectedEmployees((prev) => [
        ...prev.filter(
          ({ employee_id }) => employee_id !== employeeIDFromAutoComplete
        ),
      ]);
    else setSelectedEmployees((prev) => [...prev, val[0]]);
  };

  const inputChange = (e, val) => setInputVallue(val);

  const setAnchor = (e) => setFilterAnchor(e.currentTarget);
  const closeAnchor = () => setFilterAnchor(null);

  const filterChangeHandler = (e, type) =>
    setFilters((prev) => ({ ...prev, [type]: e.target.checked }));

  return (
    <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column", gap: 1 }}>
      <Button
        variant="outlined"
        sx={{ alignSelf: "end" }}
        endIcon={<TuneIcon />}
        onClick={setAnchor}
      >
        Filter
      </Button>
      <Popover
        open={Boolean(filterAnchor)}
        onClose={closeAnchor}
        anchorEl={filterAnchor}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Box sx={{ p: 3 }}>
          <Typography>Select all that apply.</Typography>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <FormControlLabel
              label="Name Ascending"
              control={<Checkbox />}
              checked={filters.alphabetical}
              onChange={(e) => filterChangeHandler(e, "alphabetical")}
            />
            <FormControlLabel
              label="By Designation"
              control={<Checkbox />}
              checked={filters.designation}
              onChange={(e) => filterChangeHandler(e, "designation")}
            />
          </Box>
        </Box>
      </Popover>
      <Autocomplete
        multiple
        disableCloseOnSelect
        options={employeesList}
        getOptionLabel={getLabel}
        inputValue={inputValue}
        onInputChange={inputChange}
        value={selectedEmployees}
        onChange={(e, val) => autocompleteChange(val)}
        renderInput={(params) => (
          <TextField {...params} variant="standard" label="Select Employee" />
        )}
        sx={{ maxHeight: "65vh", overflowY: "auto" }}
      />
    </Box>
  );
};

export default EmployeeDropdown;
