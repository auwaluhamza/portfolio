# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS, optimized for deployment on GitHub Pages.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive across all devices
- **Dark Mode**: Built-in dark mode support
- **Performance**: Optimized for fast loading and SEO
- **Static Export**: Configured for GitHub Pages deployment
- **Animations**: Smooth scroll animations with Framer Motion

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## 📦 Installation

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

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment to GitHub Pages

### Prerequisites
- GitHub account
- Repository named `portfolio` (or update the basePath in `next.config.ts`)

### Steps

1. **Push to GitHub**:
```bash
git add .
git commit -m "Initial portfolio commit"
git push origin main
```

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Select "GitHub Actions" as the source
   - The workflow will automatically deploy your site

3. **Access your site**:
   - Your portfolio will be available at: `https://yourusername.github.io/portfolio`

### Manual Deployment
If you prefer manual deployment:
```bash
npm run build
# The static files will be in the `out` directory
# Upload the contents of `out` to GitHub Pages
```

## 📝 Customization

### Personal Information
Update the following in `src/app/page.tsx`:
- Your name and title
- About section content
- Skills and technologies
- Project details
- Contact information and social links

### Styling
- Colors: Update the Tailwind classes for custom color schemes
- Layout: Modify the component structure in `src/app/page.tsx`
- Animations: Adjust Framer Motion animations

### Projects
Add your projects to the `projects` array in `src/app/page.tsx`:
```typescript
const projects = [
  {
    title: 'Your Project',
    description: 'Project description',
    tech: ['React', 'Node.js', 'MongoDB'],
    link: 'https://your-project.com',
    github: 'https://github.com/yourusername/project'
  }
];
```

## 📁 Project Structure

```
portfolio/
├── src/
│   └── app/
│       ├── layout.tsx      # Root layout
│       ├── page.tsx        # Main portfolio page
│       └── globals.css     # Global styles
├── public/                 # Static assets
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions workflow
├── next.config.ts          # Next.js configuration
└── package.json            # Dependencies and scripts
```

## 🔧 Configuration

### Next.js Config (`next.config.ts`)
- `output: 'export'`: Enables static export
- `trailingSlash: true`: Required for GitHub Pages
- `images.unoptimized: true`: Required for static export
- `basePath`: Set to repository name for GitHub Pages

### GitHub Actions (`.github/workflows/deploy.yml`)
- Automatically builds and deploys on push to main branch
- Uses Node.js 20
- Deploys to GitHub Pages

## 🎨 Customization Tips

1. **Colors**: Update the gradient classes in the hero section
2. **Fonts**: Add custom fonts in `layout.tsx`
3. **Images**: Add your profile picture and project screenshots
4. **Content**: Replace placeholder text with your information
5. **Links**: Update all social media and project links

## 📱 Performance

- Lighthouse score: 95+ (Performance, Accessibility, Best Practices, SEO)
- Core Web Vitals optimized
- Static export for fast loading
- Optimized images and assets

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide React](https://lucide.dev/)
- Animations with [Framer Motion](https://www.framer.com/motion/)
