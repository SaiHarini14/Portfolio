import "./Skills.css";

export default function Skills() {
  const skills = {
    "Languages & Web": [
      { name: "Java", level: 85 },
      { name: "Python", level: 80 },
      { name: "C", level: 70 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 75 },
      { name: "HTML", level: 90 },
      { name: "CSS", level: 80 }
    ],
    "Frameworks & Stacks": [
      { name: "MERN", level: 85 },
      { name: "React", level: 90 },
      { name: "Laravel", level: 75 },
      { name: "Node.js", level: 85 },
      { name: "REST API", level: 80 },
      { name: "React Native", level: 75 }
    ],
    "Database & Tools": [
      { name: "MySQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "Oracle", level: 70 },
      { name: "Git", level: 90 },
      { name: "Docker", level: 70 },
      { name: "Firebase", level: 70 },
      { name: "AWS", level: 70 },
      { name: "Expo", level: 70 }
    ],
    "Data & Cloud": [
      { name: "NumPy", level: 80 },
      { name: "Pandas", level: 80 },
      { name: "Scikit-learn", level: 75 },
      { name: "Matplotlib", level: 80 },
      { name: "Tableau", level: 70 },
      { name: "EC2", level: 70 },
      { name: "S3", level: 70 }
    ]
  };

  const softSkills = ["Team Player", "Leadership", "Collaboration", "Problem Solving", "Adaptability", "Critical Thinking","Communication", "Resilient"];

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <h2 className="skills-title">Technical Skills</h2>
        <div className="skills-grid">
          {Object.keys(skills).map((category) => (
            <div key={category} className="skills-card">
              <h3>{category}</h3>
              {skills[category].map((skill) => (
                <div key={skill.name} className="skill-bar">
                  <span>{skill.name}</span>
                  <div className="bar-container">
                    <div
                      className="bar-fill"
                      style={{ width: `${skill.level}%` }}
                    >
                      <span className="percent">{skill.level}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Soft Skills Pills */}
        <h3 className="softskills-title">Soft Skills</h3>
        <div className="softskills-container">
          {softSkills.map((skill, index) => (
            <span key={index} className="softskill-pill">{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
