import './CSS/Services.css'
import { services } from '../utils/constants'

const Services = () => {
  return (
    <div className="services-container">
      <div className="section-center services-section">
        <article className="header">
          <h3>
            custom furniture
            <br />
            built only for you
          </h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
            eius voluptates nam atque magnam voluptatem molestiae ex placeat
            temporibus consequatur?
          </p>
        </article>
        <div className="services-center">
          {services.map((service) => {
            const { id, icon, title, text } = service
            return (
              <article key={id} className="service">
                <span className="icon">{icon}</span>
                <h4>{title}</h4>
                <p>{text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Services
