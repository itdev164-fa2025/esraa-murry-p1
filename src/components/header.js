import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

// Styled Components
const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.header.background};
  padding: 1rem 0;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin: 0 1rem;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.header.fontColor};

  &.active {
    font-weight: bold;
    border-bottom: 2px solid ${({ theme }) => theme.header.fontColor};
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <NavList>
        <NavItem>
          <NavLink to="/" activeClassName="active">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/about" activeClassName="active">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/contact" activeClassName="active">Contact</NavLink>
        </NavItem>
      </NavList>
    </StyledHeader>
  );
};

export default Header;