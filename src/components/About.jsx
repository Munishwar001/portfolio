import { useState } from 'react'

function About({ isActive }) {
  const [modalData, setModalData] = useState(null)

  const services = [
    {
       icon: '/assets/images/icon-dev.svg',
       title: 'Full Stack Development',
      description: 'Building scalable web applications using React, Node.js, and modern backend technologies.'
    },
    {
      icon: '/assets/images/icon-app.svg',
      title: 'Frontend Development',
    description: 'Creating responsive, fast, and user-friendly interfaces with clean UI and smooth UX.'
    },
    {
      icon: '/assets/images/icon-app.svg',
      title: 'Backend & APIs',
      description: 'Designing secure REST APIs, authentication systems, and efficient server-side logic.'
    },
    {
      icon: '/assets/images/icon-photo.svg',
       title: 'Database & Performance',
    description: 'Working with databases to optimize performance and ensure data reliability.'
    }
  ]

  const testimonials = [
    {
      avatar: '/assets/images/avatar-1.png',
      name: 'Daniel lewis',
      text: 'Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.',
      date: '2021-06-14'
    },
    {
      avatar: '/assets/images/avatar-2.png',
      name: 'Jessica miller',
      text: 'Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.',
      date: '2021-06-14'
    },
    {
      avatar: '/assets/images/avatar-3.png',
      name: 'Emily evans',
      text: 'Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.',
      date: '2021-06-14'
    },
    {
      avatar: '/assets/images/avatar-4.png',
      name: 'Henry william',
      text: 'Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.',
      date: '2021-06-14'
    }
  ]

  const clients = [
    '/assets/images/logo-1-color.png',
    '/assets/images/logo-2-color.png',
    '/assets/images/logo-3-color.png',
    '/assets/images/logo-4-color.png',
    '/assets/images/logo-5-color.png',
    '/assets/images/logo-6-color.png'
  ]

  const openModal = (testimonial) => {
    setModalData(testimonial)
  }

  const closeModal = () => {
    setModalData(null)
  }

  return (
    <article className={`about ${isActive ? 'active' : ''}`} data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          I'm a Full Stack Developer based in Chandigarh, India, focused on building scalable and user-friendly web applications. 
          I enjoy transforming complex problems into simple, efficient, and intuitive digital solutions.
        </p>
        <p>
          My job is to build your website so that it is functional and user-friendly but at the same time attractive.
          Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring
          across your message and identity in the most creative way. 
        </p>
      </section>

      <section className="service">
        <h3 className="h3 service-title">What i'm doing</h3>
        <ul className="service-list">
          {services.map((service, index) => (
            <li key={index} className="service-item">
              <div className="service-icon-box">
                <img src={service.icon} alt={`${service.title} icon`} width="40" />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">{service.title}</h4>
                <p className="service-item-text">{service.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="testimonials">
        <h3 className="h3 testimonials-title">Testimonials</h3>
        <ul className="testimonials-list has-scrollbar">
          {testimonials.map((testimonial, index) => (
            <li key={index} className="testimonials-item">
              <div className="content-card" onClick={() => openModal(testimonial)}>
                <figure className="testimonials-avatar-box">
                  <img src={testimonial.avatar} alt={testimonial.name} width="60" />
                </figure>
                <h4 className="h4 testimonials-item-title">{testimonial.name}</h4>
                <div className="testimonials-text">
                  <p>{testimonial.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {modalData && (
        <div className="modal-container active">
          <div className="overlay" onClick={closeModal}></div>
          <section className="testimonials-modal">
            <button className="modal-close-btn" onClick={closeModal}>
              <ion-icon name="close-outline"></ion-icon>
            </button>
            <div className="modal-img-wrapper">
              <figure className="modal-avatar-box">
                <img src={modalData.avatar} alt={modalData.name} width="80" />
              </figure>
              <img src="/assets/images/icon-quote.svg" alt="quote icon" />
            </div>
            <div className="modal-content">
              <h4 className="h3 modal-title">{modalData.name}</h4>
              <time dateTime={modalData.date}>14 June, 2021</time>
              <div>
                <p>{modalData.text}</p>
              </div>
            </div>
          </section>
        </div>
      )}

      <section className="clients">
        <h3 className="h3 clients-title">Clients</h3>
        <ul className="clients-list has-scrollbar">
          {clients.map((client, index) => (
            <li key={index} className="clients-item">
              <a href="#">
                <img src={client} alt="client logo" />
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}

export default About
