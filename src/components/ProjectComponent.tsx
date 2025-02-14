import {Project} from "../objects/Project.ts";
import React from "react";

interface ProjectProps {
    project : Project;
}
export class ProjectComponent extends React.Component<ProjectProps> {
    constructor(props : ProjectProps) {
        super(props);
    }

    render() {
        switch (this.props.project.isReleased) {
            case true:
                return (
                    <>
                        <li key={this.props.project.id}>
                            <img src={this.props.project.iconPath} alt={this.props.project.name + " Logo"}/>
                            <div className="prj-info-holder">
                                <h3>{this.props.project.name}</h3>
                                <ul className="prj-list">
                                    <li>Development Period: {this.props.project.devPeriod}</li>
                                    <li>Release Date: {this.props.project.releaseDate}</li>
                                    <li>Platform(s): {this.props.project.platforms}</li>
                                </ul>
                                <p>{this.props.project.shortDescription}</p>
                            </div>
                        </li>
                    </>
                );
            case false:
                return (
                    <>
                        <li key={this.props.project.id}>
                            <img src={this.props.project.iconPath} alt={this.props.project.name + " Logo"}/>
                            <div className="prj-info-holder">
                                <h3>{this.props.project.name}</h3>
                                <ul className="prj-list">
                                    <li>Status: {this.props.project.status}</li>
                                    <li>Estimated Release: {this.props.project.releaseDate}</li>
                                    <li>Platform(s): {this.props.project.platforms}</li>
                                </ul>
                                <p>{this.props.project.shortDescription}</p>
                            </div>
                        </li>
                    </>
                );
        }
    }
}