# 🚀 Lokesh's Portfolio

A modern, interactive portfolio website built with React, Three.js, and GSAP animations. Features a stunning 3D background, smooth scroll animations, and a clean, professional design.

## ✨ Features

- **3D Interactive Background** - Animated cube models using Three.js with particle effects
- **Smooth Animations** - GSAP-powered scroll animations and transitions
- **Responsive Design** - Fully optimized for desktop, tablet, and mobile devices
- **Modern Tech Stack** - Built with the latest web technologies
- **Smooth Scrolling** - Lenis smooth scroll integration
- **Dynamic Sections**:
  - Hero section with animated introduction
  - About section with professional bio
  - Skills showcase with interactive tech cards
  - Projects gallery with detailed cards
  - Contact section with social media links

## 🛠️ Technologies Used

### Frontend
- **React** (v19.2.0) - UI library
- **Vite** (v7.2.2) - Build tool and dev server
- **Three.js** (v0.181.1) - 3D graphics and animations
- **GSAP** (v3.13.0) - Advanced animations
- **Lenis** (v1.3.15) - Smooth scrolling

### Styling
- **CSS3** - Modern styling with custom properties
- **Font Awesome** (v6.5.1) - Icons
- **Google Fonts** - Montserrat & JetBrains Mono

### Development Tools
- **ESLint** - Code linting
- **Vite** - Fast development and optimized builds

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Lokesh-15N/portfolio-react.git
   cd portfolio-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
portfolio-react/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── ThreeDBackground.jsx
│   │   └── Hero3D.jsx
│   ├── data/           # Data files
│   │   ├── projects.js
│   │   └── skills.js
│   ├── hooks/          # Custom React hooks
│   │   └── useLenisScroll.js
│   ├── assets/         # Images and media
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── package.json        # Dependencies
├── vite.config.js      # Vite configuration
└── eslint.config.js    # ESLint configuration
```

## 🎨 Customization

### Update Personal Information

1. **Hero Section** - Edit `src/components/Hero.jsx`
   - Change name, title, and stats

2. **About Section** - Edit `src/components/About.jsx`
   - Update bio and profile image

3. **Skills** - Edit `src/data/skills.js`
   - Add or remove technologies

4. **Projects** - Edit `src/data/projects.js`
   - Add your projects with images and links

5. **Contact Info** - Edit `src/components/Contact.jsx`
   - Update social media links and email

### Customize Colors

Edit CSS custom properties in `src/index.css`:
```css
:root {
  --primary-bg: #0a0e27;
  --secondary-bg: #141837;
  --primary-text: #ffffff;
  --electric-accent: #A3C9A8;
  --secondary-accent: #C7E8C5;
}
```

## 🚀 Deployment

### Deploy to Vercel
```bash
npm run build
vercel --prod
```

### Deploy to Netlify
```bash
npm run build
netlify deploy --prod --dir=dist
```

### Deploy to GitHub Pages
```bash
npm run build
# Follow GitHub Pages deployment guide
```

## 📱 Responsive Breakpoints

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px

## 🎯 Performance Optimizations

- Lazy loading for images
- Code splitting with Vite
- Optimized Three.js rendering
- CSS animations with GPU acceleration
- Efficient GSAP timeline management

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Contact

**Lokesh Nighot**

- **Email**: [lokeshnighotln@gmail.com](mailto:lokeshnighotln@gmail.com)
- **LinkedIn**: [lokesh-nighot-ln](https://linkedin.com/in/lokesh-nighot-ln)
- **GitHub**: [Lokesh-15N](https://github.com/Lokesh-15N)
- **Instagram**: [@lokeshnighot_15](https://instagram.com/lokeshnighot_15)
- **X**: [@LokeshN06](https://x.com/LokeshN06)

## 🙏 Acknowledgments

- Three.js documentation and examples
- GSAP animation library
- React community
- Font Awesome for icons
- Google Fonts

---

**Made with ❤️ by Lokesh**

⭐ Star this repo if you find it helpful!
