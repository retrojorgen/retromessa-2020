import React from "react"
import styled from "styled-components"

import logo5 from "../images/sponsor/elkjop.jpg"
import logo6 from "../images/sponsor/lego.jpg"
import logo7 from "../images/sponsor/nintendo.jpg"
import logo8 from "../images/sponsor/playstation.jpg"
import surefire from "../images/sponsor/surefire.jpg"
import xbox from "../images/sponsor/xbox.png"

const SponsorRowWrapper = styled.div`
  text-align: center;
  width: 1200px;
  max-width: 100%;
  padding: 0 0;
  margin: 0 auto 40px auto;
  position: relative;
  @media (min-width: 1024px) {
    padding: 20px 0;
    margin: 80px auto 80px auto;
  }
  div {
    display: flex;
    justify-content: flex-start;
    max-width: 100%;
    flex-basis: 0;
    align-items: center;
    flex-wrap: wrap;
    @media (min-width: 1024px) {
      justify-content: center;
      flex-wrap: nowrap;
    }
    a {
      margin: 20px;
      display: flex;
      align-items: center;
      width: 40%;
      @media (min-width: 1024px) {
        width: 100%;
      }
      img {
        max-width: 100%;
        @media (min-width: 1024px) {
          max-width: 100%;
        }
      }
    }
  }
`

const SponsorRow = () => (
  <SponsorRowWrapper>
    <p>Støttespillere</p>
    <div>
      <a href="https://www.elkjop.no/catalog/no-gaming/gaming">
        <img src={logo5} alt="logo" />
      </a>
      <a href="https://www.lego.com/en-no">
        <img src={logo6} alt="logo" />
      </a>
      <a href="https://www.playstation.com/no-no/">
        <img src={logo8} alt="logo" />
      </a>
      <a href="https://www.nintendo.no">
        <img src={logo7} alt="logo" />
      </a>
      <a href="https://www.surefire-gaming.com/">
        <img src={surefire} alt="logo" />
      </a>
      <a href="https://www.xbox.com/nb-NO">
        <img src={xbox} alt="logo" />
      </a>
    </div>
  </SponsorRowWrapper>
)

export default SponsorRow
