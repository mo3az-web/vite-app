import React, { useState, useEffect } from 'react';
import './skills.css'; // We'll define this CSS file next
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3 } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
const ReactLogo = () => (
<FaReact />
);

const NextLogo = () => (
    <SiNextdotjs />
);

const HtmlLogo = () => (
    <AiFillHtml5 />
);

const CssLogo = () => (
    <FaCss3 />
);

const JavaScriptLogo = () => (
    <FaJs />
);

const Skills = () => {
  const skills = [
    { 
      name: "React JS", 
      level: 85, 
      logo: ReactLogo,
      color: "#61DAFB"
    },
    { 
      name: "Next JS", 
      level: 80, 
      logo: NextLogo,
      color: "#000000" 
    },
    { 
      name: "HTML", 
      level: 100, 
      logo: HtmlLogo,
      color: "#E34F26" 
    },
    { 
      name: "CSS", 
      level: 90, 
      logo: CssLogo,
      color: "#264DE4" 
    },
    { 
      name: "JavaScript", 
      level: 85, 
      logo: JavaScriptLogo,
      color: "#F7DF1E" 
    }
  ];

  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [inViewSkills, setInViewSkills] = useState({});

  // Trigger animation when component mounts
  useEffect(() => {
    setIsVisible(true);
    
    // Auto-animate each skill in sequence
    const interval = setInterval(() => {
      setActiveIndex(prev => {
        if (prev === null || prev >= skills.length - 1) {
          return 0;
        }
        return prev + 1;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Function to handle intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const index = parseInt(entry.target.dataset.index);
          if (entry.isIntersecting) {
            setInViewSkills(prev => ({ ...prev, [index]: true }));
          }
        });
      },
      { threshold: 0.3 }
    );

    // Add observer to all skill elements
    document.querySelectorAll('.skill-item').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills-section">
      <div className="container">
        <h2 className={`section-title ${isVisible ? 'visible' : ''}`}>
          My Skills
        </h2>
        <div className={`section-divider ${isVisible ? 'visible' : ''}`}></div>
        
        <div className="skills-grid">
          {skills.map((skill, index) => {
            const LogoComponent = skill.logo;
            return (
              <div 
                key={index}
                data-index={index}
                className={`skill-item ${isVisible ? 'visible' : ''}`}
                style={{ 
                  transitionDelay: `${index * 200}ms`,
                  boxShadow: activeIndex === index ? `0 0 20px ${skill.color}` : 'none'
                }}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <div className="skill-content">
                  <div className="skill-header">
                    <div 
                      className="logo-container"
                      style={{ 
                        backgroundColor: `${skill.color}20`,
                        transform: activeIndex === index ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0deg)'
                      }}
                    >
                      <div className="logo" style={{ color: skill.color }}>
                        <LogoComponent />
                      </div>
                    </div>
                    <h3 className="skill-name">{skill.name}</h3>
                  </div>
                  
                  <div className="progress-container">
                    <div 
                      className="progress-bar"
                      style={{ 
                        width: activeIndex === index || inViewSkills[index] ? `${skill.level}%` : '0%',
                        backgroundColor: skill.color
                      }}
                    >
                      {(activeIndex === index) && (
                        <>
                          <div className="progress-pulse" style={{ backgroundColor: skill.color }}></div>
                          <div className="progress-shimmer"></div>
                        </>
                      )}
                    </div>
                  </div>
                  
                  <div className="skill-footer">
                    <span className="proficiency-label">Proficiency</span>
                    <span 
                      className={`proficiency-value ${activeIndex === index ? 'active' : ''}`}
                      style={{ color: skill.color }}
                    >
                      {skill.level}%
                    </span>
                  </div>
                </div>
                
                <div 
                  className="skill-indicator"
                  style={{ 
                    width: activeIndex === index ? '100%' : '0%',
                    backgroundColor: skill.color,
                    marginLeft: activeIndex === index ? '0' : '100%'
                  }}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;