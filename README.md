# Nafis Ahmed Khan - Portfolio Website

A modern, responsive single-page application showcasing my professional experience, skills, and projects as a Software Engineer.

## 🚀 Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Modern UI** - Clean, professional design with smooth animations
- **Single Page Application** - Easy navigation with smooth scrolling
- **Organized Sections**:
  - Hero/Landing section with contact information
  - About section with professional summary
  - Skills & Technologies showcase
  - Work Experience timeline
  - Education background
  - Featured Projects with details
  - Contact information

## 🛠️ Technologies Used

- **React 18** - Modern React with functional components
- **CSS3** - Custom styling with gradients, animations, and responsive design
- **Inter Font** - Clean, professional typography
- **Emoji Icons** - Modern, accessible icons throughout the site

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.js          # Navigation header
│   ├── Hero.js            # Landing section
│   ├── About.js           # About me section
│   ├── Skills.js          # Skills showcase
│   ├── Experience.js      # Work experience
│   ├── Education.js       # Educational background
│   ├── Projects.js        # Featured projects
│   └── Contact.js         # Contact information
├── data/
│   └── resumeData.js      # All portfolio data centralized
├── styles/
│   └── App.css            # Main stylesheet
├── App.js                 # Main application component
└── index.js               # React entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd myprofile
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

4. Open your browser and visit `http://localhost:3000`

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop computers (1200px+)
- Tablets (768px - 1199px)
- Mobile phones (< 768px)

## 🎨 Customization

To update your information:

1. **Personal Information**: Edit `src/data/resumeData.js` - `personal` object
2. **Skills**: Update the `skills` array in `resumeData.js`
3. **Experience**: Modify the `experience` array
4. **Projects**: Update the `projects` array
5. **Education**: Edit the `education` array

## 🚀 Deployment Options

### 1. Netlify (Recommended)
```bash
npm run build
# Drag and drop the 'build' folder to Netlify
```

### 2. Vercel
```bash
npm install -g vercel
vercel
```

### 3. GitHub Pages
```bash
npm install --save-dev gh-pages
npm run build
npx gh-pages -d build
```

### 4. Firebase Hosting
```bash
npm install -g firebase-tools
npm run build
firebase init hosting
firebase deploy
```

## 📧 Contact

- **Email**: nafisahmedkhan9@gmail.com
- **Phone**: +919769574878
- **LinkedIn**: [linkedin.com/in/nafisahmedkhan9993](https://www.linkedin.com/in/nafisahmedkhan9993)
- **GitHub**: [github.com/nafisahmedkhan9](https://github.com/nafisahmedkhan9)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by Nafis Ahmed Khan
