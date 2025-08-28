import "./ProfessionalExperience.css";

export default function ProfessionalExperience() {
  const experiences = [
    {
      title: "Backend Developer Intern",
      company: "@Coffee Inc",
      duration: "Work Mode: On-site",
      description:
        "Contributed to the company’s internal system by developing a full backend module using Laravel. Designed database schema, implemented backend logic, and built RESTful APIs for seamless data handling. Collaborated with the team to integrate the module into the broader system, following best practices in version control, MVC architecture, and security optimization.",
      achievements: [
        "Developed a full backend module using Laravel",
        "Optimized database schema and queries",
        "Gained practical experience with MVC architecture and security best practices"
      ],
      deployed: true // change to true if applicable
    }
    // Add more experiences here if needed
  ];

  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">
        <h2 className="experience-title">Work Experience</h2>
        <div className="experience-grid">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="experience-header">
                <h3>{exp.title}</h3>
                <span className="company"><strong>{exp.company}</strong></span>
                <span className={`deploy-status ${exp.deployed ? "live" : "offline"}`}>
                    {exp.deployed ? "Live" : "Offline"}
                    </span>
                </div>


              <p className="duration">{exp.duration}</p>
              <p className="description">{exp.description}</p>
              {exp.achievements && (
                <ul className="achievements">
                  {exp.achievements.map((ach, idx) => (
                    <li key={idx}>{ach}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
