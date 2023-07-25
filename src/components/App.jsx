import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'redux/hooks/useAuth'; 
//import { Login } from 'redux/auth/operations';


//const HomePage = lazy(() => import('../pages/Home'));
const RegistredLayout = lazy(() => import('./RegistredLayout/RegistredLayout'));
const  RegistredForm  = lazy(() => import('./RegistredForm/RegistredForm'));
const Login = lazy(() => import('./Login/Login'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route index element={<HomePage />} /> */}
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<RegistredForm />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<RegistredLayout />} />
          }
        />
      </Route>
    </Routes>
  );
};


// import React, { useEffect } from "react";
// import { Routes, Route } from 'react-router-dom';
// //import { lazy, Suspense } from "react";

// import { fetchContacts } from "redux/operation";
// import { useDispatch, useSelector } from "react-redux";

// import { RegistredLayout } from "./RegistredLayout/RegistredLayout";
// import { Header } from "./Header/Header";
// import { RegistredForm } from "./RegistredForm/RegistredForm";
// import { Login } from "./Login/Login"


// export const App = () => {
//   const dispatch = useDispatch();
  

//   useEffect(() => {
//     dispatch(fetchContacts());
//     console.log("dispatch")
//   }, [dispatch]);

//   return (
//     <>
//       <Header />
//       <Routes>
//         <Route path="/register" element={<RegistredForm/>}/>
//         <Route path="/Login" element={<Login/>}/>
//         <Route path="/contacts" element={<RegistredLayout/>}/>
//       </Routes>
//     </>
    
    
      
//     )
  
// };


     