import React, { Component } from 'react';
import Gallery from '../gallery/Gallery';
import './project.css';
import { Icon } from '@iconify/react';



class Project extends Component {
    constructor(props)
    {
        super(props);
    }
     
    render() { 
        return (
            <React.Fragment>
                <div className='mw__project'>
                    <div className='mw__project-header'>
                    <a href={this.props.href} target="_blank"><h2 style={this.props.color_style}>{this.props.name}<Icon icon="tabler:hand-click" color={this.props.color_style} /></h2></a>
                        <p>{this.props.description}</p>
                
                        <Gallery pictures={this.props.pictures} style={this.props.color_style}/>
                    </div>
                    <div className='mw__project-tools'>
                        {/* <h3>Tools used</h3> */}
                        <div className='mw__project-tools_list'>
                        {this.props.tools.map(tool => <ul style={this.props.bg_style}>{tool.Name}</ul>)}
                        </div>
                    </div>
                </div> 
            </React.Fragment>
        );
    }
}
 
export default Project;