import React from "react"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import SponsorRow from "./sponsor"
import background from "../images/background.jpg"

const HeroWrapper = styled.div`
  margin: 0 auto 40px auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  height: auto;
  align-items: center;
  background-image: url(${background});
  @media (min-width: 1024px) {
    height: 600px;
    margin: 60px auto 40px auto;
  }
  #logo {
    width: 180px;
    display: block;
    margin-right: 40px;
    img {
      width: 100%;
    }
    @media (min-width: 1024px) {
      display: none;
    }
  }
`

const TaglineWrapper = styled.div`
  width: 1200px;
  max-width: 100%;
  padding: 20px 20px 20px 20px;
  position: relative;
  @media (min-width: 1024px) {
    display: flex;
  }
  @media (min-width: 1024px) {
    padding: 20px;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    img {
      max-width: 100%;
      border-radius: 10px;
    }
  }
  h1 {
    color: white;
    max-width: 100%;
    font-size: 3rem;
    font-family: "Yeseva One";
    margin-bottom: 20px;
    text-shadow: 2px 5px 0 #7013c7;
    text-align: center;
    @media (min-width: 1024px) {
      font-size: 4rem;
    }
  }

  p {
    color: white;
    opacity: 0.8;
    max-width: 100%;
    line-height: 1.4em;
    padding: 5px;
    margin: 0;
    text-align: center;
    @media (min-width: 1024px) {
      max-width: 50%;
    }
  }
  .action-button {
    margin-top: 60px;
    display: inline-block;
    padding: 10px 20px;
    border-radius: 20px;
  }

  iframe {
    max-width: 100%;
  }
`

const Header = ({ siteTitle }) => (
  <>
    <HeroWrapper>
      <TaglineWrapper>
        <div>
          <h1>Velkommen til mini-messa 27.11.2021 🥳</h1>
          <p>
            Det blir en liten messe i Sandefjord i år på Fjordfolk i Sandefjord.
            Det blir stands, retrogaming, konkurranser og en kveldskonsert. Følg
            med på vår Facebook-side for mer informasjon om billettsalget.
          </p>
          <AniLink
            cover
            to="#"
            className="action-button yellow"
            target="new_window"
          >
            Billetter kommer snart
          </AniLink>
        </div>
        <div></div>
      </TaglineWrapper>
    </HeroWrapper>
    <SponsorRow />
  </>
)
export default Header
