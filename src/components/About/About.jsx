import './About.css'

const About = () => {
  const technologies = [
    { name: 'HTML5', icon: '🌐' },
    { name: 'CSS3', icon: '🎨' },
    { name: 'JavaScript', icon: '⚡' },
    { name: 'React', icon: '⚛️' },
    { name: 'Git', icon: '📦' },
    { name: 'GitHub', icon: '🐙' }
  ]

  return (
    <section className="about" id="about">
      <div className="container">

        {/* Header da seção */}
        <div className="section-header">
          <span className="section-tag">Sobre mim</span>
          <h2 className="section-title">
            Conheça um pouco mais sobre <span className="gradient-text">minha jornada</span>
          </h2>
        </div>

        {/* Conteúdo principal */}
        <div className="about-grid">

          {/* Coluna esquerda — texto */}
          <div className="about-text-col">
            <p>
              Sou um desenvolvedor front-end júnior apaixonado por criar experiências digitais 
              incríveis e funcionais. Com conhecimento sólido em tecnologias modernas, estou 
              sempre em busca de aprender e evoluir.
            </p>
            <p>
              Meu foco está em desenvolver aplicações web responsivas, acessíveis e com 
              código limpo. Acredito que a combinação de bom design e programação eficiente 
              é essencial para criar produtos digitais de qualidade.
            </p>

            {/* Objetivo — destaque */}
            <div className="about-goal">
              <div className="about-goal-icon">🎯</div>
              <div>
                <h4>Objetivo Profissional</h4>
                <p>
                  Conquistar minha primeira oportunidade como desenvolvedor front-end, onde 
                  possa aplicar meus conhecimentos e continuar crescendo.
                </p>
              </div>
            </div>
          </div>

          {/* Coluna direita — tecnologias */}
          <div className="about-tech-col">
            <h3 className="tech-title">Tecnologias</h3>
            <div className="tech-grid">
              {technologies.map((tech, index) => (
                <div key={index} className="tech-card" style={{ animationDelay: `${index * 0.08}s` }}>
                  <span className="tech-icon">{tech.icon}</span>
                  <span className="tech-name">{tech.name}</span>
                </div>
              ))}
            </div>

            {/* Stats compactos */}
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">6+</span>
                <span className="stat-label">Tecnologias</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">3+</span>
                <span className="stat-label">Projetos</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Dedicação</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
