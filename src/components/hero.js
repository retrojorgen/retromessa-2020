import React from "react"
import styled from "styled-components"
import background from "../images/background.jpg"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import SponsorRow from "./sponsor"

const HeroWrapper = styled.div`
  width: 1200px;
  max-width: 100%;
  margin: 0 auto 40px auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  height: auto;

  @media (min-width: 1024px) {
    height: 600px;
    margin: 80px auto 40px auto;
  }
  #background {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 280px;

    background: url(${background});
    background-size: 100%;
    background-position: top center;

    @media (min-width: 1024px) {
      border-radius: 20px;
      left: 50%;
      top: 50%;
      width: 50%;
      height: 600px;
      background-size: cover;
      background-position: right;
      transform: translateY(-50%) scaleX(-1);
    }
  }
`

const TaglineWrapper = styled.div`
  padding: 273px 20px 20px 20px;
  position: relative;
  @media (min-width: 1024px) {
    padding: 20px;
  }
  h1 {
    color: #27214d;
    max-width: 100%;
    font-size: 3rem;
    font-family: "Yeseva One";
    margin-bottom: 20px;
    text-shadow: 2px 5px 0 #ffc200;
    @media (min-width: 1024px) {
      max-width: 60%;
      font-size: 6rem;
    }
  }

  p {
    color: #27214d;
    opacity: 0.8;
    max-width: 100%;
    line-height: 1.4em;
    padding: 5px;
    margin: 0;
    @media (min-width: 1024px) {
      max-width: 50%;
    }
  }
  .action-button {
    margin-top: 10px;
    display: inline-block;
    padding: 10px 20px;
    border-radius: 20px;
  }
`

const Header = ({ siteTitle }) => (
  <>
    <HeroWrapper>
      <div id="background"></div>
      <TaglineWrapper>
        <h1>
          I år sender
          <br /> vi live 😍
        </h1>
        <p>Skuffa over at det ikke blir noen messe i år? Fortvil ikke!</p>
        <p>
          Fra lørdag 29. august til 30. august sender vi direkte fra Hjertnes
          Kino i Sandefjord. Det blir kjente gjester, utfordringer og masse
          masse herlig retrogaming.
        </p>
        <AniLink cover to="/doner" className="action-button yellow">
          Se direkte
        </AniLink>
      </TaglineWrapper>
    </HeroWrapper>
    <SponsorRow />
  </>
)

export default Header
