import {
  Alert,
  Box,
  Button,
  Container,
  Divider,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import RegularTextField from "../Reusables/RegularTextField";
import LoginIcon from "@mui/icons-material/Login";
import {
  redirect,
  useActionData,
  useFetcher,
  useSubmit,
} from "react-router-dom";
import { login } from "../../utils/userUtils";

const LoginPage = () => {
  const theme = useTheme();
  const submit = useSubmit();
  const actionData = useActionData();
  const [formValue, setFormValue] = useState({
    username: {
      value: "",
      error: false,
    },
    password: {
      value: "",
      error: false,
    },
  });
  let loginError = false;

  const setValue = (field, property, value) => {
    setFormValue((prev) => ({
      ...prev,
      [field]: { ...prev[field], [property]: value },
    }));
  };

  const login = async () => {
    if (!formValue.username.value) {
      setValue("username", "error", true);
      return;
    }
    setValue("username", "error", false);
    if (!formValue.password.value) {
      setValue("password", "error", true);
      return;
    }
    setValue("password", "error", false);

    const body = {
      username: formValue.username.value,
      password: formValue.password.value,
    };
    submit(body, {
      method: "POST",
      action: "/",
      encType: "application/json",
    });
  };

  const formFieldChange = (e) => {
    const { name, value } = e.target;
    setValue(name, "value", value);
    // setFormValue((prev) => ({ ...prev, [name]: { ...prev[name], value } }));
  };
  if (actionData && !actionData?.ok) loginError = true;
  return (
    <Box sx={{ width: "100vw", height: "100vh" }}>
      <Container fixed sx={{ height: "100%" }}>
        <Box
          sx={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 5,
          }}
        >
          <Box>
            <Typography variant="h2">CHMSU</Typography>
            <Typography variant="h3">Summary of Attendance</Typography>
          </Box>
          <Box
            sx={{
              borderRadius: theme.shape.borderRadius,
              boxShadow: theme.shadows,
              bgcolor: theme.palette.primary.dark,
              flex: 1,
              p: 3,
              px: 5,
              textAlign: "center",
              color: theme.palette.primary.contrastText,
            }}
          >
            <Typography variant="h4" fontWeight={700} mb={3}>
              Login
            </Typography>
            <RegularTextField
              error={formValue.username.error}
              name="username"
              label="Username"
              value={formValue.username.value}
              onChange={formFieldChange}
            />
            <RegularTextField
              error={formValue.password.error}
              name="password"
              label="Password"
              type="password"
              value={formValue.password.value}
              onChange={formFieldChange}
            />
            <Button
              endIcon={<LoginIcon />}
              fullWidth
              variant="contained"
              onClick={login}
            >
              LOGIN
            </Button>
            {loginError && (
              <>
                <Divider flexItem />
                <Alert severity="error" sx={{ mt: 1 }}>
                  No account with matching credentials!
                </Alert>
              </>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export const loginPageAction = async ({ request }) => {
  let body = await request.json();
  const resp = await login(body);
  if (resp.ok) return redirect("/home");
  else return resp;
};

export default LoginPage;
