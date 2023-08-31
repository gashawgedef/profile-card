import React, { Component } from 'react';
import Skill from './Skill';

 class Skillset extends Component {
  
  render() {
    return (
      <div className='skill-list'>
       <Skill skill='React' emoji='💪' color='#123456'/>
       <Skill skill='Angular' emoji='🏆'  color='orangered'/>
       <Skill skill='Next Js' emoji='💪'  color='yellow'/>
       <Skill skill='Cakephp' emoji='🏆'  color='orange'/>
       <Skill skill='Kubernates Services' emoji='💪'  color='cyan'/>
       <Skill skill='Java' emoji='🏆'  color='violet'/>
   
      </div>
    )
  }
}

export default Skillset
