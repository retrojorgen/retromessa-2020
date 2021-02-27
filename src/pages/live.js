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
  @media (min-width: 1024px) {
    &.side-by-side,
    .side-by-side {
      display: flex;
      flex-wrap: wrap;
      .content {
        width: 50%;
        padding: 20px;
      }
    }
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
    <SEO title="Se Retromessa 2020 live" />
    <ContentWrapper>
      <h2>Tidligere sendinger</h2>
      <div className="side-by-side">
        <div className="content">
          <h4>Februarsending 2021 </h4>
          <iframe
            width="560"
            height="315"
            className="youtube-embed"
            src="www.youtube.com/watch?v=U8eUlMcWp9I"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="content">
          <h4>Januarsending 2021 </h4>
          <iframe
            width="560"
            height="315"
            className="youtube-embed"
            src="https://www.youtube.com/embed/XO19J1eXmok"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="content">
          <h4>Julesending 2020 </h4>
          <iframe
            width="560"
            height="315"
            className="youtube-embed"
            src="https://www.youtube.com/embed/XO19J1eXmok"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="content">
          <h4>Retromessa live - PlayStation 2020</h4>
          <iframe
            width="560"
            height="315"
            className="youtube-embed"
            src="https://www.youtube.com/embed/zczXcJxXCRQ"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </ContentWrapper>
    <SponsorRow />
  </Layout>
)

export default DirektePage
