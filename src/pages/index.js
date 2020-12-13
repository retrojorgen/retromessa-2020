import React from "react"

import Layout from "../components/layout"
import Hero from "../components/hero"
import SEO from "../components/seo"

import styled from "styled-components"

import Guest from "../components/guestsListing"

import Hosts from "../images/hosts.jpg"

const ContentWrapper = styled.div`
  width: 1200px;
  max-width: 100%;
  padding: 20px;
  margin: 0 auto 40px auto;
  h2 {
    font-family: "Yeseva One";
    font-size: 3em;
    text-shadow: 2px 5px 0 #ffc200;
    text-align: center;
  }
  p {
    text-align: left;
    opacity: 0.8;
  }
`

const TwoColRightText = styled.div`
  display: block;
  @media (min-width: 1024px) {
    display: flex;
    width: 100%;
  }
  .image {
    flex: 1 1 50%;
    img {
      max-width: 100%;
    }
  }
  .info {
    flex: 1 1 50%;
    p {
      max-width: 400px;
      margin: 0 auto 10px auto;
    }
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Slik blir streamen" />
    <Hero />
    <ContentWrapper>
      <TwoColRightText>
        <div className="image">
          <img src={Hosts} />
        </div>
        <div className="info">
          <h2>Vi streamer hver måned</h2>
          <p>
            Retromessa 2020 ble digital i år, og det gikk skikkelig bra! Så bra
            at vi lovet månedlige streams. Det har vi jaggu startet med.
            Tidligere sendinger finner du under sendinger-menyen.
          </p>
          <p>
            Programlederne blir kjente fjes fra Retromessa, som Jan Olav, Ivar
            og Jørgen, og masse gjester!
          </p>
          <p>
            Gjennom programmet får du mulighet til å delta i både chat og
            gjennom utfordringer vi kjører i studio. I år samler vi også inn
            penger for å ha råd til å holde messa gående til neste gang vi får
            holdt en fysisk messe.
          </p>
          <p>
            <b>
              Derfor håper vi så mange som mulig vil hjelpe til med donasjoner
              via Vipps, og kjøper billetter til neste års messe!
            </b>
            .
          </p>
        </div>
      </TwoColRightText>
    </ContentWrapper>
  </Layout>
)

export default IndexPage
