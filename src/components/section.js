import React from "react"
import styled from "styled-components"

import winBack1 from "../images/windows-back-1.png"
import winBack2 from "../images/windows-back-2.png"
import binarygif from "../images/gifs/binarybackground.gif"
import blobs from "../images/gifs/blobstiled.gif"
import heartsbackground from "../images/gifs/heartsbackground.gif"
import starsbackground from "../images/gifs/starsbackground.gif"
import rabbitsbackground from "../images/gifs/kaniner.gif"
import pawsbackground from "../images/gifs/pawsbackground.gif"
import vindieselbackground from "../images/gifs/vindieselbackground.gif"
import lightsbackground from "../images/gifs/lightsbackground.gif"
import colorbackground from "../images/gifs/farger.gif"
import threedbackground from "../images/gifs/3d.gif"

import kjellerstuaBasementGraphics from "../images/basement-graphics.png"

const colors = {
  red: `background-color: #d61e1f;`,
  yellow: `background-color: #e0df0a; color: black; text-shadow: none;`,
  green: `background-color: #00fa00; color: black; text-shadow: none;`,
  blue: `background-color: #0200fb;`,
  pink: `background-color: #e302e6;`,
  sand: `background-color: #d4d48d; color: black; text-shadow: none;`,
  teal: `background-color: #01fca2; color: black; text-shadow: none;`,
  lightblue: `background-color: #87e0ea; color: black; text-shadow: none;`,
  fuschia: `background-color: #e30297;`,
  brown: `background-color: #dc9056;`,
}

const ContentWrap = styled.div`
  max-width: 100%;
  width: 100%;
  background-color: white;
  color: black;
  position: relative;
  box-shadow: 10px 10px 0px rgba(0, 0, 1, 0.48);
  margin-bottom: 2rem;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transform: scale(1.03);
  }
  img {
    max-width: 100%;
  }
  @media (min-width: 1024px) {
    width: 960px;
    display: grid;
    grid-column-gap: 30px;
    grid-template-columns: 300px auto;
    &.single {
      display: block;
      width: 660px;
    }
  }

  .info-section {
    padding: 3.2rem 1rem 1rem;
    text-align: center;
    background: #eaeaea;
    @media (min-width: 1024px) {
      text-align: left;
    }
  }
  .menu-icon {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
  .info-section,
  .description-section {
    position: relative;
    z-index: 10;
    &:before {
      position: absolute;
      left: 0;
      top: 0;
      content: "";
      width: 100%;
      display: block;
      height: 4px;
      background: ${props =>
        props.lineBackground
          ? props.lineBackground
          : "linear-gradient(45deg,#6838b3,#322ca1)"};
      border-radius: 4px;
    }
  }
  a {
    color: black;
    font-weight: bold;
    text-decoration: underline;
    align-items: center;
    &:hover {
      display: inline-block;
      background: #c2c4ca;
    }
  }
  @media (min-width: 1024px) {
    padding: 0;
  }
  &.graphics-right {
    &:after {
      content: "";
      position: absolute;
      right: 0;
      bottom: 0;
      width: 400px;
      height: 140px;
      opacity: 0.4;
      background-size: auto 60%;
      background-position: bottom left;
      background-repeat: no-repeat;
      background-image: url(${kjellerstuaBasementGraphics});

      opacity: 0.2;
      z-index: 3;
      pointer-events: none;
      @media (min-width: 1024px) {
        height: 400px;
      }
    }
  }
  &.graphics-left {
    &:after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 600px;
      height: 140px;
      opacity: 0.4;
      background-size: cover;
      background-position: bottom right;
      background-repeat: no-repeat;
      background-image: url(${kjellerstuaBasementGraphics});

      opacity: 0.4;
      z-index: 3;
      pointer-events: none;
      @media (min-width: 1024px) {
        height: 330px;
        width: 550px;
      }
    }
  }
  .title {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 10px;
    font-size: 1.2rem;
    text-align: center;
    color: white;
    text-transform: uppercase;
    background-color: ${colors.blue};
    border-bottom: 2px solid black;
    z-index: 11;
  }
  .content-wrap {
  }
  .submit-button {
  }
  ul {
    list-style: none;
    padding: 0;
    li {
      font-size: 1.2rem;
      padding: 0.2rem 0;
      display: flex;
      align-items: center;
      .icon {
        display: inline-block;
        background: linear-gradient(45deg, #6838b3, #322ca1);
        border-radius: 50%;
        width: 30px;
        height: 30px;
        /* display: flex; */
        text-align: center;
        margin-right: 4px;
      }
    }
  }
  p {
    margin: 0;
    padding: 0;
    font-size: 1.2rem;
  }
  .description-section {
    padding: 3.2rem 1rem 1rem 1rem;

    p {
      line-height: 1.8rem;
      margin-bottom: 1rem;
      strong {
      }
    }
  }
  .standfirst {
    font-size: 1.2rem;
    line-height: 1.8rem;
    margin-bottom: 1.6rem;
    &:last-child {
    }
  }
  strong {
    font-weight: bold;
  }
  h3 {
    margin: 0;
    font-size: 2rem;
    margin-bottom: 0.5rem;
    @media (min-width: 1024px) {
      margin-bottom: 1rem;
      font-size: 2.5rem;
      padding: 0;
    }
  }
  .photo p {
    font-size: 0.94em !important;
    line-height: 1.2rem !important;
  }
  h4 {
    margin: 0;
    font-size: 2rem;
    margin-bottom: 0.5rem;
    @media (min-width: 1024px) {
      margin-bottom: 2rem;
      font-size: 2.5rem;
      padding: 0;
    }
  }
  .border-section {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border: 4px solid #d9dadf;
    z-index: 30;
    pointer-events: none;
    &:before {
      content: "";
      position: absolute;
      left: -4px;
      top: -4px;
      width: calc(100% + 4px);
      height: calc(100% + 4px);
      border: 2px solid black;
    }
  }

  ${props => {
    if (props.sectionStyle) {
      if (props.sectionStyle === "dark") {
        return `
          color: white;
          background: black;
          p {
            color: white;
            position: relative;
          }
          .info-section {
            background-color: #02064a
          }
        `
      }
    }
  }}

  ${props => {
    if (props.sectionColor) {
      return `
        .title {
          ${colors[props.sectionColor]}
        }
      `
    }
  }}
`

