import { logOut } from "redux/auth/operations";
import { useDispatch } from 'react-redux';
import { useAuth } from "redux/hooks/useAuth";
import { Button } from "components/ContactForm/ContactForm.styled";
import { DivUser, P } from "./UserMenu.styled";

export const UserMenu = () => {
    
    const { user } = useAuth();
    const dispatch = useDispatch();
    

    const handleLogout = () => {
        
        dispatch(logOut());
    }

    return (
        <DivUser>
            <P>{user.email}</P>
            <Button onClick={handleLogout}>Logout</Button>
        </DivUser>  
    )
}  