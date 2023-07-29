import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'redux/hooks/useAuth'; 
import { RegistredForm } from './RegistredForm/RegistredForm';
import { Login } from './Login/Login';
import { RegistredLayout } from './RegistredLayout/RegistredLayout';
import { fetchContacts } from 'redux/contacts/operation';

//const HomePage = lazy(() => import('../pages/Home'));
//const RegistredLayout = lazy(() => import('./RegistredLayout/RegistredLayout'));
//const  RegistredForm  = lazy(() => import('./RegistredForm/RegistredForm'));
//const Login = lazy(() => import('./Login/Login'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing, isLoggedIn } = useAuth();
  

  useEffect(() => {
    dispatch(refreshUser());
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
            <RestrictedRoute redirectTo="/contacts" component={<RegistredForm />} 
        />
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



     