import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

import Icon from "../../assets/default.inline.svg"


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
`;

const LogoWrapper = styled.div`
    width: 3rem;
    height: 3rem;
`;

const LogoNameWrapper = styled.div`
    display: inherit;
    flex-direction: inherit;
`;

const NavBar = () => (
    <NavBarWrapper>
        <LogoNameWrapper>
            <LogoWrapper>
                <Icon />
            </LogoWrapper>
            <StyledLink to="/">
            Yoon's Blog
            </StyledLink>
        </LogoNameWrapper>
        <Nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/books">Readings</Link>
        </Nav>
    </NavBarWrapper>
);

export default NavBar;