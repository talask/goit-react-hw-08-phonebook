import { Loader } from "../Loader/Loader";
import { Contacts } from '../Contacts/Contacts';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from "components/Filter/Filter"; 
import { Div } from "components/Common/App.styled"; 
import { getIsLoading, getError } from "redux/contacts/selectors";

import { useSelector } from "react-redux";

export default function RegistredLayout() {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

    return (
      <Div>
        <h1>Phonebook</h1>
        <ContactForm />
          <h2>Contacts</h2>
          <Filter/>
          {isLoading && !error && <Loader/>}
        <Contacts/>
    </Div>
    )
}