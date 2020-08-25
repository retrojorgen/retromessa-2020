import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import SponsorRow from "../components/sponsor"

const ContentWrapper = styled.div`
  width: 1200px;
  max-width: 100%;
  padding: 20px;
  margin: 0 auto 40px auto;
  @media (min-width: 1024px) {
    margin: 80px auto 40px auto;
  }
  iframe {
    margin: 0 auto 40px auto;
    width: 100%;
    display: block;
    max-width: 560px;
  }
  h2 {
    font-family: "Yeseva One";
    font-size: 3em;
    text-shadow: 2px 5px 0 #ffc200;
    text-align: center;
  }
  h3 {
    font-size: 2em;
    text-align: center;
  }
  p {
    text-align: center;
    opacity: 0.8;
    max-width: 400px;
    margin: 0 auto 10px auto;
  }
`

const DirektePage = () => (
  <Layout>
    <SEO title="Home" />
    <ContentWrapper>
      <h2>Se direkte</h2>
      <p>
        Vi sender direkte fra vår{" "}
        <a href="https://www.youtube.com/channel/UC1-G7UjkCiJTws4wv0HKCcA">
          YouTube-kanal
        </a>{" "}
        når arrangementet starter 29. august. Du kan følge{" "}
        <a href="https://www.youtube.com/channel/UC1-G7UjkCiJTws4wv0HKCcA">
          YouTube-kanalen
        </a>{" "}
        vår allerede, så får du notification når vi starter. 😎
      </p>
    </ContentWrapper>
    <SponsorRow />
  </Layout>
)

export default DirektePage
