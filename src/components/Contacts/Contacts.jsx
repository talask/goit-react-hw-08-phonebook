
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
                {visibleContacts().map(({name, phone, id}, i) => {
                    console.log(name, phone, id)
                    return (
                        <ContactItem 
                            key={i}
                            name={name} 
                            phone={phone} 
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
