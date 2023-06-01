import {useEffect, useState} from 'react';
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";
import { loginAdmin } from "../server/UserRoutes"
import img from "../images/banner.png"
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        GF Chatter
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Login() {
  const router = useRouter();
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  const checkCreds = (username, res) => {
    if (res.message === "Success") {
      alert("success")
      setCookie("username", username);
      setCookie("token", res.token);
      router.push(`admin/dashboard`);
    } else {
      alert("error: ",res.message)
      console.log(res.message)
    }
  };

  const fetchData = async (username,pw) => {
    const res = await loginAdmin(username,pw)
    checkCreds(username, res);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event)
    // const data = new FormData(event.currentTarget);
    fetchData(username,password)
  };
  
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://gossa-images.s3.us-west-1.amazonaws.com/lush/girls/kaili_bae/images/kaili_bae_13.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form sx={{ mt: 1 }}>
              <TextField onChange={(e) => setUsername(e.target
                .value)} margin="normal" required fullWidth id="username" label="Username" name="username" autoComplete="username" autoFocus/>
              <TextField onChange={(e) => setPassword(e.target
                .value)} margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password"/>
              <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me"/>
              <Button type="button" onClick={(e) => handleSubmit(e)} fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </form>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
