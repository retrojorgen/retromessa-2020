import React from "react"
import PacmanIcon from "../images/icons/pacman.png"
import LiveIcon from "../images/icons/live.png"
import ScheduleIcon from "../images/icons/schedule.png"
import VippsIcon from "../images/icons/vipps.png"
const Pacman = () => <img src={PacmanIcon} className="menu-icon" />
const Live = () => <img src={LiveIcon} className="menu-icon" />
const Schedule = () => <img src={ScheduleIcon} className="menu-icon" />
const Vipps = () => <img src={VippsIcon} className="menu-icon" />
const SvgIcon = props => (
  <>
    {props.name == "pacman" && <Pacman />}
    {props.name == "live" && <Live />}
    {props.name == "schedule" && <Schedule />}
    {props.name == "vipps" && <Vipps />}
  </>
)

export default SvgIcon
