
import { ContactItem } from './ContactItem';
import { Table } from './Contacts.styled';
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from 'redux/contacts/selectors'; 
import { getFilter } from 'redux/contacts/selectors'; 
import { deleteContact } from 'redux/contacts/operation'; 

export const Contacts = () => {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
   
    const dispatch = useDispatch();
    
    const fnDelete = (id) => {
        dispatch(deleteContact(id));
      
    }

    const visibleContacts = () => {
        if(filter)
            return contacts.filter(contact =>
                contact.name.toLowerCase().includes(filter.toLowerCase()),
            );
        
        return contacts;
      };

   
    return ( 
        contacts.length > 0 && <Table>
            <tbody>
                {visibleContacts().map(({name, number, id}, i) => {
                  
                    return (
                        <ContactItem 
                            key={id}
                            name={name} 
                            number={number} 
                            id={id}
                            fnDelete={fnDelete}
                        ></ContactItem>
                    )
                }
                )}
            </tbody>
        </Table>
    )
}
