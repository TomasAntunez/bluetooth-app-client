import React, { useState } from "react"
import { Typography, Paper, TextField, Button, Box, Alert } from "@mui/material";
import { Link } from 'react-router-dom';

import { RegisterUserSchema, AlertProps } from '../../types';
import { registerUser } from '../../services';


export const RegisterPage: React.FC<{}> = () => {

  const [ data, setData ] = useState<RegisterUserSchema>({
    name: '',
    email: '',
    password: '',
    repeatPassword: ''
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
      registerUser( data );

      setData({
        name: '',
        email: '',
        password: '',
        repeatPassword: ''
      });

      setAlert({
        visible: true,
        msg: 'Successfully registered user',
        severity: 'success'
      })

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
        Register
      </Typography>

      <Paper
        elevation={0}
        sx={{
          marginTop: 4,
          paddingX: 7,
          paddingY: 4
        }}
      >
        <form onSubmit={ handleSubmit }>
          <TextField
            label="Name"
            name="name"
            variant="outlined"
            fullWidth
            type="text"
            value={ data.name }
            onChange={ e => handleChangeData(e) }
          />
          <TextField
            label="Email"
            name="email"
            variant="outlined"
            fullWidth
            type="text"
            sx={{ marginTop: 3 }}
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
          <TextField
            label="Repeat Password"
            name="repeatPassword"
            variant="outlined"
            fullWidth
            type="password"
            sx={{ marginTop: 3 }}
            value={ data.repeatPassword }
            onChange={ e => handleChangeData(e) }
          />

          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Link to="/auth/login">
              <Button sx={{ marginTop: 4 }}>Do you have an Account?</Button>
            </Link>

            <Button type="submit" size="large" variant="outlined" sx={{ marginTop: 4 }}>
              Create Account
            </Button>
          </Box>
        </form>
      </Paper>
    </>
  );
};
