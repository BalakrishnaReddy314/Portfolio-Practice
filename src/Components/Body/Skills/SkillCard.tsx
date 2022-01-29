import React from 'react';
import './SkillCard.css';

interface ISkill {
    name: string;
    icon: string;
}

interface ISKillProps {
    skill: ISkill;
}

function SkillCard({skill}: ISKillProps) {
  return(
      <div className='skill-card'>
          <div dangerouslySetInnerHTML={{__html: skill.icon}} className='skill-icon'></div>
          <label className="skill-name">{skill.name}</label>
      </div>
  )
}

export default SkillCard;
