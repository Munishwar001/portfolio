# vCard Portfolio - React Version

This is a React conversion of the original HTML/CSS/JS portfolio website using Vite as the build tool.

## 🚀 Features

- ✅ Fully converted to React with component-based architecture
- ✅ Modern React hooks (useState) for state management
- ✅ Vite for fast development and optimized builds
- ✅ All original functionality preserved:
  - Responsive sidebar with contact information
  - Multi-page navigation (About, Resume, Portfolio, Blog, Contact)
  - Testimonials with modal popup
  - Portfolio filtering by category
  - Contact form with validation
  - Smooth animations and transitions

## 📁 Project Structure

```
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx       # Sidebar with contact info
│   │   ├── Navbar.jsx         # Navigation menu
│   │   ├── About.jsx          # About page with services & testimonials
│   │   ├── Resume.jsx         # Resume with education & experience
│   │   ├── Portfolio.jsx      # Portfolio with project filtering
│   │   ├── Blog.jsx           # Blog posts listing
│   │   └── Contact.jsx        # Contact form with map
│   ├── App.jsx                # Main app component
│   └── main.jsx               # React entry point
├── assets/                    # Images, CSS, and other assets
├── index-react.html           # HTML template for React
├── vite.config.js             # Vite configuration
└── package.json               # Dependencies and scripts
```

## 🛠️ Installation

1. Install dependencies:
```bash
npm install
```

## 🏃 Running the Application

### Development Mode
```bash
npm run dev
```
The app will be available at `http://localhost:5173`

### Build for Production
```bash
npm run build
```
This creates an optimized build in the `dist/` folder.

### Preview Production Build
```bash
npm run preview
```

## 🔄 Key Differences from Original

### State Management
- Sidebar toggle state managed with `useState`
- Active page navigation managed with `useState`
- Modal state for testimonials managed with `useState`
- Portfolio filter state managed with `useState`
- Form validation state managed with `useState`

### Component Structure
- Modular components for better maintainability
- Props passed between parent and child components
- Event handlers using React patterns

### Data Management
- Static data (services, testimonials, projects, etc.) stored as JavaScript arrays
- Easy to convert to API calls or external data sources

## 🎨 Styling

The original CSS (`assets/css/style.css`) is preserved and imported in `main.jsx`. All class names and styling remain the same for consistency.

## 📦 Dependencies

- **react**: ^18.3.1
- **react-dom**: ^18.3.1
- **vite**: ^5.3.1
- **@vitejs/plugin-react**: ^4.3.1

## 🔧 Customization

### Update Personal Information
Edit the data in `src/components/Sidebar.jsx` to update contact information.

### Add/Remove Projects
Modify the `projects` array in `src/components/Portfolio.jsx`.

### Update Blog Posts
Edit the `blogPosts` array in `src/components/Blog.jsx`.

### Modify Services
Update the `services` array in `src/components/About.jsx`.

## 🌐 Browser Support

Works on all modern browsers that support ES6+ and React 18.

## 📝 Notes

- The original `index.html` is preserved for reference
- Ion Icons are loaded via CDN (same as original)
- Google Fonts (Poppins) loaded via CDN
- All images remain in the `assets/images/` folder

## 🚀 Next Steps

Consider these enhancements:
- Add React Router for proper URL routing
- Implement API integration for dynamic content
- Add form submission to a backend service
- Implement dark/light theme toggle
- Add animations with Framer Motion
- Convert to TypeScript for type safety
- Add unit tests with Vitest

## 📄 License

Same as the original project.
