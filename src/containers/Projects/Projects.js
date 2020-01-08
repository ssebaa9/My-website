import React, { Component } from 'react';
import Project from './Project/Project';
import { projectsData } from '../../data/projectsData';

class Projects extends Component {

  render() {

    const projects = projectsData.map(project =>
      <Project key={project.title} title={project.title} describe={project.describe} technologies={project.technologies} images={project.images} link={project.githubLink} />
    )

    return (
      <div className="projects">
        <h2 className="projects__title">Projects</h2>
        {projects.reverse()}
      </div>
    );
  }
}

export default Projects;