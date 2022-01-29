import React from "react";
import "./SocialContact.css";
import { SocialData } from "../../Data/Social";

function SocialContact() {
  const data = SocialData;
  return <div className="social-contact">
    {
      data.map((item) => {
        return(
          <a href={item.link} key={item.platform} target="_blank" rel="noreferrer">
            <div className="social-icon-div">
              <img src={item.icon} alt="" className="social-icon" />
            </div>
          </a>
        )
      })
    }
  </div>;
}

export default SocialContact;
