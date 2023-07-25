import { LinkNav, Nav } from "./Header.styled";


export const Header =  () => {
    return (
        <section>
            <Nav>
                <LinkNav to="/">Home</LinkNav>
                <LinkNav to="/register">Registrated</LinkNav>
                <LinkNav to="/login">Login</LinkNav>
            </Nav>
      </section>
    )
}