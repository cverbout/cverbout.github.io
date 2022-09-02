import React from 'react';
import './skills.css';
import { Icon } from '@iconify/react';

const Skills = () => {
  return (
    <div className='mw__skills'>
      {/* <div className='mw__skills-title'>
        <h1>Skills</h1>
        <hr className='mw__skills-divider'></hr>
      </div> */}
      <div className='mw__skills-container'>
        <div>
          <Icon className= 'mw__skills-icon-1' icon="vscode-icons:file-type-html" width="64" height="64" />
        </div>
        <div>
        <Icon className= 'mw__skills-icon-2' icon="vscode-icons:file-type-css" width="64" height="64" />
        </div>
        <div>
          <Icon className= 'mw__skills-icon-3' icon="vscode-icons:file-type-reactjs" width="64" height="64" />
        </div>
        <div>
          <Icon className= 'mw__skills-icon-4' icon="cib:unity" width="64" height="64" />
        </div>
        <div>
          <Icon className= 'mw__skills-icon-5' icon="teenyicons:c-sharp-solid" color="purple" width="64" height="64" />
        </div>
        <div>
          <Icon className= 'mw__skills-icon-6' icon="bxl:c-plus-plus" color="blue" width="64" height="64" />
        </div>
        <div>
          <Icon className= 'mw__skills-icon-7' icon="logos:python" color="blue" width="64" height="64" />
        </div>
        <div>
          <Icon className= 'mw__skills-icon-8' icon="cib:dot-net" color="#301" width="64" height="64" />
        </div>
        <div>
          <Icon className= 'mw__skills-icon-9' icon="logos:r-lang" color="#301" width="64" height="64" />
        </div>
        <div>
          <Icon className= 'mw__skills-icon-10' icon="cib:qgis" color="limegreen" width="64" height="64" />
        </div>
        <div>
          <Icon className= 'mw__skills-icon-11' icon="vscode-icons:file-type-js-official" color="limegreen" width="64" height="64" />
        </div>
      </div>
    </div>
  )
}

export default Skills