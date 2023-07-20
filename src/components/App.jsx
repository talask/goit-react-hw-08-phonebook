import React, { useEffect } from "react";
import { Contacts } from './Contacts/Contacts';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { Div } from './Common/App.styled';
import { fetchContacts } from "redux/operation";
import { useDispatch, useSelector } from "react-redux";
import { getIsLoading, getError } from "redux/selectors";
import { RegistredLayout } from "./RegistredLayout/RegistredLayout";


export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
    console.log("dispatch")
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/register" element={<Login/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/contacts" element={<RegistredLayout/>}/>
      
    </Routes>
    
      
    )
  
};


     