const SectionWrap = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 6rem 2rem;
  background-size: 10px;
  background: ${props =>
    props.background ? props.background : `url(${winBack1})`};
  position: relative;
  overflow-x: hidden;
  ${props => {
    if (props.sectionStyle) {
      if (props.sectionStyle === "sikksakk") {
        return `
          background: url(${winBack2});
        `
      }
      if (props.sectionStyle === "heartsbackground") {
        return `
          background: url(${heartsbackground});
        `
      }
      if (props.sectionStyle === "starsbackground") {
        return `
          background: url(${starsbackground});
        `
      }
      if (props.sectionStyle === "pawsbackground") {
        return `
          background: url(${pawsbackground});
        `
      }
      if (props.sectionStyle === "lightsbackground") {
        return `
          background: url(${lightsbackground});
        `
      }
      if (props.sectionStyle === "vindieselbackground") {
        return `
          background: url(${vindieselbackground});
        `
      }
      if (props.sectionStyle === "rabbitsbackground") {
        return `
          background: url(${rabbitsbackground});
        `
      }
      if (props.sectionStyle === "blobs") {
        return `
          background: url(${blobs});
        `
      }
      if (props.sectionStyle === "binarygif") {
        return `
          background: url(${binarygif});
        `
      }
      if (props.sectionStyle === "color") {
        return `
          background: url(${colorbackground});
        `
      }
      if (props.sectionStyle === "threed") {
        return `
          background: url(${threedbackground});
        `
      }
    }
  }}
  h3 {
    font-size: 3em;
    margin: 0 0 1em 0;
    text-transform: uppercase;
    color: white;
    text-shadow: 1px 4px 0px black;
    background-color: blue;
    padding: 20px;
    box-shadow: 10px 10px 0px rgba(0, 0, 1, 0.48);
    transition: all 0.2s ease-in-out;
    &:hover {
      transform: scale(1.03);
    }
  }
  ${props => {
    if (props.titleStyle) {
      return `
      h3 {
        ${colors[props.titleStyle]}
      }
          
        `
    }
  }}
`

const GuestPortraitWrapper = styled.div`
  display: flex;
  justify-content: center;
  img {
    max-width: 100%;
  }
`

const Section = props => {
  return (
    <ContentWrap
      sectionStyle={props.sectionStyle}
      sectionColor={props.sectionColor}
    >
      <div className="border-section" />
      {props.children}
    </ContentWrap>
  )
}

const SingleSection = props => {
  return (
    <ContentWrap
      sectionStyle={props.sectionStyle}
      sectionColor={props.sectionColor}
      className="single"
    >
      <div className="border-section" />
      {props.children}
    </ContentWrap>
  )
}

const SectionWrapper = props => {
  return <SectionWrap>{props.children}</SectionWrap>
}

export default Section
export { SingleSection, SectionWrapper, GuestPortraitWrapper }
