import EmailIcon from "../images/email_icon.png"
import LinkedInIcon from "../images/linkedin_icon.png"
import GitHubIcon from "../images/github_icon.png"

const Contact = () => {
  return (
    <section className="contact-me-page">
      <h1>Contact Information</h1>
      <div className="contact-links">
        <div className="contact-link">
          <img src={EmailIcon} alt="Email Icon" />
          <h4><a href="mailto: robertojrodriguez21@gmail.com">Email</a></h4>
        </div>
        <div className="contact-link">
          <img src={LinkedInIcon} alt="LinkedIn Icon" />
          <h4><a href="https://www.linkedin.com/in/rob-jes-rod/" target='_blank'>LinkedIn</a></h4>
        </div>
        <div className="contact-link">
          <img src={GitHubIcon} alt="GitHub Icon" />
          <h4><a href="https://github.com/robertojrodriguez21" target='_blank'>GitHub</a></h4>
        </div>
      </div>
    </section>
  )
}
export default Contact