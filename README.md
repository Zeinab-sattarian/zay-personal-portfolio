# Zeinab Satarian - Personal Portfolio 🚀

A modern, responsive personal portfolio website built with **Next.js**, **React**, and **TypeScript**. This portfolio showcases professional expertise, work experience, projects, and skills with a beautiful, interactive user interface.

---

## ✨ Features

- 📱 **Fully Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- 🌍 **Multi-Language Support** - Toggle between English and French
- 🎨 **Modern UI/UX** - Beautiful animations and smooth transitions using GSAP
- 🎯 **Smooth Scrolling Navigation** - Enhanced navigation experience with react-scroll
- ⚡ **Performance Optimized** - Built with Next.js for optimal performance
- 📊 **Project Showcase** - Display of previous work and projects
- 📝 **Notion Integration** - Pull content from Notion for dynamic page updates
- 📞 **Contact Section** - Easy way for visitors to get in touch
- 🎭 **Lottie Animations** - Smooth, lightweight animations throughout the site

---

## 📸 Screenshots

### Hero Section

The landing page features an engaging hero section with smooth animations and a call-to-action.

![Hero Section](./public/picture5.png)

### Navigation

- **Desktop**: Clean navigation bar with language toggle switch
- **Mobile**: Responsive hamburger menu with optimized language toggle

### Key Sections

1. **Home** - Professional introduction and headline
2. **Expertise** - Key skills and areas of focus:
   - Project Management
   - Machine Learning & Computer Vision
   - Front End Development
3. **Work** - Portfolio of previous projects
4. **Experience** - Professional experience and background
5. **Contact** - Contact information and links

---

## 🛠️ Tech Stack

### Frontend

- **Next.js 12** - React framework for production
- **React 17** - UI library
- **TypeScript** - Type-safe JavaScript
- **GSAP 3** - Professional animations
- **Material-UI (MUI)** - Component library
- **Bootstrap 5** - CSS framework

### Libraries & Tools

- **react-scroll** - Smooth scrolling navigation
- **react-notion-x** - Notion content integration
- **react-lottie** - Animation library
- **js-cookie** - Cookie management
- **express-useragent** - User agent detection
- **react-device-detect** - Device detection

### Localization

- **Multilingual Support** - EN/FR language toggle
- **JSON-based Locales** - Easy translation management

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/zay-personal-portfolio.git
cd zay-personal-portfolio
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Run the development server**

```bash
npm run dev
# or
yarn dev
```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
# or
yarn build
yarn start
```

---

## 📁 Project Structure

```
├── components/              # React components
│   ├── home/               # Home page sections
│   │   ├── Home.tsx
│   │   ├── Expertise.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   └── Contact.tsx
│   ├── work/               # Work/Projects display
│   ├── shared/             # Shared components
│   ├── Navigation.tsx       # Navigation component
│   └── CommonFooter.tsx     # Footer component
├── pages/                   # Next.js pages
│   ├── index.tsx           # Home page
│   ├── [slug].tsx          # Dynamic routes
│   └── _app.tsx            # App wrapper
├── locales/                 # i18n translations
│   ├── en/
│   └── fr/
├── hooks/                   # Custom React hooks
│   ├── useTranslation.ts
│   └── device.ts
├── styles/                  # Global styles
├── public/                  # Static assets
│   ├── icons/
│   ├── illustrations/
│   ├── logos/
│   └── work/               # Project images
└── types/                   # TypeScript types
```

---

## 🎯 Key Components

### Navigation Component

Features a dynamic navigation bar with:

- Language toggle switch button (EN/FR)
- Responsive mobile menu
- Sticky navigation on scroll
- Dark/light theme support
- Smooth scroll links to page sections

**Recent Improvements:**

- Fixed mobile language toggle sizing
- Improved scroll behavior in mobile menu
- Converted language selector to modern switch button design

### Home Section

Displays professional introduction and headline with animations.

### Expertise Section

Showcases key skills and areas of expertise with descriptions.

### Work Section

Portfolio of projects with images and descriptions pulled from Notion.

### Contact Section

Easy contact form and social media links.

---

## 🌐 Localization

The portfolio supports multiple languages with easy switching:

**Supported Languages:**

- English (EN)
- French (FR)

To add more languages:

1. Create a new JSON file in `locales/[language]/common.json`
2. Copy the structure from existing language files
3. Translate the content
4. Update `hooks/useTranslation.ts` if needed

---

## 🔧 Configuration

### NextJS Config

See `next.config.js` for Next.js configuration including:

- i18n routing setup
- Build optimization

### TypeScript

TypeScript configuration available in `tsconfig.json`

---

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:

- **Desktop** (1920px and above)
- **Tablet** (768px - 1919px)
- **Mobile** (below 768px)

Mobile optimizations include:

- Touch-friendly interface
- Optimized font sizes
- Responsive images
- Mobile menu with language toggle

---

## 🎨 Customization

### Colors & Themes

Global CSS variables in `styles/globals.css`:

```css
--theme-color: #2d3436
--light-background-color: #ECF6F8
--title-color: rgb(254 105 111)
--light-alternate-color: #FFF4F2
```

### Fonts

Custom fonts located in `public/fonts/` (Visby font family)

### Content

Edit JSON files in `locales/` for text content
Images located in `public/` directory

---

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect repository to Vercel
3. Automatic deployments on push

### Other Platforms

Works with any platform supporting Next.js:

- Netlify
- AWS Amplify
- DigitalOcean
- Heroku

---

## 📝 Recent Updates

- ✅ Fixed mobile language toggle sizing and positioning
- ✅ Improved scroll behavior in mobile menu
- ✅ Converted language selector to modern switch button design
- ✅ Enhanced responsive design

---

## 👨‍💼 About

**Zeinab Satarian**

- Bachelor of Science in Computer Engineering
- Sharif University of Technology (Iran)
- GPA: 18.8/20

### Expertise

- Project Management (Agile/Scrum)
- Machine Learning & Computer Vision
- Frontend Development (React, Next.js)

---

## 📞 Contact

- **Email**: [Your Email]
- **LinkedIn**: [Your LinkedIn]
- **GitHub**: [Your GitHub]
- **Portfolio**: [Your Portfolio URL]

---

## 📄 License

This project is open source and available under the MIT License.

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork the repository and submit pull requests.

### Steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 🙏 Acknowledgments

- Next.js community
- React ecosystem
- Material-UI components
- All the amazing open-source libraries used

---

**Built with ❤️ using Next.js**
