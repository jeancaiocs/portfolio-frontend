import { useState } from 'react'
import './Skills.css'

const Skills = () => {
  const categories = [
    {
      key: 'frontend',
      label: 'Front-end',
      icon: '💻',
      skills: [
        { name: 'HTML5',       level: 90 },
        { name: 'CSS3',        level: 85 },
        { name: 'JavaScript',  level: 80 },
        { name: 'React',       level: 75 }
      ]
    },
    {
      key: 'tools',
      label: 'Ferramentas',
      icon: '🛠️',
      skills: [
        { name: 'Git',         level: 80 },
        { name: 'GitHub',      level: 85 },
        { name: 'Vite',        level: 70 },
        { name: 'Figma',       level: 65 }
      ]
    },
    {
      key: 'others',
      label: 'Outros',
      icon: '⚡',
      skills: [
        { name: 'Responsividade', level: 90 },
        { name: 'APIs REST',      level: 75 },
        { name: 'Flexbox / Grid', level: 85 },
        { name: 'SEO Básico',     level: 70 }
      ]
    }
  ]

  const [active, setActive] = useState('frontend')
  const currentCategory = categories.find(c => c.key === active)

  return (
    <section className="skills" id="skills">
      <div className="container">

        <div className="section-header">
          <span className="section-tag">Competências</span>
          <h2 className="section-title">
            Minhas <span className="gradient-text">Habilidades</span>
          </h2>
        </div>

        <div className="skills-wrapper">

          {/* Tabs de categorias */}
          <div className="skills-tabs">
            {categories.map(cat => (
              <button
                key={cat.key}
                className={`skill-tab ${active === cat.key ? 'active' : ''}`}
                onClick={() => setActive(cat.key)}
              >
                <span className="tab-icon">{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>

          {/* Lista de habilidades */}
          <div className="skills-list">
            {currentCategory.skills.map((skill, i) => (
              <div key={i} className="skill-row" style={{ animationDelay: `${i * 0.08}s` }}>
                <div className="skill-row-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-level">{skill.level}%</span>
                </div>
                <div className="skill-bar-bg">
                  <div className="skill-bar-fill" style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Estudando atualmente */}
          <div className="learning-row">
            <span className="learning-label">📚 Estudando</span>
            <div className="learning-tags">
              <span className="learning-tag">TypeScript</span>
              <span className="learning-tag">Next.js</span>
              <span className="learning-tag">Tailwind CSS</span>
              <span className="learning-tag">Node.js</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
