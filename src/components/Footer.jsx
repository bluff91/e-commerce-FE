import './CSS/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <h5>
        &copy;{new Date().getFullYear()}
        <span className="footer-trademark"> ComfySloth</span>
      </h5>
      <h5>All rights reserved</h5>
    </footer>
  )
}

export default Footer
