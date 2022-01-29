import React from 'react';
import Separator from '../../Common/Seperator/Separator';
import { WorkData } from '../../Data/Work';
import './Work.css';
import WorkCard from './WorkCard';

function Work() {
  const data = WorkData;
  return <div className='work'>
    <Separator />
    <label className="section-title">Work</label>
    <div className="work-list">
      {
        data.map((item) => {
          return(
            <WorkCard work={item}/>
          )
        })
      }
    </div>
  </div>;
}

export default Work;
