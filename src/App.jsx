import { useEffect, useRef, useState } from 'react'
import { links, typedWords, current, experience, projects } from './data.js'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/* Types and deletes each word in a loop. */
function useTyped(words) {
  const [state, setState] = useState({ w: 0, n: 0, del: false })
  useEffect(() => {
    if (prefersReducedMotion()) {
      setState({ w: 0, n: words[0].length, del: false })
      return
    }
    const word = words[state.w]
    let delay = state.del ? 40 : 75
    let next
    if (!state.del && state.n < word.length) next = { ...state, n: state.n + 1 }
    else if (!state.del) { next = { ...state, del: true }; delay = 1700 }
    else if (state.n > 0) next = { ...state, n: state.n - 1 }
    else { next = { w: (state.w + 1) % words.length, n: 0, del: false }; delay = 300 }
    const t = setTimeout(() => setState(next), delay)
    return () => clearTimeout(t)
  }, [state, words])
  return words[state.w].slice(0, state.n)
}

/* 0 → 1 as the element scrolls past 60% of the viewport. */
function useScrollProgress(ref) {
  const [p, setP] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return
      const r = ref.current.getBoundingClientRect()
      const v = (window.innerHeight * 0.6 - r.top) / Math.max(r.height, 1)
      setP(Math.max(0, Math.min(1, v)))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [ref])
  return p
}

function Watercolor() {
  return (
    <svg className="watercolor" aria-hidden="true" viewBox="0 0 1440 720" preserveAspectRatio="xMidYMid slice">
      <defs>
        <filter id="wc" x="-30%" y="-30%" width="160%" height="160%">
          <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="3" seed="7" result="noise">
            <animate attributeName="baseFrequency" values="0.011;0.016;0.011" dur="22s" repeatCount="indefinite" />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="70" xChannelSelector="R" yChannelSelector="G" />
          <feGaussianBlur stdDeviation="18" />
        </filter>
        {[
          ['g1', '#B9CBE4', '#C9D7EA'],
          ['g2', '#C4D9CB', '#D3E3D8'],
          ['g3', '#EBC9C6', '#F0D6D3'],
          ['g4', '#D8CFE8', '#D8CFE8'],
        ].map(([id, a, b]) => (
          <radialGradient id={id} key={id}>
            <stop offset="0" stopColor={a} stopOpacity="0.85" />
            <stop offset="0.7" stopColor={b} stopOpacity="0.42" />
            <stop offset="1" stopColor={b} stopOpacity="0" />
          </radialGradient>
        ))}
      </defs>
      <g filter="url(#wc)">
        <g className="bloom" style={{ animationDuration: '26s' }}><ellipse cx="1080" cy="230" rx="300" ry="220" fill="url(#g1)" /></g>
        <g className="bloom" style={{ animationDuration: '32s', animationDelay: '-8s' }}><ellipse cx="1260" cy="520" rx="260" ry="200" fill="url(#g3)" /></g>
        <g className="bloom" style={{ animationDuration: '29s', animationDelay: '-14s' }}><ellipse cx="860" cy="560" rx="240" ry="170" fill="url(#g2)" /></g>
        <g className="bloom" style={{ animationDuration: '36s', animationDelay: '-4s' }}><ellipse cx="160" cy="120" rx="220" ry="160" fill="url(#g4)" /></g>
        <g className="bloom" style={{ animationDuration: '30s', animationDelay: '-20s' }}><ellipse cx="420" cy="660" rx="200" ry="130" fill="url(#g1)" /></g>
      </g>
    </svg>
  )
}

function Hero() {
  const typed = useTyped(typedWords)
  return (
    <section className="hero">
      <Watercolor />

      <div className="container hero-inner">
        <div className="hero-text">
          <div className="badge"><span className="pulse" aria-hidden="true" />Open to Spring/Summer 2027 internships</div>
          <h1>Harnoor Sagar</h1>
          <p className="typed" aria-label="I build AI agents, full-stack apps, user-friendly UI/UX designs, and hackathon projects.">
            <span aria-hidden="true">I build <span className="accent">{typed}</span><span className="caret" /></span>
          </p>
          <p className="lede">Software Engineering student at McMaster University, currently building AI tools at Geotab.</p>
          <div className="buttons">
            <a className="btn btn-dark" href="#projects">See my projects</a>
            <a className="btn btn-light" href="#contact">Say hello</a>
          </div>
        </div>

        <aside className="current" aria-label="Currently">
          <div className="current-head">currently</div>
          {current.map((c) => (
            <div className="current-row" key={c.org}>
              <p className="current-org">{c.org}</p>
              <p className="current-role">{c.role}</p>
            </div>
          ))}
          <div className="current-links">
            <a href={links.github}>GitHub ↗</a>
            <a href={links.linkedin}>LinkedIn ↗</a>
          </div>
        </aside>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="section">
      <div className="container split">
        <h2 className="label">About</h2>
        <div className="split-body">
          <p className="big">I like turning slow, manual work into tools people actually use.</p>
          <p>I'm a third-year Software Engineering (Co-op) student at McMaster, currently a Product Safety Analytics Intern at Geotab. There, I analyze fleet data to pinpoint the root cause of device issues, and build AI agents that automate processes for internal teams.</p>
          <p>Beyond work, I've built at 5 hackathons, redesigned the website for McMaster Formula Electric, taught 150+ students to build their first sensor and motor projects at Venture Academy, and lead technical events with GDG McMaster.</p>
          <p>When I'm not coding, I'm usually experimenting with UI/UX designs, deep in a mystery or thriller novel, or out on the badminton court.</p>
        </div>
      </div>
    </section>
  )
}

