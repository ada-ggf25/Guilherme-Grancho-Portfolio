# Guilherme Grancho - Personal Portfolio

A clean, professional, and minimalist personal portfolio website built with Next.js 15, React 19, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Clean & Minimalist Design**: Professional, uncluttered interface that focuses on content
- **Dark Theme First**: Defaults to dark theme with seamless light mode toggle  
- **Fully Responsive**: Works perfectly on all devices and screen sizes
- **Modern Navigation**: Clean navigation with smooth theme switching
- **Performance Optimized**: Built with Next.js 15 and React 19 for optimal performance
- **TypeScript**: Fully typed for better development experience
- **Professional Sections**: Hero, About, Work, and Contact sections
- **Enhanced Visual Design**: Subtle particle animations and fluid interactions that impress without overwhelming
- **Improved Typography**: Better text hierarchy and spacing for enhanced readability
- **Interactive Elements**: Smooth hover effects, glowing cards, and animated gradients
- **Professional Aesthetics**: Clean glassmorphism effects and modern visual language

## 🛠️ Tech Stack

- **Framework**: Next.js 15.3.3
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Font**: Geist Sans & Geist Mono
- **Icons**: Custom SVG icons
- **Development**: Turbopack for faster builds

## 📱 Sections

1. **Hero Section**: Introduction with typewriter effect
2. **About**: Personal introduction and quick facts
3. **Skills**: Technical skills and technologies
4. **Projects**: Featured project showcases
5. **Contact**: Contact information and links

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3030](http://localhost:3030) in your browser

## 📝 Available Scripts

- `npm run dev` - Start development server on port 3030
- `npm run build` - Build the application for production
- `npm run start` - Start production server on port 3030
- `npm run lint` - Run ESLint for code linting

## 🎨 Customization

### Personal Information

Update the following files with your information:

1. **`src/app/page.tsx`**: Update personal details, skills, and project information
2. **`src/app/layout.tsx`**: Update meta tags and title
3. **`src/components/Navigation.tsx`**: Customize navigation items

### Styling

- **Colors**: Modify CSS variables in `src/app/globals.css`
- **Layout**: Adjust Tailwind classes in components
- **Animations**: Customize animations in `tailwind.config.ts`

### Adding Projects

To add your projects, update the projects section in `src/app/page.tsx`:

```tsx
// Replace the placeholder project cards with your actual projects
<div className="bg-background rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
  <div className="w-full h-48 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg mb-4">
    {/* Add project image */}
  </div>
  <h3 className="text-xl font-semibold mb-2">Your Project Name</h3>
  <p className="text-muted mb-4">Project description</p>
  {/* Add project links */}
</div>
```

## 📧 Contact Information

Update the contact section with your actual information:

- Email: Replace `your.email@example.com`
- LinkedIn: Update the LinkedIn URL
- GitHub: Add your GitHub username

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with one click

### Netlify

1. Build the project: `npm run build`
2. Deploy the `out` folder to [Netlify](https://netlify.com)

### Other Platforms

The project can be deployed to any platform that supports Node.js applications.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

---

Built with ❤️ by Guilherme Grancho
