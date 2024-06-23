import React from 'react';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

const Projects = () => (
  <section id="projects">
    <h2>My Projects</h2>
    <div className="projects-container">
      <ProjectCard title="Project 1" description="Description for Project 1" link="http://example.com" />
      <ProjectCard title="Project 2" description="Description for Project 2" link="http://example.com" />
      {/* Add more ProjectCard components as needed */}
    </div>
  </section>
);

export default Projects;
