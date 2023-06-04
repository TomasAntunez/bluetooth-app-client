import React, { useState } from "react"
import { Typography, Paper, TextField, Button, Box, Alert } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';

import { LoginUserScheme, AlertProps } from '../../types';
import { authUser } from '../../services';
import { routes } from '../../config/router'


export const LoginPage: React.FC<{}> = () => {

  const navigate = useNavigate();

  const [ data, setData ] = useState<LoginUserScheme>({
    email: '',
    password: ''
  });

  const [ alert, setAlert ] = useState<AlertProps>({ visible: false });

  const handleChangeData = ( e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = ( e: React.FormEvent<HTMLFormElement> ) => {
    e.preventDefault();

    try {
      authUser( data );
      navigate( routes.HOME );

    } catch (error) {
      console.log(error);
      if ( error instanceof Error ) {
        setAlert({
          visible: true,
          msg: error.message,
          severity: 'error'
        })
      }
    }

    setTimeout( () => {
      setAlert({ visible: false });
    }, 5000);
  };


  return (
    <>
      <Box sx={{ mt: 3, minHeight: 50 }} >
        {
          alert.visible && (
            <Alert
              variant="outlined"
              severity={ alert.severity }
              sx={{ width: '100%' }}
            >
              { alert.msg }
            </Alert>
          )
        }
      </Box>

      <Typography
        variant="h2"
        component="h1"
        align="center"
        fontWeight="regular"
        marginTop={5}
      >
        Login
      </Typography>

      <Paper elevation={0} sx={{
        marginTop: 4,
        paddingX: 7,
        paddingY: 4
      }}>
        <form onSubmit={ handleSubmit }>
          <TextField
            label="Email"
            name="email"
            variant="outlined"
            fullWidth
            type="text"
            value={ data.email }
            onChange={ e => handleChangeData(e) }
          />
          <TextField
            label="Password"
            name="password"
            variant="outlined"
            fullWidth
            type="password"
            sx={{ marginTop: 3 }}
            value={ data.password }
            onChange={ e => handleChangeData(e) }
          />

          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Link to="/auth/register">
              <Button sx={{ marginTop: 4 }}>New Account?</Button>
            </Link>

            <Button type="submit" size="large" variant="outlined" sx={{ marginTop: 4 }}>
              Sign in
            </Button>
          </Box>
        </form>
      </Paper>
    </>
  );
};
