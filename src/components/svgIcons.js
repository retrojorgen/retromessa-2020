import React from "react"
import PacmanIcon from "../images/icons/pacman.png"
import LiveIcon from "../images/icons/live.png"
import ScheduleIcon from "../images/icons/schedule.png"
import VippsIcon from "../images/icons/vipps.png"
import NextIcon from "../images/icons/2021.png"

const Pacman = () => <img src={PacmanIcon} className="menu-icon" />
const Live = () => <img src={LiveIcon} className="menu-icon" />
const Schedule = () => <img src={ScheduleIcon} className="menu-icon" />
const Vipps = () => <img src={VippsIcon} className="menu-icon" />
const Next = () => <img src={NextIcon} className="menu-icon" />
const SvgIcon = (props) => (
  <>
    {props.name == "pacman" && <Pacman />}
    {props.name == "live" && <Live />}
    {props.name == "schedule" && <Schedule />}
    {props.name == "vipps" && <Vipps />}
    {props.name == "next" && <Next />}
  </>
)

export default SvgIcon
