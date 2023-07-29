import { LinkNav, Nav } from "./Header.styled";
import { useAuth } from "redux/hooks/useAuth";
import { UserMenu } from "components/UserMenu/UserMenu";



export const Header =  () => {
    const { isLoggedIn } = useAuth();

    return (
        <section>
            <Nav>
                <LinkNav to="/">Home</LinkNav>
                { isLoggedIn ? <UserMenu /> :
                <div>
                <LinkNav to="/register">Registrated</LinkNav>
                 
                <LinkNav to="/login">Login</LinkNav>
                </div>
                }
            </Nav>
      </section>
    )
}