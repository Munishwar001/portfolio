function Navbar({ activePage, setActivePage }) {
  const navItems = ['About', 'Resume', 'Portfolio', 'Blog', 'Contact']

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {navItems.map((item) => (
          <li key={item} className="navbar-item">
            <button
              className={`navbar-link ${activePage === item.toLowerCase() ? 'active' : ''}`}
              onClick={() => {
                setActivePage(item.toLowerCase())
                window.scrollTo(0, 0)
              }}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
