import styled from 'styled-components';
import { Link,} from 'react-router-dom';

 export const  Container = styled.div`
    padding: 20px;
`;

export const Nav = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    padding: 10px 15px;
    box-shadow: 0 5px 5px -5px #333;
`;

export const LinkNav = styled(Link)`
    display: inline-block;
    margin-left: 10px;
    padding: 5px;

    &:active {
    color: orange;
  }
`;
export const NavHome = styled.nav`
    display: flex;
    gap:24px;
    align-items: center;
    width: 100%;
    padding: 10px 15px;
`;
