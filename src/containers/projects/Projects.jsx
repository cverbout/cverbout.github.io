import React, {Component} from 'react';
import "./projects.css";
import {Project} from '../../components';
import Character1 from '../../assets/character-1.png';
import Enemy1 from '../../assets/enemy-1.png';
import Creature1 from '../../assets/creature-1.png';
import Character2 from '../../assets/character-2.png';
import Enemy2 from '../../assets/enemy-2.png';
import Creature2 from '../../assets/creature-2.png';
import Backend1 from '../../assets/backend-img-1.jpg';
import Backend2 from '../../assets/backend-img-2.jpg';


class Projects extends Component {

  state = { 
    project1: [
        {id: 1, url: Backend1},
        {id: 2, url: Character1},
        {id: 3, url: Enemy1},
        {id: 4, url: Creature1},
        {id: 5, url: Character2},
        {id: 6, url: Enemy2},
        {id: 7, url: Creature2}
    ],

    tools1: [
      {Name: "JSX"},
      {Name: "React"},
      {Name: "CSS"},
      {Name: "HTML"},
      {Name: "VSCode"},
      {Name: "Node JS"},
      {Name: "NPM"}
  ],

  tools2: [
    {Name: "Unity"},
    {Name: "C#"},
    {Name: "VStudio"},
    {Name: "Pixel Art"}
  ],

  tools3: [
    {Name: "VStudio"},
    {Name: "C#"},
    {Name: "SQL"},
    {Name: "ASP.NET"},
    {Name: "JSX"},
    {Name: "React"},
    {Name: "CSS"},
    {Name: "HTML"}
  ]
 }; 

 render() { 
  return (
      <React.Fragment>
        <div className='mw__projects' id='prj'>
          <div>
            <h1>Projects</h1>
            
          </div>
          <div>
          <Project  
          name={"Personal Page(This)"}
          href={"https://commonpaths.godaddysites.com/"}
          description={"Using a combination for Jsx React, HTML, CSS I wanted to create a webpage of majorly my own effort. Obviously there are many features out there these days that can be taken directly and compiled to make a carbon copy of every other webpage template. I chose to make this more personal, and maybe rougher on the edges, in pursuit of a better understanding of the innards of web development."}
          pictures = {this.state.project1}
          tools = {this.state.tools1}
          color_style = {{color: 'rgb(69, 113, 167)'}}
          bg_style = {{background: 'rgb(69, 113, 167)'}}
          />
          <hr className='mw__projects-divider'></hr>
          <Project  
          name={"RoadHero"}
          href={"https://unity.com/"}
          description={"My first attempt at creating a game. RoadHero is a 2d side scroller that shovels a slew of enemies with varying design, speed, and health each round. You, along with your trusty Droggo, must relentlesssly fling fireballs to hold back the onslaught for 14 rounds before Facing the horde leader on round 15. I designed the charachters myself and made use of the Unity Asset Store for other features. "}
          pictures = {this.state.project1}
          tools = {this.state.tools2}
          color_style = {{color: 'rgb(72, 150, 228)'}}
          bg_style = {{background: 'rgb(72, 150, 228)'}}
          />
          <hr className='mw__projects-divider'></hr>
          <Project  
          name={"Snaggle"}
          description={"Snaggle is a full stack web application that provides bug tracking services. The backend is a combination ASP.NET and SQL while the front-end was made with React."}
          pictures = {this.state.project1}
          tools = {this.state.tools3}
          color_style = {{color: '#2BB4D3'}}
          bg_style = {{background: '#2BB4D3'}}
          />
          </div>
        </div>
      </React.Fragment>
      
  );
}
}

export default Projects