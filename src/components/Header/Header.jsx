import { LinkNav, Nav } from "./Header.styled";
import { useAuth } from "redux/hooks/useAuth";
import { Navigation } from "components/Navigation/Nanigation"; 
import { UserMenu } from "components/UserMenu/UserMenu";
import { DivUser } from "components/UserMenu/UserMenu.styled";


export const Header =  () => {
    const { isLoggedIn } = useAuth();

    return (
        <section>
            <Nav>
                <Navigation />
                { isLoggedIn ? <UserMenu /> :
                <DivUser>
                <LinkNav to="/register">Registrated</LinkNav>
                 
                <LinkNav to="/login">Login</LinkNav>
                </DivUser>
                }
            </Nav>
      </section>
    )
}