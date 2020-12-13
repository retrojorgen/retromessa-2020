import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import paypalLogo from "../images/paypal-logo.svg"

const ContentWrapper = styled.div`
  width: 1200px;
  max-width: 100%;
  padding: 0;
  margin: 0 auto 40px auto;
  @media (min-width: 1024px) {
    padding: 20px;
    margin: 80px auto 40px auto;
  }
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

const PaypalSponsor = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(90deg, #004395, #0088ce);
  color: white;
  margin-bottom: 20px;

  padding: 20px;
  img {
    max-width: 100%;
    display: block;
    margin: 0 auto;
  }
  span {
    display: block;
    border-radius: 20px;
    background-color: white;
    color: #004395;
    text-transform: uppercase;
    font-size: 0.9rem;
    padding: 10px 20px;
    text-align: center;
    margin-top: 20px;
    @media (min-width: 1024px) {
      display: inline-block;
    }
  }
`

const DonerPage = () => (
  <Layout>
    <SEO title="Home" />
    <ContentWrapper>
      <PaypalSponsor
        href="https://streamelements.com/retromessa/tip"
        target="new_window"
      >
        <img src={paypalLogo} />
        <span>Support us with Paypal</span>
      </PaypalSponsor>
      <Iframe src="https://donationcenter.live/vipps/index.php?merchant=614628&id=175&fbclid=IwAR1GfrmUakPYy5VyBfDvqWfX8sMiIcgQZstUbqLQPSJbYDa6m4JwK-ADiBQ" />
    </ContentWrapper>
  </Layout>
)

export default DonerPage
