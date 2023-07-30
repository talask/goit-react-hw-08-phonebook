import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'redux/hooks/useAuth'; 
import { fetchContacts } from 'redux/contacts/operation';

const RegistredLayout = lazy(() => import('./RegistredLayout/RegistredLayout'));
const  RegistredPage  = lazy(() => import('./RegistredForm/RegistredForm'));
const LoginPage = lazy(() => import('./Login/Login'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing, isLoggedIn } = useAuth();
  
  useEffect(() => {

    dispatch(refreshUser());

  }, [dispatch]);

  useEffect(() => {
   
    if(isLoggedIn) dispatch(fetchContacts());

  }, [dispatch, isLoggedIn]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route 
        path="/" 
        element={<Layout />}
      >
        
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<RegistredPage />} 
        />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<RegistredLayout />} />
          }
        />
      </Route>
      <Route path="*" element={<Navigate to="/" replace/>} />
    </Routes>
  );
};



     