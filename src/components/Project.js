import React, { Component } from 'react';
import '../assets/App.css';

class Project extends Component {
    render() {
        const allSkills = this.props.skills.map(function (skill, index){
            return (
                <span key={index}>{skill}</span>
            );
        });
        return (
            <li className="itemProject clearfix">
                <span className="numberProject">{this.props.position}</span>
                <div className="imageProject rectangleProject">
                    {
                        this.props.href !== "" &&
                        <a href={this.props.href} target="_blank" className="seeProject" rel="noopener noreferrer">
                            <div className="imageProjectName">{this.props.name}</div>
                            <div className="backgroundFl"></div>
                        </a>
                    }
                    {
                        this.props.href === "" &&
                        <div className="seeProject--nolink">
                            <div className="imageProjectName">{this.props.name}</div>
                            <div className="backgroundFl"></div>
                        </div>
                    }
                </div>
                <div className="descriptionProject rectangleProject">
                    <div className="innerProject">
                        <div className="nameProject">{this.props.title}</div>
                        <div className="etiquetteProject">
                            {allSkills}
                        </div>
                    </div>
                </div>
            </li>
        );
    }
}

export default Project;
