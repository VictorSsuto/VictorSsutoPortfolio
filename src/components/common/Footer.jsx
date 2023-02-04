import React from "react"
import { social } from "../data/dummydata"
import icon1 from './icon1.png';
import icon2 from './icon2.png';
import icon3 from './icon3.png';
const Footer = () => {
  return (
    <>
      <footer>
      <div className="social-icon">
                <a href="https://www.linkedin.com/in/victor-ssuto-195643223/"><img src={icon1} alt="" /></a>
                <a href="https://www.instagram.com/victorssuto/"><img src={icon2} alt="" /></a>
                <a href="https://github.com/VictorSsuto"><img src={icon3} alt="" /></a>
       </div>
        {social.map((item) => (
          <>
            <i data-aos='zoom-in'>{item.icon}</i>
          </>
        ))}
        <p data-aos='zoom-in'>All Right Reserved 2023</p>
      </footer>
    </>
  )
}

export default Footer
