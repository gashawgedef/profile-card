import React from "react";

function Skill(props) {
  return(
   <div className="skill" style={{backgroundColor:props.color}}>
    <span>{props.skill} {props.emoji}</span>
    
    </div>
    )
}

export default Skill;
