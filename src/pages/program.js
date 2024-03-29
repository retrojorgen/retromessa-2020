import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styled from "styled-components"

import Guest from "../components/guestsListing"
import program from "../json/program.json"

const ContentWrapper = styled.div`
  width: 1200px;
  max-width: 100%;
  padding: 20px;
  margin: 0 auto 40px auto;
  @media (min-width: 1024px) {
    margin: 80px auto 40px auto;
  }
  @media (min-width: 1024px) {
    .side-by-side {
      display: flex;
      flex-wrap: wrap;
      .content {
        width: 50%;
        padding: 20px;
      }
    }
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
  }
  .schedule {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    border-collapse: collapse;
    th {
      text-align: left;
    }
    th,
    td {
      padding: 10px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    }
    tr {
      &:nth-child(odd) {
        td {
          background: rgba(0, 0, 0, 0.1);
        }
      }
    }

    .event-name {
      font-weight: bold;
    }
  }
`

function getTime(dateObject) {
  let hours = dateObject.getHours().toString().padStart(2, "0")
  let minutes = dateObject.getMinutes().toString().padStart(2, "0")
  return `${hours}:${minutes}`
}

program.map((event) => {
  event.date = new Date(event.date)
  event.events.map((date) => {
    date.startTime = new Date(date.startTime)
    date.endTime = new Date(date.endTime)
    date.startTimeFormatted = getTime(date.startTime)
    date.status = "upcoming"
    return date
  })
  return event
})

const IndexPage = () => (
  <Layout>
    <SEO title="Program for Retromessa 2020 live" />
    <ContentWrapper>
      <h2>Neste program</h2>
      <h3>Live julesending 27.12.2020 (kommer snart)</h3>
      <h2>Tidligere program</h2>
      <h3>Retromessa 2020</h3>
      <div className="side-by-side">
        {program.map((day, key) => (
          <div key={key} className="content">
            <h4>{day.name}</h4>
            <table className="schedule">
              <thead>
                <tr>
                  <th>Tid</th>
                  <th>Navn</th>
                </tr>
              </thead>
              {day.events.map((event) => (
                <tr>
                  <td className="event-time">{event.startTimeFormatted}</td>
                  <td className="event-name">{event.name}</td>
                </tr>
              ))}
            </table>
          </div>
        ))}
      </div>
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
