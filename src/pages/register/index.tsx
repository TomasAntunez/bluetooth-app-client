import React from "react"
import { Typography, Paper, TextField, Button, Box } from "@mui/material";
import { Link } from 'react-router-dom';


export const RegisterPage: React.FC<{}> = () => {
  return (
    <>
      <Typography variant="h2" component="h1" align="center" fontWeight="regular">
        Register
      </Typography>

      <Paper elevation={0} sx={{
        marginTop: 4,
        paddingX: 7,
        paddingY: 4
      }}>
        <TextField label="Name" variant="outlined" fullWidth type="text"/>
        <TextField label="Email" variant="outlined" fullWidth type="email" sx={{ marginTop: 3 }}/>
        <TextField label="Password" variant="outlined" fullWidth type="password" sx={{ marginTop: 3 }}/>
        <TextField label="Repeat Password" variant="outlined" fullWidth type="password" sx={{ marginTop: 3 }}/>

        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Link to="/auth/login">
            <Button sx={{ marginTop: 4 }}>Do you have an Account?</Button>
          </Link>

          <Button size="large" variant="outlined" sx={{ marginTop: 4 }}>
            Create Account
          </Button>
        </Box>
      </Paper>
    </>
  );
};
