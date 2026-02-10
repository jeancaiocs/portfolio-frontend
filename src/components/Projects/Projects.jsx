import './Projects.css'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Moderno',
      description: 'Loja virtual completa com carrinho, filtros e design responsivo.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop',
      technologies: ['React', 'CSS3', 'API REST'],
      github: 'https://github.com/seu-usuario/ecommerce',
      demo: 'https://seu-ecommerce.vercel.app'
    },
    {
      id: 2,
      title: 'Dashboard Analytics',
      description: 'Painel com gráficos interativos e métricas em tempo real.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      technologies: ['React', 'JavaScript', 'Chart.js'],
      github: 'https://github.com/seu-usuario/dashboard',
      demo: 'https://seu-dashboard.vercel.app'
    },
    {
      id: 3,
      title: 'Weather App',
      description: 'Previsão do tempo com busca por cidade e dados de 5 dias.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&h=400&fit=crop',
      technologies: ['React', 'OpenWeather API', 'CSS3'],
      github: 'https://github.com/seu-usuario/weather-app',
      demo: 'https://seu-weather.vercel.app'
    }
  ]

  return (
    <section className="projects" id="projects">
      <div className="container">

        <div className="section-header">
          <span className="section-tag">Portfólio</span>
          <h2 className="section-title">
            Meus <span className="gradient-text">Projetos</span>
          </h2>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={project.id} className="project-card" style={{ animationDelay: `${index * 0.12}s` }}>

              {/* Imagem com overlay ao hover */}
              <div className="project-image-wrap">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="overlay-btn">
                    Demo
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="overlay-btn overlay-btn-ghost">
                    GitHub
                  </a>
                </div>
              </div>

              {/* Info */}
              <div className="project-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="project-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
