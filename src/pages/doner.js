import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

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

const Iframe = styled.iframe`
  height: 1100px;
  width: 100%;
  border: 0;
  padding: 0;
  margin: 0;
`

const DonerPage = () => (
  <Layout>
    <SEO title="Home" />
    <Iframe src="https://donationcenter.live/vipps/index.php?merchant=614628&id=175&fbclid=IwAR1GfrmUakPYy5VyBfDvqWfX8sMiIcgQZstUbqLQPSJbYDa6m4JwK-ADiBQ" />
  </Layout>
)

export default DonerPage
