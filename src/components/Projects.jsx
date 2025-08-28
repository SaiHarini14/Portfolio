import "./Projects.css";

export default function Projects() {
  const projects = [
    {
      title: "BITES & BREWS  – Café & Restaurant Experience Tracker",
      description:
        "Collaborated on a full-stack web app to log café and restaurant visits, tracking food, mood, and personal experiences. Built the backend with Node.js, Express.js, and MongoDB, including user authentication, image uploads, and review management.",
      tech: "MERN Stack",
      deployed: false
    },
    {
      title: "TRANQUIL – A Human Guidance Application",
      description:
        "A mobile app to help users track, manage, and improve mental health through guided self-care tools. Features include personalized assessments, daily reminders, journaling, habit tracking, calming exercises, and geolocation features.",
      tech: "React Native, Supabase, Firebase (Expo for deployment)",
      deployed: false
    },
    {
      title: "OLIVE – Personal Favorites & Profile Manager",
      description:
        "A web-based CRUD application using Laravel to let users store and manage their personal profiles and categorized favorite content (music, movies, shows). Built backend functionality to handle user data and organize favorites, centralizing preferred content for easier access.",
      tech: "Laravel, PHP, MySQL",
      deployed: false
    },
    {
      title: "SUBSCRIPTION TRACKER APP",
      description:
        "Building a full-stack web app to help users track and manage active subscriptions across platforms. Backend includes secure user authentication and subscription CRUD operations using Node.js, Express.js, and MongoDB. Frontend development with React.js focuses on dashboard design, filtering, and cost tracking. Planned features include renewal reminders and a responsive UI.",
      tech: "MERN Stack",
      deployed: false
    }

    // add more projects here
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <h2 className="projects-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((proj, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3>{proj.title}</h3>
                <span className={`deploy-status ${proj.deployed ? "live" : "offline"}`}>
                  {proj.deployed ? "Live" : "Offline"}
                </span>
              </div>
              <p>{proj.description}</p>
              <p className="tech"><strong>Tech:</strong> {proj.tech}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
