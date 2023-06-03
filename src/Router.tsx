import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { routes } from './config/router';
import { AuthLayout } from './layouts/AuthLayout';
import { LoginPage } from './pages/login';
import { RegisterPage } from './pages/register';
import { HomePage } from './pages/home';


export const AppRouter: React.FC<{}> = () => {
  return (
    <Router>
      <Routes>

        <Route path={ routes.AUTH } element={ <AuthLayout /> }>
          <Route index element={ <Navigate to={ routes.LOGIN } /> } />

          <Route path={ routes.LOGIN } element={ <LoginPage /> } />
          <Route path={ routes.REGISTER } element={ <RegisterPage /> } />

          <Route path={ routes.ANY } element={ <Navigate to={ routes.LOGIN } /> } />
        </Route>

        <Route path={ routes.HOME } element={ <HomePage /> } />

        <Route path={ routes.ANY } element={ <Navigate to={ routes.HOME } /> } />
        
      </Routes>
    </Router>
  )
}
