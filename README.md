# 🛡️ Ethical HCK

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

> **Inspire, Innovate, Secure** - Empowering the next generation of cybersecurity professionals through hands-on learning and community collaboration.

The official website for Ethical HCK, a cybersecurity community at Herald College Kathmandu dedicated to fostering cybersecurity awareness, skills development, and ethical hacking practices.

## 🌟 Features

- **📱 Fully Responsive Design** - Optimized for all devices from mobile to desktop
- **🎨 Modern UI/UX** - Clean, professional design with smooth animations
- **⚡ Next.js 14** - Built with the latest App Router and Server Components
- **🎯 TypeScript** - Type-safe development experience
- **💨 Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **🌙 Dark Theme** - Sleek dark mode design
- **♿ Accessible** - WCAG compliant with proper ARIA labels
- **🚀 Optimized Performance** - Fast loading with image optimization
- **📊 SEO Friendly** - Proper meta tags and Open Graph support

## 📂 Project Structure

```
Ethical-HCK/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Authentication pages
│   ├── (default)/         # Main application pages
│   │   ├── contact/       # Contact page
│   │   ├── events/        # Events showcase
│   │   ├── gallery/       # Photo gallery
│   │   └── team/          # Team members
│   ├── api/               # API routes
│   ├── css/               # Global styles
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── ui/               # UI components (Header, Footer, Logo)
│   └── ...               # Feature components
├── public/               # Static assets
│   ├── fonts/           # Custom fonts
│   └── images/          # Images and illustrations
├── utils/               # Utility functions
└── types/               # TypeScript type definitions
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.x or higher
- **npm** or **pnpm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ethical-hck.git
   cd ethical-hck
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` with your configuration.

4. **Run the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## 🎨 Tech Stack

### Frontend
- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[React 18](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[React Icons](https://react-icons.github.io/react-icons/)** - Icon library
- **[AOS](https://michalsnik.github.io/aos/)** - Animate On Scroll library

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

## 📄 Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Landing page with featured content |
| Events | `/events` | Showcase of all cybersecurity events |
| Team | `/team` | Meet the team members |
| Gallery | `/gallery` | Photo gallery of past events |
| Contact | `/contact` | Get in touch with the team |

## 🎯 Key Components

### Header
Responsive navigation with mobile menu, sticky positioning, and active link highlighting.

### Footer
Comprehensive footer with quick links, contact information, and social media links.

### Event Cards
Dynamic event showcase with filtering and detailed descriptions.

### Team Cards
Team member profiles with roles and social links.

## 🌐 Environment Variables

Create a `.env.local` file in the root directory:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=Ethical HCK

# Contact Form (if implemented)
NEXT_PUBLIC_CONTACT_EMAIL=ethicalhck@heraldcollege.edu.np

# Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Configure environment variables
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/ethical-hck)

### Other Platforms

The project can also be deployed to:
- **Netlify**
- **AWS Amplify**
- **Railway**
- **Digital Ocean App Platform**

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Contribution Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Test your changes thoroughly
- Update documentation as needed

## 📱 Contact

**Ethical HCK Community**

- 📧 Email: [ethicalhck@heraldcollege.edu.np](mailto:ethicalhck@heraldcollege.edu.np)
- 📞 Phone: +977 9842980808
- 📍 Location: Herald College Kathmandu, Naxal, Kathmandu, Nepal

### Social Media

- [LinkedIn](https://www.linkedin.com/in/ethicalhck/)
- [Instagram](https://www.instagram.com/devcorps.ethicalhck/)
- [Facebook](https://www.facebook.com/profile.php?id=61565057190640)
- [Discord](https://discord.gg/ethicalhck)

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Herald College Kathmandu** - For supporting the Ethical HCK community
- **DevCorps Team** - For development and maintenance
- **Open Source Community** - For amazing tools and libraries

## 🔒 Security

Found a security vulnerability? Please email us at [ethicalhck@heraldcollege.edu.np](mailto:ethicalhck@heraldcollege.edu.np) instead of opening a public issue.

---

<div align="center">

**Built with ❤️ by the Ethical HCK Community**

</div>

