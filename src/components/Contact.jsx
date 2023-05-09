import './CSS/Contact.css'

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="section-center">
        <h3>Join our newsletter and get 20% off</h3>
        <div className="contact-content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos iusto
            quo necessitatibus magni error quas ipsam nisi maiores repudiandae
            sed!
          </p>
          <form
            action="https://formspree.io/f/meqwnprd"
            method="POST"
            className="contact-form"
          >
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Enter E-mail"
              required
            />
            <button className="submit-btn">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
