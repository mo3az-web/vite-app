import React, { useState } from 'react';
import './projects.css'; // We'll define this CSS file below
import myProfile from '/src/assets/portfoliopic.jpg';
const ProjectSection = () => {
  // Sample project data - you would replace this with your actual projects
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'tic tac toe game',
      description: 'tic tac toe game made with react js responsive in poth phone and desktop.',
      image: './src/assets/tictactoe.jpg',
      tags: ['React', 'CSS', 'JavaScript'],
      link: 'https://tik-tak-toe-game-pzmr.vercel.app/',
      code: 'https://github.com/mo3az-web/tik-tak-toe__game'
    },
    {
      id: 2,
      title: 'Rafeeq',
      description: 'coming soon stay tuned :)',
      image: '/api/placeholder/400/300',
      tags:  ['React', 'CSS', 'JavaScript'],
      link: 'https://plumbing-project2.vercel.app/plumbing-project/',
      code: 'https://github.com/mo3az-web/vite-app'
    }
  ]);

  // Function to add a new project
  const addProject = (newProject) => {
    setProjects([...projects, { id: projects.length + 1, ...newProject }]);
  };

  return (
    <section className="project-section" id="projects">
      <div className="container">
        <h2 className="section-title1">My Projects</h2>
        <p className="section-description">
          Here are some of my recent projects. Each project showcases different skills and technologies.
        </p>
        
        <div className="projects-grid">
          {projects.map(project => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                 <img src={project.image} alt="there is no photo to preveiw now "  />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span className="project-tag" key={index}>{tag}</span>
                  ))}
                </div>
                
                <a href={project.link} className="links-button" target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
                <a href={project.code} className="links-button" target="_blank" rel="noopener noreferrer">
                  View code
                </a>
              </div>
            </div>
          ))}
        </div>
        {/* You could add a form here to add new projects dynamically */}
      </div>
    </section>
  );
};

export default ProjectSection;