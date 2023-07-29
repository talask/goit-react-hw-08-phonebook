import { NavLink } from 'react-router-dom';
import { useAuth } from 'redux/hooks/useAuth'; 
import { NavHome } from 'components/Header/Header.styled';


export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavHome>
      <NavLink to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts">
          Contacts
        </NavLink>
      )}
    </NavHome>
  );
};