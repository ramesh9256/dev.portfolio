import { FiGithub, FiExternalLink } from 'react-icons/fi';

export default function Projects() {
  const myProjects = [
    {
      name: "PMS Dashboard - {under process}",
      desc: "Portfolio Management System for financial analytics.",
      tech: ["Next.js", "TypeScript", "Chart.js"],
      github: "https://github.com/ramesh9256/pms-dashboard",
      live: "#"
    },
    {
      name: "SEBI Scraper",
      desc: "Full-stack scraper extracts SEBI corporate filings using Playwright/Node.js with Next.js dashboard for sorted financial data visualization.",
      tech: ["Node.js", "Puppeteer"],
      github: "https://github.com/ramesh9256/Sebi-scraper-",
      live: "#"
    },
    {
      name: "Flookup Web",
      desc: "experts provide a wide range of financial services, including financial planning, investment management, tax advisory, and more.",
      tech: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/ramesh9256/Flookup.sg",
      live: "https://flookupsg.vercel.app/"
    },
    {
      name: "Job App Portal",
      desc: "Full-stack job tracking system with user dashboards.",
      tech: ["React", "Express", "MongoDB"],
      github: "https://github.com/ramesh9256/Job-App",
      live: "https://job-app-alpha-mocha.vercel.app/"
    },
    {
      name: "Ayurveda Woad",
      desc: "A website designed for Ayurveda enthusiasts. It showcases a variety of Ayurvedic treatments, herbal remedies, and an intuitive interface for easy navigation.",
      tech: ["React", "Tailwind", "Framer"],
      github: "https://github.com/ramesh9256/Ayurveda",
      live: "https://ayurveda-woad.vercel.app/"
    },
    {
      name: "Vyapar Mandal - {for practice}",
      desc: "A fully functional Vyapar Mandal website built using React and Tailwind CSS. It features member registration, dynamic announcements, and responsive business listings to showcase local enterprises.",
      tech: ["Next.js", "Firebase", "Tailwind"],
      github: "https://github.com/ramesh9256/Vyaapar-Mandal",
      live: "https://vyaapar-mandal.vercel.app/"
    }

  ];

  return (
    <section className="projects-section scroll-mt-25" id="projects">
      <div className="projects-header-wrapper">
        <div className="hanging-star-line">
          <span className="star-icon">✦</span>
        </div>
        <div>
          <span className="section-tag">_PORTFOLIO</span>
          <h2 className="experience-title">Projects</h2>
        </div>
      </div>

      <div className="projects-grid">
        {myProjects.map((p, index) => (
          <div key={index} className="project-card-small">
            <div>
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
              <div className="tech-stack-row">
                {p.tech.map((t, i) => (
                  <span key={i} className="tech-pill-small">{t}</span>
                ))}
              </div>
            </div>

            <div className="project-action-links">
              <a href={p.github} target="_blank" className="action-link">
                <FiGithub size={16} /> Code
              </a>
              {p.live !== "#" && (
                <a href={p.live} target="_blank" className="action-link">
                  <FiExternalLink size={16} /> Live
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}