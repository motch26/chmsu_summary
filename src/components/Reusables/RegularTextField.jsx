import { TextField, Typography, useTheme } from "@mui/material";
import { blue } from "@mui/material/colors";
import React from "react";

const RegularTextField = (props) => {
  const theme = useTheme();
  const { label, name, value, onChange, type, error } = props;
  return (
    <>
      {" "}
      <Typography textAlign={"start"} mb={1}>
        {label}
      </Typography>
      <TextField
        error={error}
        helperText={error ? `${label} missing.` : ""}
        variant="outlined"
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        fullWidth
        sx={{
          mb: 1,
          "& .MuiInputBase-root": {
            color: theme.palette.primary.contrastText,
            fontWeight: 600,
            bgcolor: blue[900],
            borderRadius: "13px",
            border: "1px solid",
            borderColor: theme.palette.primary.light,
          },
        }}
      />
    </>
  );
};

export default RegularTextField;
