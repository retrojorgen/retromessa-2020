import React from "react"
import styled from "styled-components"
import background from "../images/youtube-julesending-stream.jpg"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import SponsorRow from "./sponsor"
import logo from "../images/retromessa-logo.svg"

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
    align-items: flex-start;
    justify-content: center;
    margin-bottom: 20px;
    img {
      max-width: 100%;
      border-radius: 10px;
    }
  }
  h1 {
    color: #27214d;
    max-width: 100%;
    font-size: 3rem;
    font-family: "Yeseva One";
    margin-bottom: 20px;
    text-shadow: 2px 5px 0 #ffc200;
    @media (min-width: 1024px) {
      font-size: 4rem;
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

  iframe {
    max-width: 100%;
  }
`

const Header = ({ siteTitle }) => (
  <>
    <HeroWrapper>
      <TaglineWrapper>
        <AniLink fade duration={0.25} to="/" id="logo">
          <img src={logo} />
        </AniLink>
        <div>
          <h1>Neste sending: 07.05.2021</h1>
          <p>
            Vi kjører en livesending 07.05.2021 kl. 19:30.
            Vi byr på hauger av giveaways og god retrounderholdning!
          </p>
          <AniLink
            cover
            to="https://www.twitch.tv/retromessa/"
            className="action-button yellow"
            target="new_window"
          >
            Se live på Twitch
          </AniLink>
        </div>
        <div>
          <iframe
            width="560"
            height="315"
            className="youtube-embed"
            src="https://player.twitch.tv/?retromessa&parent=www.retromessa.com&parrent=retromessa.com"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </TaglineWrapper>
    </HeroWrapper>
    <SponsorRow />
  </>
)
export default Header
