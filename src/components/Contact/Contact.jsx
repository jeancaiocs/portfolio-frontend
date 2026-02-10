import { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Enviado:', formData)
    setSent(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSent(false), 3000)
  }

  const links = [
  {
    icon: '📱',
    label: 'WhatsApp',
    value: '(44) 99887-3044',
    href: 'https://wa.me/5544998873044'
  },
  {
    icon: '🔗',
    label: 'LinkedIn',
    value: 'Jean Caio',
    href: 'https://www.linkedin.com/in/jeancaio/'
  },
  {
    icon: '🐙',
    label: 'GitHub',
    value: 'jeancaiocs',
    href: 'https://github.com/jeancaiocs'
  }
]

  return (
    <section className="contact" id="contact">
      <div className="container">

        <div className="section-header">
          <span className="section-tag">Contato</span>
          <h2 className="section-title">
            Vamos <span className="gradient-text">conversar?</span>
          </h2>
        </div>

        <div className="contact-grid">

          {/* Coluna esquerda — links */}
          <div className="contact-links-col">
            <p className="contact-intro">
              Estou disponível para novas oportunidades. Não hesite em entrar em contato!
            </p>

            <div className="contact-links">
              {links.map((item, i) => (
                <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="contact-link-card">
                  <span className="contact-link-icon">{item.icon}</span>
                  <div className="contact-link-info">
                    <span className="contact-link-label">{item.label}</span>
                    <span className="contact-link-value">{item.value}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Coluna direita — formulário */}
          <div className="contact-form-col">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Nome</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Seu nome" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="seu@email.com" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mensagem</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows="4" placeholder="Como posso ajudar?" ></textarea>
              </div>

              <button type="submit" className="btn-enviar">
                {sent ? '✅ Enviado!' : 'Enviar Mensagem'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
