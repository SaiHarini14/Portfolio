import "./Achievements.css";

export default function Achievements() {
  const awards = [
    { emoji: "🏆", text: "1st Prize – Project Expo (OLIVE), ICCCMIT 2024" },
    { emoji: "📄", text: "Paper Published – 'Virtual Mindscape: AR and VR in Mental Health Care', ICCCMIT 2024" },
    { emoji: "🥉", text: "3rd Place – Generative AI Competition (Open Weaver)" }
  ];

  const courses = [
    { emoji: "🎓", text: "Data Analytics (PayPal-ICT)" },
    { emoji: "🎓", text: "Generative AI (GUVI)" },
    { emoji: "🎓", text: "Cybersecurity (SkillVertex)" }
  ];

  return (
    <section className="achievements-section" id="achievements">
      <div className="achievements-container">
        <h2 className="achievements-title">Achievements</h2>

        <div className="achievements-grid">
          {awards.map((item, index) => (
            <div key={index} className="achievement-card">
              <p><span className="achievement-emoji">{item.emoji}</span> {item.text}</p>
            </div>
          ))}
        </div>

        <h3 className="courses-title">Courses</h3>
        <div className="achievements-grid">
          {courses.map((item, index) => (
            <div key={index} className="achievement-card">
              <p><span className="achievement-emoji">{item.emoji}</span> {item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
