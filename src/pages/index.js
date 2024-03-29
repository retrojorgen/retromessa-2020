import React from "react"

import Layout from "../components/layout"
import Hero from "../components/hero"
import SEO from "../components/seo"

import styled from "styled-components"

import Hosts from "../images/minimesse-hoopla.jpg"

const ContentWrapper = styled.div`
  width: 1200px;
  max-width: 100%;
  padding: 20px;
  margin: 0 auto 40px auto;
  h2 {
    font-family: "Yeseva One";
    font-size: 3em;
    text-shadow: 2px 5px 0 #f0cdf1;
    text-align: center;
  }
  p {
    font-size: 1.1rem;
    line-height: 1.4;
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
        <div className="info">
          <h2>PROGRAM</h2>
          <p>10:00 - Dørene for mini-messa åpner</p>
          <p>12:00 - Barnequiz med premier</p>
          <p>17:00 - Dørene for mini-messa stenger</p>
          <p>-----------------</p>
          <p>20:00 - Dørene for konserten åpner</p>
          <p>20:00 - Quiz med premier</p>
          <p>21:00 - konsert med David Wise starter</p>
          <p>
            Messa arrangeres på utestedet Fjordfolk i Sandefjord sentrum. Så bli
            med oss på en legendarisk dag med stands, retrogaming og
            konkurranser. Og en kveldskonsert med David Wise, Kevin Bayliss og
            venner!
          </p>
        </div>
        <div className="image">
          <img src={Hosts} alt="hosts" />
        </div>
      </TwoColRightText>
    </ContentWrapper>
  </Layout>
)

export default IndexPage
