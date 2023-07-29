import { logOut } from "redux/auth/operations";
import { useDispatch } from 'react-redux';
import { useAuth } from "redux/hooks/useAuth";

export const UserMenu = () => {
    
    const { user } = useAuth();
    const dispatch = useDispatch();
    

    const handleLogout = () => {
        console.log("logout");
        dispatch(logOut());
    }

    return (
        <div>
  <p>{user.email}</p>
  <button onClick={handleLogout}>Logout</button>
</div>  
    )
}  