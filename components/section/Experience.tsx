
export default function Experience() {
  const experiences = [
    {
      company: "Flookup Capital Advisor Pvt Ltd",
      role: "MERN Stack Developer",
      duration: "Oct 2025 – Present",
      points: [
        "Developing full-stack web applications using MongoDB, Express, React, Node.js. , Next.js",
        "Implementing responsive Uls with Next.js , React and Tailwind CSS."
      ]
    },
    {
      company: "Delaine Technologies Pvt. Ltd. As a Intern",
      role: "Full Stack Developer",
      duration: "May 2025 – July 2025",
      points: [
        "Developed responsive websites using HTML, CSS, JavaScript, React.js.",
        "Collaborated with teams to integrate APIs and deliver features.",
        "Optimized web performance and ensured mobile-first design."
      ]
    }
  ];

  return (
    <section className="experience-wrapper scroll-mt-25" id="experience">
      <span className="section-tag">_JOURNEY</span>
      <h2 className="experience-title">Professional Experience</h2>

      <div className="timeline-container">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="exp-header">
              <div>
                <h3 className="company-name">{exp.company}</h3>
                <span className="job-role">{exp.role}</span>
              </div>
              <span className="exp-duration">{exp.duration}</span>
            </div>
            
            <ul className="exp-details">
              {exp.points.map((point, pIndex) => (
                <li key={pIndex}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}