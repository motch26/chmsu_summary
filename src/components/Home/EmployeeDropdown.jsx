import TuneIcon from "@mui/icons-material/Tune";
import {
  Autocomplete,
  Box,
  Button,
  FormControlLabel,
  Popover,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  darken,
  lighten,
  styled,
} from "@mui/material";
import React, { useMemo, useState } from "react";
import employeesList from "../../assets/employees.json";
import { normalizeName } from "../../constants";

const getLabel = ({ employeeName }) => normalizeName(employeeName);

const EmployeeDropdown = ({ selectedEmployees, setSelectedEmployees }) => {
  console.log("[selectedEmployees]", selectedEmployees);
  const [selectedFilter, setSelectedFilter] = useState("name");
  const [filterAnchor, setFilterAnchor] = useState(null);
  const [inputValue, setInputVallue] = useState("");

  const autocompleteChange = (val) => {
    setSelectedEmployees(val);
  };

  const inputChange = (e, val) => setInputVallue(val);

  const setAnchor = (e) => setFilterAnchor(e.currentTarget);
  const closeAnchor = () => setFilterAnchor(null);

  const filterChangeHandler = (e) => setSelectedFilter(e.target.value);
  const employeeListAddedInitial = employeesList.map((e) => ({
    ...e,
    firstLetter: e.employeeName.charAt(0),
  }));

  const currentFilter = {
    options: {
      name: employeeListAddedInitial.sort(
        (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
      ),

      designation: employeeListAddedInitial.sort(
        (a, b) => -b.designationName.localeCompare(a.designationName)
      ),
    },
    groupBy: {
      name: (option) => option.firstLetter,
      designation: (option) => option.designationName,
    },
  };
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
          <RadioGroup name="filter" onChange={filterChangeHandler}>
            <FormControlLabel
              label="By Last Name"
              control={<Radio />}
              value="name"
              checked={selectedFilter === "name"}
            />
            <FormControlLabel
              label="By Designation"
              control={<Radio />}
              value="designation"
              checked={selectedFilter === "designation"}
            />
          </RadioGroup>
        </Box>
      </Popover>
      <Autocomplete
        multiple
        disableCloseOnSelect
        options={currentFilter.options[selectedFilter]}
        groupBy={currentFilter.groupBy[selectedFilter]}
        getOptionLabel={getLabel}
        inputValue={inputValue}
        onInputChange={inputChange}
        value={selectedEmployees}
        onChange={(e, val) => autocompleteChange(val)}
        renderInput={(params) => (
          <TextField {...params} variant="standard" label="Select Employee" />
        )}
        renderGroup={(params) => (
          <li key={params.key}>
            <GroupHeader>{params.group}</GroupHeader>
            <GroupItems>{params.children}</GroupItems>
          </li>
        )}
        sx={{ maxHeight: "65vh", overflowY: "auto" }}
      />
    </Box>
  );
};
const GroupHeader = styled("div")(({ theme }) => ({
  position: "sticky",
  top: "-8px",
  padding: "4px 10px",
  color: theme.palette.primary.main,
  backgroundColor:
    theme.palette.mode === "light"
      ? lighten(theme.palette.primary.light, 0.85)
      : darken(theme.palette.primary.main, 0.8),
}));
const GroupItems = styled("ul")({
  padding: 0,
});
export default EmployeeDropdown;
