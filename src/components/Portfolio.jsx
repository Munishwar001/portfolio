import { useState } from 'react'

function Portfolio({ isActive }) {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [isSelectOpen, setIsSelectOpen] = useState(false)

  const categories = ['All', 'Web design', 'Applications', 'Web development']

  const projects = [
    {
      title: 'Finance',
      category: 'web development',
      image: '/assets/images/project-1.jpg'
    },
    {
      title: 'Orizon',
      category: 'web development',
      image: '/assets/images/project-2.png'
    },
    {
      title: 'Fundo',
      category: 'web design',
      image: '/assets/images/project-3.jpg'
    },
    {
      title: 'Brawlhalla',
      category: 'applications',
      image: '/assets/images/project-4.png'
    },
    {
      title: 'DSM.',
      category: 'web design',
      image: '/assets/images/project-5.png'
    },
    {
      title: 'MetaSpark',
      category: 'web design',
      image: '/assets/images/project-6.png'
    },
    {
      title: 'Summary',
      category: 'web development',
      image: '/assets/images/project-7.png'
    },
    {
      title: 'Task Manager',
      category: 'applications',
      image: '/assets/images/project-8.jpg'
    },
    {
      title: 'Arrival',
      category: 'web development',
      image: '/assets/images/project-9.png'
    }
  ]

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory)

  const handleCategorySelect = (category) => {
    setSelectedCategory(category.toLowerCase())
    setIsSelectOpen(false)
  }

  return (
    <article className={`portfolio ${isActive ? 'active' : ''}`} data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        <ul className="filter-list">
          {categories.map((category) => (
            <li key={category} className="filter-item">
              <button
                className={selectedCategory === category.toLowerCase() ? 'active' : ''}
                onClick={() => setSelectedCategory(category.toLowerCase())}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>

        <div className="filter-select-box">
          <button
            className={`filter-select ${isSelectOpen ? 'active' : ''}`}
            onClick={() => setIsSelectOpen(!isSelectOpen)}
          >
            <div className="select-value">
              {categories.find(cat => cat.toLowerCase() === selectedCategory) || 'Select category'}
            </div>
            <div className="select-icon">
              <ion-icon name="chevron-down"></ion-icon>
            </div>
          </button>

          <ul className="select-list">
            {categories.map((category) => (
              <li key={category} className="select-item">
                <button onClick={() => handleCategorySelect(category)}>
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <ul className="project-list">
          {filteredProjects.map((project, index) => (
            <li
              key={index}
              className="project-item active"
              data-filter-item
              data-category={project.category}
            >
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>
                  <img src={project.image} alt={project.title} loading="lazy" />
                </figure>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.category}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}

export default Portfolio
