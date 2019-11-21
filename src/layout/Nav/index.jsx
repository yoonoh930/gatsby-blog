import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

const StyledLink = styled(Link)`
    display: flex;
    font-weight: 700;
    align-items: center;
    text-decoration: none;
    color: ${p => p.theme.black};
`;

const Nav = styled.nav`
    display: flex;
    justify-content: flex-end;
    font-weight: 500;
    font-size: 1.1rem;
    align-items: center;
    a {
        margin-left: 2rem;
        color: ${p => p.theme.navColor};
        text-decoration: none;
    }
`;

const NavBarWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const NavBar = () => (
    <NavBarWrapper>
        <StyledLink to="/">
        Yoon's Blog
        </StyledLink>
        <Nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </Nav>
    </NavBarWrapper>
);

export default NavBar;