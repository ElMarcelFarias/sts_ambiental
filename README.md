# STS Ambiental - Website Modernizado

Uma versão completamente modernizada do website da STS Ambiental, empresa especializada em consultoria ambiental e regularização imobiliária.

## 🚀 Melhorias Implementadas

### Performance
- **Build System Moderno**: Migração para Vite + React
- **Code Splitting**: Carregamento otimizado de componentes
- **Lazy Loading**: Carregamento sob demanda de imagens e seções
- **Otimização de Assets**: Compressão e otimização automática
- **PWA**: Progressive Web App com cache inteligente

### Design & UX
- **Design Responsivo**: Interface adaptável para todos os dispositivos
- **Animações Fluidas**: Micro-interações com Framer Motion
- **Paleta Verde Moderna**: Cores atualizadas mantendo identidade ambiental
- **Tipografia Melhorada**: Fonte Inter para melhor legibilidade
- **Loading States**: Indicadores visuais de carregamento

### SEO & Acessibilidade
- **Meta Tags Otimizadas**: SEO completo com Open Graph e Twitter Cards
- **Structured Data**: Schema.org para melhor indexação
- **Semântica HTML5**: Estrutura acessível e bem organizada
- **Performance Score**: Lighthouse 90+ em todas as métricas

### Funcionalidades
- **Formulário de Contato**: Validação completa com React Hook Form
- **Navegação Suave**: Scroll suave entre seções
- **WhatsApp Integration**: Botão flutuante para contato direto
- **Mapa Interativo**: Google Maps integrado
- **Galeria Otimizada**: Imagens com carregamento progressivo

## 🛠️ Tecnologias Utilizadas

- **React 18**: Framework principal
- **Vite**: Build tool moderno e rápido
- **Tailwind CSS**: Framework CSS utilitário
- **Framer Motion**: Animações e transições
- **React Hook Form**: Gerenciamento de formulários
- **Lucide React**: Ícones modernos
- **React Helmet Async**: SEO dinâmico
- **React Intersection Observer**: Animações baseadas em scroll

## 📦 Instalação

1. **Clone o repositório**
```bash
git clone <repository-url>
cd sts_ambiental
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute em modo de desenvolvimento**
```bash
npm run dev
```

4. **Build para produção**
```bash
npm run build
```

5. **Preview da build de produção**
```bash
npm run preview
```

## 🏗️ Estrutura do Projeto

```
src/
├── components/
│   ├── sections/          # Seções da página
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Stats.jsx
│   │   ├── Differentials.jsx
│   │   ├── Team.jsx
│   │   ├── CTA.jsx
│   │   ├── Testimonials.jsx
│   │   └── Contact.jsx
│   ├── Navbar.jsx         # Navegação principal
│   ├── Footer.jsx         # Rodapé
│   ├── LoadingSpinner.jsx # Componente de loading
│   └── ScrollToTop.jsx    # Botão voltar ao topo
├── pages/
│   └── Home.jsx           # Página principal
├── App.jsx                # Componente raiz
├── main.jsx              # Entry point
└── index.css             # Estilos globais
```

## 🎨 Personalização

### Cores
As cores podem ser personalizadas no arquivo `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#ecfdf5',
    500: '#10b981',  // Verde principal
    600: '#059669',
    // ...
  }
}
```

### Animações
Animações customizadas estão definidas em `src/index.css` e podem ser modificadas conforme necessário.

## 📱 Responsividade

O site é totalmente responsivo com breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Configurações

### Vite (vite.config.js)
- PWA configurado
- Code splitting otimizado
- Build otimizado para produção

### Tailwind (tailwind.config.js)
- Cores customizadas
- Animações personalizadas
- Fonte Inter configurada

## 📊 Performance

### Métricas Lighthouse (Target)
- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

### Otimizações Implementadas
- Lazy loading de imagens
- Code splitting automático
- Compressão de assets
- Cache inteligente (PWA)
- Minificação de CSS/JS

## 🚀 Deploy

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload da pasta dist/
```

### Servidor Tradicional
```bash
npm run build
# Upload da pasta dist/ para o servidor
```

## 📞 Contato

Para dúvidas sobre o desenvolvimento:
- **Desenvolvedor**: Marcel Leite de Farias
- **LinkedIn**: [Marcel Leite de Farias](https://www.linkedin.com/in/marcel-leite-de-farias-38b62b220/)

Para questões sobre a empresa:
- **Telefone**: (41) 3722-5782
- **Email**: dmambiental@dmambiental.com
- **Endereço**: R. José Gomes, 340 - João Gualberto, Paranaguá - PR

## 📄 Licença

Este projeto foi desenvolvido para a STS Ambiental. Todos os direitos reservados.

---

**Versão**: 2.0.0
**Última Atualização**: 2024
**Status**: ✅ Produção
