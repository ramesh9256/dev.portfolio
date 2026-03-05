
export default function Hero() {
    return (
        <section className="hero-container scroll-mt-18">
            {/* Left Side: Code Terminal */}
            <div className="hero-left">
                <div className="flex gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div> {/* red dot button decoration */}
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div> {/* yellow dot button decoration */}
                    <div className="w-3 h-3 rounded-full bg-green-500"></div> {/* green dot button decoration */}
                </div>

                <code className="code-block">
                    <span className="code-line comment">Initializing personal growth...</span>
                    <span className="code-line">
                        <span className="keyword">import</span> time <span className="keyword">from</span> <span className="string">'life'</span>;
                    </span>
                    <span className="code-line">
                        time.<span className="method">heal</span>();
                    </span>
                    <span className="code-line mt-4">
                        <span className="keyword">while</span> (alive) {'{'}
                    </span>
                    <span className="code-line ml-4">
                        me.<span className="method">code</span>();
                    </span>
                    <span className="code-line ml-4">
                        me.<span className="method">improve</span>();
                    </span>
                    <span className="code-line">{'}'}</span>
                </code>
            </div>

            {/* Right Side: Content */}
            <div className="hero-right">
                <p className="text-[#004d2c] font-bold tracking-widest uppercase text-sm mb-4">
                    _Mern Stack Developer {/* Developer identification */}
                </p>
                <p>
                    Hi, I'm Ramesh Kumar, a passionate MERN Stack Developer dedicated to crafting seamless digital experiences. With expertise in Next.js and a commitment to clean code, I specialize in building high-performance applications that blend innovative design with robust functionality. Let's create something amazing together! {/* Introduction and expertise */}
                </p>
                <div className="flex gap-4">
                    <a href="#experience" className="get-started-btn">View My Work</a> {/* Call-to-action button */}
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#004d2c] font-semibold hover:underline flex items-center gap-1"
                    >
                        _Resume
                    </a>
                </div>
            </div>
        </section>
    );
}