/** Libraries */
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

/** Styles */
const HeaderLinkStyled = styled(Link)`
  text-decoration: none;
  color: #c13b22;
  font-weight: bold;
  transition: all 0.2s ease;
  position: relative;
  z-index: 2;
  padding: 0.5rem;

  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #c13b22;
    transform-origin: left;
    transform: scaleX(0);
    transition: transform 0.2s ease;
    z-index: -1;
  }
  &:hover {
    color: #f9f9f9;
  }

  &:hover::before {
    transform: scaleX(1);
  }
`

const HeaderContainerStyled = styled.div`
  margin: 0 auto;
  max-width: 960px;
  margin: 1rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ListStyled = styled.div`
  list-style-type: none;
  display: flex;
  margin: 0;
  li {
    margin-bottom: 0;
  }
  li:not(:first-child) {
    margin-left: 1.5rem;
  }
`

const HeaderStyled = styled.div`
  margin: 3rem 0;
`

const LogoLinkStyled = styled(Link)`
  color: #f9f9f9;
  text-decoration: none;
  font-family: "Playfair Display";
  padding: 1rem;
  background-color: #151515;
`

/** Component */

const Header = ({ siteTitle }) => (
  <HeaderStyled as="header">
    <HeaderContainerStyled>
      <h1 style={{ margin: 0 }}>
        <LogoLinkStyled to="/">{siteTitle}</LogoLinkStyled>
      </h1>
      <ListStyled as="ul">
        <li>
          <HeaderLinkStyled to="/about">About me</HeaderLinkStyled>
        </li>
        <li>
          <HeaderLinkStyled to="/contacts">Contacts</HeaderLinkStyled>
        </li>
      </ListStyled>
    </HeaderContainerStyled>
  </HeaderStyled>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
