export default function About() {
  return (
    <section className="about-section-wrapper scroll-mt-17" id="about">
      <div className="about-glow"></div>
      
      <div className="about-grid">
        {/* Left: Star Design Section */}
        <div className="star-hanging-container">
          <div className="hanging-line h-line-1">
            <span className="star-point">✦</span>
          </div>
          <div className="hanging-line h-line-2">
            <span className="star-point">✦</span>
          </div>
          <div className="hanging-line h-line-3">
            <span className="star-point">✦</span>
          </div>
        </div>

        {/* Right: Modern Content Card */}
        <div className="about-glass-card">
          <span className="about-tag">_INTRODUCTION</span>
          
          <p className="about-title">
            Coding with , 
            <span className="italic text-gray-400">Precision &</span>
            Purpose . 
          </p>

          <div className="about-text border-b border-gray-100">
            <p className="mb-6">
              Hello! I'm <span className="highlight-green">Ramesh Kumar</span>, a Mern Stack Developer 
              driven by the challenge of transforming complex ideas into seamless digital realities. 
              My approach blends <span className="italic">technical architecture</span> with aesthetic 
              finesse, ensuring every project is as performant as it is beautiful.
            </p>
            
            <p className="mb-8">
              Based in India, I specialize in the <span className="highlight-green">HTML , CSS , Next.js , React </span>, 
              focusing on scalable front-end experiences and robust back-end systems. Whether it's a 
              minimalist portfolio or a data-heavy application, I build with a focus on clean code 
              and user-centric design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}