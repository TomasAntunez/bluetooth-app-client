import React from 'react'
import { Outlet } from 'react-router-dom';
import { Container, Box } from '@mui/material';


export const AuthLayout: React.FC<{}> = () => {
  return (
    <>
      <Container maxWidth="sm">
        <Box marginTop={10}>
          <Outlet />
        </Box>
      </Container>
    </>
  )
}
