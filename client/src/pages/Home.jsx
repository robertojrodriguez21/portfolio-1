// Imported Pictures
import myPicture from "../images/my_picture.png"
import laptopMan from "../images/laptop_man.png"
import whackAMole from "../images/whack_a_mole.jpeg"
import wishList from "../images/wish_list.jpeg"
import EmailIcon from "../images/email_icon.png"
import LinkedInIcon from "../images/linkedin_icon.png"
import GitHubIcon from "../images/github_icon.png"
import { useNavigate } from "react-router";

const Home = () => {
  let navigate = useNavigate()

  return (
    <>
    <section>
      <div className="my-picture-container"><img className="my-picture" src={myPicture} alt="My picture"></img></div>
      <div className="home-greeting">Hi, I'm Roberto!</div>
      <div className="job-title">Full-Stack Developer</div>
      <div className="intro">
        <p>
          Hello, my name is Roberto. I am an aspiring full-stack web application developer based in Illinois.
        </p>
      </div>
    </section>
    <section>
      <div className="section-title">My Work</div>
      <div className="laptop-man-container"><img className="laptop-man" src={laptopMan} alt="Man working on laptop"></img></div>
      <p>
        Below are a few pieces of work that I created and worked on as a team.
      </p>
      <hr></hr>
      <div className="project">
        <img src={whackAMole} alt="Whack-A-Mole Game"></img>
        <div className="project-info">
          <div className="project-title">Whack-A-Mole</div>
          <div className="project-buttons">
            <a href="https://github.com/robertojrodriguez21/whack-a-mole" target='_blank'>GitHub</a>
            <a href="https://my-whack-a-mole.surge.sh/index.html" target='_blank'>Deployed Site</a>
          </div>
          <p>Description</p>
        </div>
      </div>
      <hr></hr>
      <div className="project">
        <img src={wishList} alt="Wish List Application"></img>
        <div className="project-info">
          <div className="project-title">Wish List</div>
          <div className="project-buttons">
            <a href="https://github.com/robertojrodriguez21/wish-list" target='_blank'>GitHub</a>
            <a href="https://wish-list-1.herokuapp.com/" target='_blank'>Deployed Site</a>
          </div>
          <p>Description</p>
        </div>
      </div>
      <hr></hr>
      <button className="to-projects-button" onClick={() => navigate('/projects')} >View More Projects</button>
    </section>
    <section className="contact-me">
      <h1>Let's Chat!</h1>
      <div className="contact-links">
        <div className="contact-link">
          <img src={EmailIcon} alt="Email Icon" />
          <h4>Email</h4>
        </div>
        <div className="contact-link">
          <img src={LinkedInIcon} alt="LinkedIn Icon" />
          <h4>LinkedIn</h4>
        </div>
        <div className="contact-link">
          <img src={GitHubIcon} alt="GitHub Icon" />
          <h4>GitHub</h4>
        </div>
      </div>
    </section>
    </>
  )
}

export default Home