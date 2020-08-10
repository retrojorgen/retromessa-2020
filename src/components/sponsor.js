import React from "react"
import styled from "styled-components"

import logo1 from "../images/sponsor/activision-blizzard.jpg"
import logo2 from "../images/sponsor/bk-grafisk.jpg"
import logo3 from "../images/sponsor/capcom.jpg"
import logo4 from "../images/sponsor/dotemu.jpg"
import logo5 from "../images/sponsor/elkjop.jpg"
import logo6 from "../images/sponsor/lego.jpg"
import logo7 from "../images/sponsor/nintendo.jpg"
import logo8 from "../images/sponsor/playstation.jpg"
import logo9 from "../images/sponsor/playtonic.jpg"
import logo10 from "../images/sponsor/sb.jpg"
import logo11 from "../images/sponsor/strand-forlag.jpg"
import logo12 from "../images/sponsor/topp-trafikkskole.jpg"

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
    flex-wrap: wrap;
    @media (min-width: 1024px) {
      flex-wrap: nowrap;
      justify-content: space-between;
    }
  }
  p {
    text-transform: uppercase;
    font-size: 0.6rem;
    margin-bottom: 28px;
    opacity: 0.8;
    text-align: left;
    padding-left: 10px;
  }
  &:hover {
    a {
      img {
        opacity: 0.4;
      }
    }
  }
  a {
    display: inline-block;
    padding: 10px 10px;
    @media (min-width: 1024px) {
      padding: 0 10px;
    }
    img {
      height: 24px;
      transition: all 0.25s ease-in-out;
      @media (min-width: 1024px) {
        height: 20px;
        filter: grayscale(100);
        opacity: 0.8;
      }
    }
    &:hover {
      img {
        opacity: 1;
        filter: grayscale(0);
        transform: scale(1.4);
      }
    }
  }
  @media screen and (min-width: 1024px) {
  }
`

const SponsorRow = () => (
  <SponsorRowWrapper>
    <p>Støttespillere</p>
    <div>
      <a href="https://www.activisionblizzard.com/">
        <img src={logo1} />
      </a>
      <a href="https://www.bk.no/">
        <img src={logo2} />
      </a>
      <a href="https://www.capcom.com/">
        <img src={logo3} />
      </a>
      <a href="https://www.dotemu.com/">
        <img src={logo4} />
      </a>
      <a href="https://www.elkjop.no/">
        <img src={logo5} />
      </a>
      <a href="https://www.lego.com/nb-no">
        <img src={logo6} />
      </a>
      <a href="https://www.nintendo.com/">
        <img src={logo7} />
      </a>
      <a href="https://www.playstation.com/no-no/">
        <img src={logo8} />
      </a>
      <a href="https://www.playtonicgames.com/">
        <img src={logo9} />
      </a>
      <a href="https://www.sb.no/">
        <img src={logo10} />
      </a>
      <a href="https://www.strandforlag.no/">
        <img src={logo11} />
      </a>
      <a href="https://www.topptrafikkskole.no/">
        <img src={logo12} />
      </a>
    </div>
  </SponsorRowWrapper>
)

export default SponsorRow
