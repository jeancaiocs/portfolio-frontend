# 🚀 Portfólio Desenvolvedor Front-end

Portfólio profissional e moderno criado com **React + Vite** para desenvolvedores front-end júnior que buscam sua primeira oportunidade no mercado.

## 📋 Sobre o Projeto

Este é um portfólio completo e responsivo que demonstra habilidades em desenvolvimento front-end, incluindo HTML, CSS, JavaScript e React. O projeto foi desenvolvido com foco em:

- ✅ Design moderno e profissional
- ✅ Código limpo e organizado
- ✅ Totalmente responsivo (mobile, tablet e desktop)
- ✅ Animações suaves e elegantes
- ✅ Dark mode e Light mode
- ✅ Preparado para deploy

## 🛠️ Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para interfaces
- **Vite** - Build tool ultra-rápido
- **CSS3** - Estilização moderna (Flexbox, Grid, variáveis CSS)
- **JavaScript ES6+** - Funcionalidades modernas

## 📁 Estrutura do Projeto

```
portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Header/
│   │   │   ├── Header.jsx
│   │   │   └── Header.css
│   │   ├── Hero/
│   │   │   ├── Hero.jsx
│   │   │   └── Hero.css
│   │   ├── About/
│   │   │   ├── About.jsx
│   │   │   └── About.css
│   │   ├── Projects/
│   │   │   ├── Projects.jsx
│   │   │   └── Projects.css
│   │   ├── Skills/
│   │   │   ├── Skills.jsx
│   │   │   └── Skills.css
│   │   ├── Contact/
│   │   │   ├── Contact.jsx
│   │   │   └── Contact.css
│   │   └── Footer/
│   │       ├── Footer.jsx
│   │       └── Footer.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

1. Clone ou baixe o projeto

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
```

4. Abra seu navegador em: `http://localhost:5173`

## 📦 Como Fazer Deploy

### Deploy na Vercel (Recomendado)

1. Crie uma conta em [vercel.com](https://vercel.com)

2. Instale a CLI da Vercel:
```bash
npm install -g vercel
```

3. Faça o deploy:
```bash
npm run build
vercel
```

4. Siga as instruções na tela

### Deploy na Netlify

1. Crie uma conta em [netlify.com](https://netlify.com)

2. Conecte seu repositório GitHub

3. Configure:
   - Build command: `npm run build`
   - Publish directory: `dist`

4. Deploy automático!

## ✏️ Personalização

### 1. Informações Pessoais

Edite os seguintes arquivos para adicionar suas informações:

- `src/components/Hero/Hero.jsx` - Seu nome, cargo e descrição
- `src/components/About/About.jsx` - Texto sobre você
- `src/components/Contact/Contact.jsx` - Email e redes sociais
- `src/components/Footer/Footer.jsx` - Links de redes sociais

### 2. Projetos

Edite o array `projects` em `src/components/Projects/Projects.jsx`:

```javascript
const projects = [
  {
    id: 1,
    title: 'Nome do Projeto',
    description: 'Descrição do projeto',
    image: 'URL_DA_IMAGEM',
    technologies: ['React', 'CSS3'],
    github: 'https://github.com/...',
    demo: 'https://...'
  }
  // Adicione mais projetos
]
```

### 3. Habilidades

Edite o objeto `skillsData` em `src/components/Skills/Skills.jsx`:

```javascript
const skillsData = {
  frontend: [
    { name: 'HTML5', level: 90 },
    // Adicione mais habilidades
  ]
}
```

### 4. Cores e Estilos

Personalize as variáveis CSS em `src/index.css`:

```css
:root {
  --bg-primary: #0a0e27;
  --accent-primary: #00d9ff;
  /* Customize as cores */
}
```

## 🎨 Funcionalidades

- ✅ **Navegação suave** entre seções
- ✅ **Menu mobile** responsivo
- ✅ **Dark/Light mode** com toggle
- ✅ **Animações** ao scroll e hover
- ✅ **Formulário de contato** funcional
- ✅ **Cards de projetos** com links para GitHub e Demo
- ✅ **Barras de progresso** para habilidades
- ✅ **Design profissional** e moderno

## 📱 Responsividade

O portfólio é totalmente responsivo e se adapta a:

- 📱 Mobile (320px - 767px)
- 📱 Tablet (768px - 1023px)
- 💻 Desktop (1024px+)

## 🔗 Links Úteis

- [React Docs](https://react.dev)
- [Vite Docs](https://vitejs.dev)
- [CSS Tricks](https://css-tricks.com)
- [MDN Web Docs](https://developer.mozilla.org)

## 💡 Dicas para Melhorar seu Portfólio

1. **Adicione projetos reais** - Mostre projetos que você desenvolveu
2. **Use imagens de qualidade** - Prefira imagens nítidas e profissionais
3. **Mantenha atualizado** - Adicione novos projetos regularmente
4. **Teste em diferentes dispositivos** - Garanta que funcione em todos os navegadores
5. **SEO básico** - Adicione meta tags relevantes
6. **Performance** - Otimize imagens e código

## 📄 Licença

Este projeto é de código aberto e pode ser usado livremente para criar seu próprio portfólio.

## 👨‍💻 Autor

Desenvolvido como portfólio profissional para desenvolvedores front-end.

---

⭐ Se este projeto te ajudou, considere dar uma estrela!

🚀 Boa sorte na sua jornada como desenvolvedor!
