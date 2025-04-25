import './projects.css'; // Import your CSS file for styling
import  '../assets/tic tac toe.jpg'; // Import your image here
function ProjectsSection() {
    // Sample project data - replace with your own
    const projects = [
      {
        id: 1,
        title: "tic tac toe game",
        description: "tic tac toe game built with react js and it has a responsive ui for both mobile and desktop",
        image: "../assets/tic tac toe.jpg",
        tags: ["React", "html", "css"],
        demoLink: "https://tik-tak-toe-game-pzmr.vercel.app/",
        codeLink: "https://github.com/mo3az-web/tik-tak-toe__game"
      },
      {
        id: 2,
        title: "rafeeq ",
        description: "coming soon..",
        image: "/api/placeholder/600/400",
        tags: ["React", "css", "html"],
        demoLink: "#",
        codeLink: "#"
      },
    ];
  
    return (
      <section id="projects" className="projects-section">
        <div className="container">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">Here are some of my recent works</p>
          
          <div className="projects-grid">
            {projects.map(project => (
              <div className="project-card" key={project.id}>
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-links">
                    <a href={project.demoLink} target="_blank" className="project-link">Live Demo</a>
                    <a href={project.codeLink} target="_blank" className="project-link">View Code</a>
                  </div>
                </div>
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, index) => (
                      <span className="project-tag" key={index}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
export default ProjectsSection;  