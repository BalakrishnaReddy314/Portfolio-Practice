import React from "react";
import "./WorkCard.css";

interface IWork {
  company: string;
  designation: string;
  dateJoining: string;
  dateEnd: string;
  companyLogo: string;
  Work: string;
}

interface IWorkCardProps {
    work: IWork;
}

function WorkCard({work}: IWorkCardProps) {
  return <div className="work-card">
      <img src={work.companyLogo} alt="" className="work-logo" />
      <div className="work-info">
          <label className="company-name">{work.company}</label>
          <div className="work-dates">
              <label>{work.dateJoining}</label> to <label>{work.dateEnd}</label>
          </div>
          <div className="work-desc">
              <p>{work.Work}</p>
          </div>
      </div>
  </div>;
}

export default WorkCard;
