import React from "react"
import { Typography, Paper, TextField, Button, Box } from "@mui/material";
import { Link } from 'react-router-dom';


export const LoginPage: React.FC<{}> = () => {
  return (
    <>
      <Typography variant="h2" component="h1" align="center" fontWeight="regular">
        Login
      </Typography>

      <Paper elevation={0} sx={{
        marginTop: 4,
        paddingX: 7,
        paddingY: 4
      }}>
        <TextField label="Email" variant="outlined" fullWidth type="email"/>
        <TextField label="Password" variant="outlined" fullWidth type="password" sx={{ marginTop: 3 }}/>

        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Link to="/auth/register">
            <Button sx={{ marginTop: 4 }}>New Account?</Button>
          </Link>

          <Button size="large" variant="outlined" sx={{ marginTop: 4 }}>
            Sign in
          </Button>
        </Box>
      </Paper>
    </>
  );
};
