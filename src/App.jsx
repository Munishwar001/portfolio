import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import About from './components/About'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import Blog from './components/Blog'
import Contact from './components/Contact'

function App() {
  const [activePage, setActivePage] = useState('about')

  return (
    <main>
      <Sidebar />
      <div className="main-content">
        <Navbar activePage={activePage} setActivePage={setActivePage} />
        <About isActive={activePage === 'about'} />
        <Resume isActive={activePage === 'resume'} />
        <Portfolio isActive={activePage === 'portfolio'} />
        <Blog isActive={activePage === 'blog'} />
        <Contact isActive={activePage === 'contact'} />
      </div>
    </main>
  )
}

export default App
