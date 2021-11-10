import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import logo from "../images/retromessa-logo.svg"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const FooterWrapper = styled.footer`
  width: 100%;
  text-transform: uppercase;
  position: relative;
  z-index: 10;
  padding: 1rem;

  color: black;

  #logo {
    width: 180px;
    margin-right: 40px;
    img {
      width: 100%;
    }
    @media (min-width: 1024px) {
      color: white;
      display: block;
      background-color: transparent;
      padding: 0 0 0 10px;
      font-size: 2.2em;
    }
  }

  @media (min-width: 1024px) {
    padding: 4rem 4rem;
  }
  .header-shrinker {
    margin: 0 auto;
    width: 960px;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    @media (min-width: 1024px) {
      flex-direction: row;
    }
  }
`

const PageNavigation = styled.nav`
  display: none;
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    color: white;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    display: block;
    &.social {
      a {
        color: black;
      }
    }
  }
  .menu-icon {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
  a,
  p {
    display: flex;
    align-items: center;
    padding: 1em;
    font-size: 1.2em;
    text-transform: uppercase;
    color: black;
    text-decoration: none;
    letter-spacing: 2px;
    position: relative;
    overflow: hidden;

    &:hover {
      color: #ae8fe6;
    }
  }
`

const Header = ({ siteTitle }) => (
  <FooterWrapper>
    <div className="header-shrinker">
      <span id="logo">
        <img src={logo} alt="logo" />
      </span>
      <PageNavigation>
        <li>
          <p>Retromessa arrangeres av Spillmuseet</p>
        </li>
      </PageNavigation>
    </div>
  </FooterWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
