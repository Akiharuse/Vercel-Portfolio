const projects = [
  {
    number: "01",
    name: "A calmer way to plan",
    kind: "PRODUCT DESIGN · CONCEPT",
    description: "A clearer daily planning experience, designed to make room for the work that matters.",
    color: "peach",
    mark: "◌",
    tag: "Product design",
  },
  {
    number: "02",
    name: "Fieldnotes for the city",
    kind: "WEB DESIGN · CONCEPT",
    description: "A small digital guide to finding independent places and the people behind them.",
    color: "blue",
    mark: "↗",
    tag: "Web design",
  },
  {
    number: "03",
    name: "A little more nature",
    kind: "IDENTITY · CONCEPT",
    description: "A warm, flexible identity for a community bringing more green into everyday life.",
    color: "green",
    mark: "✳",
    tag: "Visual identity",
  },
];

export default function Home() {
  return (
    <main>
      <nav className="nav wrap" aria-label="Main navigation">
        <a className="wordmark" href="#top" aria-label="EZ, home">EZ<span>.</span></a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a className="contact-link" href="mailto:hello@example.com">Say hello <span>↗</span></a>
        </div>
      </nav>

      <section className="hero wrap" id="top">
        <p className="eyebrow"><span className="dot" /> INDEPENDENT DESIGNER & DEVELOPER</p>
        <h1>Good ideas,<br />made <em>human.</em></h1>
        <div className="hero-bottom">
          <p className="intro">Hey, I’m <strong>Edhel John L. Zamora</strong> — a fourth-year Information Systems student shaping thoughtful digital experiences, from the first sketch to the final detail.</p>
          <a className="round-link" href="#work" aria-label="Explore selected work">↓</a>
        </div>
        <div className="hero-note">TAIPEI, TAIWAN&nbsp; · &nbsp;AVAILABLE WORLDWIDE</div>
        <span className="hero-spark" aria-hidden="true">✳</span>
      </section>

      <section className="work wrap" id="work">
        <div className="section-heading">
          <p className="eyebrow">A FEW THINGS I’VE BEEN MAKING</p>
          <h2>Selected work<span> 03</span></h2>
        </div>
        <div className="projects">
          {projects.map((project) => (
            <article className="project" key={project.number}>
              <div className={`project-art ${project.color}`}>
                <span className="project-index">{project.number} / 03</span>
                <span className="art-tag">{project.tag}</span>
                <span className="art-mark" aria-hidden="true">{project.mark}</span>
                <span className="art-caption">A PERSONAL<br />CONCEPT PROJECT</span>
              </div>
              <div className="project-info">
                <div><p className="project-kind">{project.kind}</p><h3>{project.name}</h3></div>
                <span className="arrow" aria-hidden="true">↗</span>
              </div>
              <p className="project-desc">{project.description}</p>
            </article>
          ))}
        </div>
        <p className="work-note">These are concept studies. New case studies are on the way.</p>
      </section>

      <section className="about wrap" id="about">
        <div><p className="eyebrow">A LITTLE ABOUT ME</p><span className="about-index">01 — 04</span></div>
        <div className="about-copy">
          <h2>Curious by nature.<br /><em>Thoughtful by design.</em></h2>
          <p>I’m a fourth-year Information Systems student at Samar State University. I’m interested in how design and technology can solve everyday problems, and I enjoy exploring ideas through useful, carefully made digital experiences.</p>
          <div className="skills" aria-label="Areas of focus"><span>INFORMATION SYSTEMS</span><span>PRODUCT DESIGN</span><span>FRONTEND</span><span>CREATIVE CODE</span></div>
        </div>
      </section>

      <footer className="footer wrap">
        <p className="eyebrow">HAVE A GOOD ONE IN MIND?</p>
        <a className="footer-cta" href="mailto:hello@example.com">Let’s make<br /><em>something matter.</em><span aria-hidden="true">↗</span></a>
        <div className="footer-bottom">
          <span>© 2025 EDHEL JOHN L. ZAMORA</span>
          <div><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LINKEDIN ↗</a><a href="https://github.com" target="_blank" rel="noreferrer">GITHUB ↗</a><a href="mailto:hello@example.com">EMAIL ↗</a></div>
          <a href="#top">BACK TO TOP ↑</a>
        </div>
      </footer>
    </main>
  );
}
