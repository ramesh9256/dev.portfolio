export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Mastery",
      list: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"]
    },
    {
      title: "Backend & Cloud",
      list: ["Node.js", "Express.js", "MongoDB", "Firebase", "REST APIs"]
    },
    {
      title: "Programming",
      list: ["JavaScript (ES6)", "TypeScript", "C", "C++"]
    },
    {
      title: "Dev Tools",
      list: ["Git", "GitHub", "Postman", "VS Code", "Vercel"]
    }
  ];

  return (
    <section className="skills-master scroll-mt-25" id="skills">
      <div className="skills-layout">
        
        {/* Left Side: Star & Track Design */}
        <div className="skills-left-design">
          <div className="vertical-track">
            <span className="floating-star star-1">✦</span>
            <span className="floating-star star-2">✦</span>
            <span className="floating-star star-3">✦</span>
          </div>
        </div>

        {/* Right Side: Skills Content */}
        <div className="skills-right-content">
          <span className="section-tag">_TECH_STACK</span>
          <h2>My Expertise</h2>
          
          <div className="skills-grid">
            {skillCategories.map((cat, index) => (
              <div key={index} className="skill-box">
                <h3>{cat.title}</h3>
                <div className="skill-list">
                  {cat.list.map((skill, i) => (
                    <span key={i} className="skill-item">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}