function FlipCard({ e }) {
  const [flipped, setFlipped] = useState(false)
  const toggle = () => setFlipped((f) => !f)
  return (
    <div className={`flip tint-${e.tint}${flipped ? ' flipped' : ''}`} onClick={toggle}>
      <div className="flip-inner">
        <div className="face front" aria-hidden={flipped}>
          <div className="face-top">
            <div>
              <h3>{e.role}</h3>
              <p className="org">{e.org}</p>
              <p className="place">{e.place}</p>
            </div>
            <span className="date-pill">{e.dates}</span>
          </div>
          <p className="summary">{e.summary}</p>
          <div className="pills">
            {e.stack.map((t) => <span className="pill" key={t}>{t}</span>)}
          </div>
          <button type="button" className="flip-btn" onClick={(ev) => { ev.stopPropagation(); toggle() }} aria-expanded={flipped}>
            See key achievements →
          </button>
        </div>
        <div className="face back" aria-hidden={!flipped}>
          <p className="back-title">Key achievements · {e.org}</p>
          <ul>
            {e.points.map((pt) => <li key={pt}>{pt}</li>)}
          </ul>
          <button type="button" className="flip-btn" onClick={(ev) => { ev.stopPropagation(); toggle() }}>
            ← Flip back
          </button>
        </div>
      </div>
    </div>
  )
}

function Experience() {
  const ref = useRef(null)
  const p = useScrollProgress(ref)
  const thresholds = [0.02, 0.3, 0.6, 0.9]
  return (
    <section id="experience" className="section">
      <div className="container split">
        <div className="split-label">
          <h2 className="label">Experience</h2>
          <p className="label-hint">Tap a card to flip it</p>
        </div>
        <div className="timeline split-body" ref={ref}>
          <div className="track" aria-hidden="true" />
          <div className="fill" aria-hidden="true" style={{ height: `calc((100% - 40px) * ${p})` }} />
          <ol>
            {experience.map((e, i) => (
              <li key={e.org}>
                <span className={`dot${p >= thresholds[i] ? ' on' : ''}`} aria-hidden="true" />
                <FlipCard e={e} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="projects-head">
          <h2 className="label">Selected projects</h2>
          <a href={links.github}>All on GitHub ↗</a>
        </div>
        <div className="grid">
          {projects.map((p) => (
            <a className="card" href={p.href} key={p.name} target="_blank" rel="noreferrer">
              <div className="shot"><img src={p.img} alt={p.alt} loading="lazy" /></div>
              <p className="meta">{p.meta}</p>
              <h3>{p.name} ↗</h3>
              <p className="muted">{p.text}</p>
              <p className="stack">{p.stack}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container contact-inner">
        <div>
          <p className="label">Contact</p>
          <h2>Let's work together.</h2>
          <p className="muted">Looking for Spring/Summer 2027 internships in software, product, data, and AI.</p>
        </div>
        <div className="contact-links">
          <a href={`mailto:${links.email}`}>{links.email} ↗</a>
          <a href={links.linkedin}>LinkedIn ↗</a>
          <a href={links.github}>GitHub ↗</a>
        </div>
      </div>
      <div className="container footer">
        <span>© {new Date().getFullYear()} Harnoor Sagar</span>
        <span>Hamilton, ON</span>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <>
      <header className="nav">
        <nav className="container nav-inner" aria-label="Main">
          <a href="#top" className="brand"><span className="mark" aria-hidden="true">HS</span>Harnoor Sagar</a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            <a className="btn-resume" href={links.resume} target="_blank" rel="noreferrer">Resume</a>
          </div>
        </nav>
      </header>
      <main id="top">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  )
}
