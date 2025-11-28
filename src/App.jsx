import { useState, useEffect } from 'react';

function App() {
  const [books, setBooks] = useState([]);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formMessage, setFormMessage] = useState({ text: '', type: '' });

  useEffect(() => {
    fetch('/api/books')
      .then(res => res.json())
      .then(data => setBooks(data))
      .catch(err => console.error(err));
  }, []);



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const result = await res.json();
      setFormMessage({ text: result.message, type: result.success ? 'success' : 'error' });
      if (result.success) setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setFormMessage({ text: 'Failed to send message', type: 'error' });
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">Nishit Gupta</div>
          <ul className="nav-menu">
            <li><a href="#home" className="nav-link">Home</a></li>
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#skills" className="nav-link">Skills</a></li>
            <li><a href="#experience" className="nav-link">Experience</a></li>
            <li><a href="#achievements" className="nav-link">Awards</a></li>
            <li><a href="#books" className="nav-link">Books</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Nishit Gupta</h1>
          <p className="hero-subtitle">SDET | Test Automation Engineer | Author</p>
          <p className="hero-desc">Crafting quality through code and words</p>
          <div className="hero-cta">
            <a href="#about" className="btn btn-primary">About Me</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
        <div className="hero-bg"></div>
      </section>

      <section id="about" className="about-section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <p className="about-text">I'm a passionate Software Development Engineer in Test (SDET) with expertise in test automation, quality assurance, and software development. Beyond my technical career, I'm also an accomplished author with multiple published books on Amazon.</p>
            <p className="about-text">My unique blend of technical precision and creative writing allows me to approach problems from multiple perspectives, ensuring both robust software solutions and compelling narratives.</p>
          </div>
        </div>
      </section>

      <section id="skills" className="skills-section">
        <div className="container">
          <h2 className="section-title">Core Competencies</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon">🔧</div>
              <h3>Test Automation</h3>
              <p>Selenium, Katalon Studio, Robot Framework, Playwright, Appium, Cypress, AccelQ</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">💻</div>
              <h3>Programming</h3>
              <p>Java, C#, JavaScript, TypeScript, Python, Groovy</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">🚀</div>
              <h3>CI/CD</h3>
              <p>GitHub Actions, TeamCity, Octopus, Bitbucket</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">🛠️</div>
              <h3>Frameworks & Tools</h3>
              <p>BDD (Cucumber, SpecFlow, NUnit), Mocha, .NET Core, RAGAS, DeepEval</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">🗄️</div>
              <h3>Databases</h3>
              <p>MySQL, SQL Server, MongoDB</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">🌐</div>
              <h3>Frontend & Cloud</h3>
              <p>HTML, CSS, ReactJS, NodeJS, API Testing</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">🤖</div>
              <h3>AI & Innovation</h3>
              <p>Prompt Engineering, GitHub Copilot, Test Strategy</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">✍️</div>
              <h3>Creative Writing</h3>
              <p>Published Author</p>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="experience-section">
        <div className="container">
          <h2 className="section-title">Professional Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Senior SDET</h3>
                <p className="timeline-meta">Enterprise Software Company</p>
                <ul className="timeline-list">
                  <li>Led test automation initiatives using Selenium, Playwright, and Cypress</li>
                  <li>Architected CI/CD pipelines with GitHub Actions and TeamCity</li>
                  <li>Implemented BDD frameworks using Cucumber and SpecFlow</li>
                  <li>Mentored junior team members on automation best practices</li>
                  <li>Reduced testing time by 60% through automation framework optimization</li>
                </ul>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>SDET - Test Automation Engineer</h3>
                <p className="timeline-meta">HCL Technologies</p>
                <ul className="timeline-list">
                  <li>Developed automated test suites using Katalon Studio and Robot Framework</li>
                  <li>Performed API testing with REST Assured and Postman</li>
                  <li>Integrated automated tests with Bitbucket and Octopus deployment pipelines</li>
                  <li>Collaborated with cross-functional teams for quality delivery</li>
                  <li>Awarded Process Champion for process improvement initiatives</li>
                </ul>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>QA Automation Engineer</h3>
                <p className="timeline-meta">Software Development Projects</p>
                <ul className="timeline-list">
                  <li>Created automation frameworks from scratch using Java and C#</li>
                  <li>Implemented mobile testing solutions with Appium</li>
                  <li>Performed database testing with MySQL and MongoDB</li>
                  <li>Developed custom automation tools earning Innovation Award</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="achievements" className="achievements-section">
        <div className="container">
          <h2 className="section-title">Achievements & Certifications</h2>
          <div className="achievements-grid">
            <div className="achievement-card">
              <div className="achievement-icon">🏆</div>
              <h3>Awards</h3>
              <ul className="achievement-list">
                <li>Innovation Award – Automation tool development</li>
                <li>Team Contribution Award – Multi-tech expertise</li>
                <li>Process Champion Award (HCL)</li>
                <li>XtraMiles Client Satisfaction Award</li>
              </ul>
            </div>
            <div className="achievement-card">
              <div className="achievement-icon">📜</div>
              <h3>Certifications</h3>
              <ul className="achievement-list">
                <li>ISTQB Foundation Level</li>
                <li>Full Stack SDET Certification</li>
                <li>Blockchain Testing</li>
                <li>Katalon Practitioner & AI Certificates</li>
                <li>GitHub Copilot L1 & L2</li>
                <li>Playwright Introduction</li>
                <li>Azure DevOps Continuous Testing</li>
              </ul>
            </div>
          </div>
          <div className="resume-download">
            <a href="/resume" className="btn btn-primary" download>Download Full Resume</a>
          </div>
        </div>
      </section>

      <section id="books" className="books-section">
        <div className="container">
          <h2 className="section-title">My Books</h2>
          <div className="books-grid">
            {books.length === 0 ? (
              <div className="loader">Loading books...</div>
            ) : (
              books.map((book, index) => (
                <div key={index} className="book-card" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="book-image-container">
                    <img 
                      src={book.image || 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22300%22%3E%3Crect fill=%22%236366f1%22 width=%22200%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 fill=%22white%22 font-size=%2220%22 text-anchor=%22middle%22 dy=%22.3em%22%3EBook%3C/text%3E%3C/svg%3E'} 
                      alt={book.title} 
                      className="book-image"
                      onError={(e) => e.target.src = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22300%22%3E%3Crect fill=%22%236366f1%22 width=%22200%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 fill=%22white%22 font-size=%2220%22 text-anchor=%22middle%22 dy=%22.3em%22%3EBook%3C/text%3E%3C/svg%3E'}
                    />
                  </div>
                  <div className="book-content">
                    <h3 className="book-title">{book.title}</h3>
                    <p className="book-description">{book.description}</p>
                    <a href={book.amazonLink} target="_blank" rel="noopener noreferrer" className="book-link">View on Amazon →</a>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <input 
                type="text" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="Your Name" 
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="email" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder="Your Email" 
                required 
              />
            </div>
            <div className="form-group">
              <textarea 
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows="5" 
                placeholder="Your Message" 
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
            {formMessage.text && (
              <div className={`form-message ${formMessage.type}`}>
                {formMessage.text}
              </div>
            )}
          </form>
        </div>
      </section>

      <footer className="footer">
      </footer>
    </>
  );
}

export default App;
