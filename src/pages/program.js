import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styled from "styled-components"

import Guest from "../components/guestsListing"

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
    text-align: center;
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
    <SEO title="Program" />
    <ContentWrapper>
      <h2>Program 29.-30. august 2020.</h2>
      <p>
        Vi jobber fortsatt med å få ned detaljene i programmet. Følg med her, så
        kommer det snart.
      </p>
      <Guest />
    </ContentWrapper>
    <ContentWrapper>
      <h2>Våre gjester</h2>
      <p>
        Det kommer noen fantastiske gjester til oss i år, både i studio og over
        internett.
      </p>
      <Guest />
    </ContentWrapper>
  </Layout>
)

export default IndexPage
