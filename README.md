<div align="center">

# 🧪 Chemistry Portfolio Template

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![Three.js](https://img.shields.io/badge/Three.js-Latest-black?style=flat-square&logo=three.js)](https://threejs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer-Motion-0055FF?style=flat-square&logo=framer)](https://www.framer.com/motion/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

**A modern, animated, and responsive personal website template for Chemistry students & professionals**

[Demo](https://your-live-link.com) • [Features](#-features) • [Installation](#%EF%B8%8F-installation--setup) • [Tech Stack](#-tech-stack) • [Customization](#%EF%B8%8F-customization)

</div>

## ✨ Features

<div align="center">
<table>
  <tr>
    <td width="50%">
      <h3>⚛️ Modern Technology</h3>
      <ul>
        <li>Built with Next.js 14 for optimal performance</li>
        <li>Interactive Three.js animations and effects</li>
        <li>SEO-optimized architecture</li>
        <li>Responsive design for all devices</li>
      </ul>
    </td>
    <td width="50%">
      <h3>🎨 Beautiful UI/UX</h3>
      <ul>
        <li>Clean, minimal design language</li>
        <li>Smooth page transitions with Framer Motion</li>
        <li>Fully responsive across all devices</li>
        <li>Tailwind CSS for modern styling</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td width="50%">
      <h3>📊 Academic Showcase</h3>
      <ul>
        <li>Dedicated education timeline section</li>
        <li>Research and project showcases</li>
        <li>Publications and certifications display</li>
        <li>Interactive research highlights</li>
      </ul>
    </td>
    <td width="50%">
      <h3>🛠️ Practical Tools</h3>
      <ul>
        <li>Downloadable CV/resume functionality</li>
        <li>Integrated contact form with validation</li>
        <li>Easy customization options</li>
        <li>Molecular structure 3D models</li>
      </ul>
    </td>
  </tr>
</table>
</div>


## 🧰 Tech Stack

<div align="center">

| Technology | Description |
|:----------:|:------------|
| ![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js) | React framework with SSR capabilities |
| ![Three.js](https://img.shields.io/badge/Three.js-Latest-black?style=flat-square&logo=three.js) | JavaScript 3D library for molecular visualizations |
| ![Tailwind](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=flat-square&logo=tailwind-css) | Utility-first CSS framework |
| ![Framer](https://img.shields.io/badge/Framer-Motion-0055FF?style=flat-square&logo=framer) | Animation library for smooth transitions |
| ![EmailJS](https://img.shields.io/badge/Email-JS-FF9A00?style=flat-square) | Contact form functionality |
| ![React Icons](https://img.shields.io/badge/React-Icons-61DAFB?style=flat-square&logo=react) | Icon library for UI elements |

</div>

## 📁 Project Structure

```
Chemistry-Portfolio/
│
├── 📂 public/             # Static assets (images, favicon, CV)
│   ├── images/            # Portfolio images and graphics
│   ├── models/            # 3D molecular models
│   └── resume.pdf         # Your downloadable CV/resume
│
├── 📂 components/         # Reusable UI components
│   ├── layout/            # Layout components (Navbar, Footer)
│   ├── home/              # Homepage specific components
│   ├── about/             # About page components
│   ├── projects/          # Projects gallery components
│   └── contact/           # Contact form components
│
├── 📂 pages/              # Next.js pages
├── 📂 styles/             # Global and component styles
├── 📂 three/              # Three.js configurations
└── 📂 utils/              # Helper functions
```

## ⚙️ Installation & Setup

Get up and running in minutes:

```bash
# Clone the repository
git clone https://github.com/niladri-1/Chemistry-Portfolio.git

# Navigate to project directory
cd Chemistry-Portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see your site in action!

## 🚀 Deployment

Deploy your portfolio with one click:

<div align="center">
  <table>
    <tr>
      <td align="center" width="33%">
        <img src="https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg" width="40" height="40"/><br />
        <strong>Vercel</strong><br />
        <a href="https://vercel.com/new/git/external?repository-url=https://github.com/niladri-1/Chemistry-Portfolio">Deploy</a>
      </td>
      <td align="center" width="33%">
        <img src="https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg" width="40" height="40"/><br />
        <strong>Netlify</strong><br />
        <a href="https://app.netlify.com/start/deploy?repository=https://github.com/niladri-1/Chemistry-Portfolio">Deploy</a>
      </td>
      <td align="center" width="33%">
        <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width="40" height="40"/><br />
        <strong>GitHub Pages</strong><br />
        <a href="https://pages.github.com/">Deploy</a>
      </td>
    </tr>
  </table>
</div>

## ✏️ Customization

Make it yours with these simple customization steps:

### 1️⃣ Personal Information
- Update `config.js` with your details
- Replace placeholder images in `/public/images/`
- Add your own CV/resume to `/public/`

### 2️⃣ Content Sections
- Modify education timeline in `data/education.js`
- Add projects to `data/projects.js`
- Customize skills in `data/skills.js`

### 3️⃣ Styling & Design
- Change color scheme in `styles/variables.css`
- Adjust animations in `config/animations.js`
- Modify component layouts in their respective files

### 4️⃣ Three.js Elements
- Replace molecular models in `/public/models/`
- Adjust camera settings in `three/config.js`
- Customize animation effects in `three/animations.js`

## 👥 Who Is This For?

This template is perfect for:

- 🧪 Chemistry students (B.Sc./M.Sc./Ph.D.)
- 🔬 Laboratory Researchers and Assistants
- 🧫 Biochemistry and molecular biology specialists
- 🎓 Chemistry **Professors** and **Educators**
- 💼 Industry professionals in chemical sciences

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

<div align="center">

## 💬 Contribute & Support

Contributions are welcome! Feel free to open issues and submit PRs.

⭐ **Star this repo if you find it useful!** ⭐

[Report Bug](https://github.com/niladri-1/Chemistry-Portfolio/issues) •
[Request Feature](https://github.com/niladri-1/Chemistry-Portfolio/issues) •
[Send Feedback](mailto:code.niladri+issuegithub@gmail.com.com)

---

<sub>Developed and maintained by [Niladri Chatterjee](https://github.com/niladri-1) with ⚛️ and 🧪</sub>

</div>