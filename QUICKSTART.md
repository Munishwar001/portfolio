# Quick Start Guide - React Portfolio

## Get Started in 3 Steps

### 1️⃣ Install Dependencies
```bash
npm install
```

### 2️⃣ Run Development Server
```bash
npm run dev
```

### 3️⃣ Open in Browser
Navigate to: `http://localhost:5173`

---

## 🎯 What Changed?

### Original (HTML/CSS/JS)
- Single `index.html` file with all content
- Vanilla JavaScript for interactivity
- Manual DOM manipulation

### React Version
- Component-based architecture
- Declarative UI with JSX
- React state management
- Vite for fast development

---

## 📂 File Comparison

| Original | React Version |
|----------|---------------|
| `index.html` | `index-react.html` + `src/App.jsx` |
| `assets/js/script.js` | Split into component files |
| Inline HTML | JSX in component files |

---

## 🔥 Key Features

✅ **Sidebar Toggle** - Click "Show Contacts" to expand/collapse  
✅ **Page Navigation** - Switch between About, Resume, Portfolio, Blog, Contact  
✅ **Testimonials Modal** - Click any testimonial to view full details  
✅ **Portfolio Filter** - Filter projects by category  
✅ **Form Validation** - Contact form validates before submission  
✅ **Responsive Design** - Works on mobile, tablet, and desktop  

---

## 🛠️ Common Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🎨 Customization Tips

### Change Your Name & Title
**File:** `src/components/Sidebar.jsx`
```jsx
<h1 className="name">Your Name</h1>
<p className="title">Your Title</p>
```

### Update Contact Info
**File:** `src/components/Sidebar.jsx`
```jsx
<a href="mailto:your@email.com">your@email.com</a>
<a href="tel:+1234567890">+1 (234) 567-890</a>
```

### Add New Projects
**File:** `src/components/Portfolio.jsx`
```jsx
const projects = [
  {
    title: 'Your Project',
    category: 'web development',
    image: '/assets/images/your-project.jpg'
  },
  // ... more projects
]
```

### Modify Skills
**File:** `src/components/Resume.jsx`
```jsx
const skills = [
  { name: 'React', level: 95 },
  { name: 'JavaScript', level: 90 },
  // ... more skills
]
```

---

## 🐛 Troubleshooting

### Port Already in Use?
```bash
# Vite will automatically try the next available port
# Or specify a custom port:
npm run dev -- --port 3000
```

### Images Not Loading?
- Ensure images are in `public/assets/images/` or `assets/images/`
- Check image paths start with `/assets/images/`

### Styles Not Applied?
- Verify `assets/css/style.css` is imported in `src/main.jsx`
- Clear browser cache and reload

---

## 📚 Learn More

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [React Hooks Guide](https://react.dev/reference/react)

---

## 🚀 Deploy

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Push the 'dist' folder to gh-pages branch
```

---

**Enjoy your new React portfolio! 🎉**
