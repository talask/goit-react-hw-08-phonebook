import { LinkNav, Nav } from "./Header.styled";


export const Header =  () => {
    return (
        <section>
            <Nav>
                <LinkNav to="/">Home</LinkNav>
                <LinkNav to="/register">Movies</LinkNav>
                <LinkNav to="/login">Movies</LinkNav>
            </Nav>
      </section>
    )
}