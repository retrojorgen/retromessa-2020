import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import logo from "../images/retromessa-logo-white.svg"
import SvgIcon from "./svgIcons"

import AniLink from "gatsby-plugin-transition-link/AniLink"

const HeaderWrapper = styled.header`
  width: 100%;

  position: fixed;
  z-index: 40;
  bottom: 0;
  left: 50%;

  transform: translateX(-50%);

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #7013c7;
  backdrop-filter: blur(10px);

  @media (min-width: 1024px) {
    top: 0;
    border-top: 0;
    border-bottom: 0;
    background-color: #7013c7;
    bottom: auto;
    height: 70px;
  }

  .header-shrinker {
    width: 1200px;
    max-width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  #logo {
    width: 180px;
    display: none;
    margin-right: 40px;
    img {
      width: 100%;
    }
    @media (min-width: 1024px) {
      color: white;
      display: flex;
      align-items: center;
      background-color: transparent;
      padding: 0 0 0 10px;
      font-size: 2.2em;
    }
  }
`

const PageNavigation = styled.nav`
  display: flex;
  color: white;
  list-style: none;
  padding: 0;
  margin: 0;
  justify-content: space-evenly;
  width: 100%;
  @media (min-width: 1024px) {
    position: regular;
    width: auto;
    left: auto;
    top: auto;
  }
  li {
    display: block;
    &.only-mobile {
      @media (min-width: 1024px) {
        display: none;
      }
    }
  }
  a {
    display: flex;
    padding: 1em 0.5em 3em 0.5em;
    font-size: 0.6em;
    text-transform: uppercase;
    color: white;
    text-decoration: none;
    letter-spacing: 2px;
    position: relative;
    overflow: hidden;
    text-align: center;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    @media (min-width: 1024px) {
      padding: 0.8em 2em;
      text-align: left;
      font-size: 0.7em;
      flex-direction: row;
      border-radius: 20px;
    }

    &:hover {
      @media (min-width: 1024px) {
        background-color: #ffc200;
      }
    }
    .menu-icon {
      width: auto;
      height: 20px;
      margin-bottom: 16px;
      @media (min-width: 1024px) {
        margin-right: 10px;
        margin-bottom: 0;
      }
    }
    &:hover {
      @media (min-width: 1024px) {
      }
    }
  }
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <div className="header-shrinker">
      <AniLink fade duration={0.25} to="/" id="logo">
        <img src={logo} alt="logo" />
      </AniLink>
      <PageNavigation>
        <li>
          <AniLink fade duration={0.25} to="/">
            <SvgIcon name="pacman" />
            <span>Home</span>
          </AniLink>
        </li>
        <li>
          <AniLink fade duration={0.25} to="https://www.twitch.com/retromessa">
            <SvgIcon name="live" />
            <span>Sendinger</span>
          </AniLink>
        </li>
        <li>
          <AniLink fade duration={0.25} to="/donate">
            <SvgIcon name="vipps" />
            <span>Donate</span>
          </AniLink>
        </li>
      </PageNavigation>
    </div>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
