// import { BsLinkedin, BsGithub  } from 'react-bootstrap-icons'

const Footer = () => {


  return (
    <div className="footer">
      <div>
        <h5>Developed by Jason McKenna</h5>
      </div>
      <div className='social-links'>
        <a className='social-link' href="https://www.linkedin.com/in/jason-mckenna-69b5a1117/"  target='_blank' rel="noreferrer">
          {/* <BsLinkedin /> */}
          <i className="fab fa-linkedin"></i>
          <h6>LinkedIn</h6>
        </a>

        <a className='social-link' href="https://github.com/jasonmckenna00"  target='_blank' rel="noreferrer">
          <i className="fab fa-github"></i>
          {/* <BsGithub /> */}
          <h6>Github</h6>
        </a>
  {/* 
        <a href="https://angel.co/jason-mckenna-4"  target='_blank' rel="noreferrer">
          <i className="fab fa-angellist"></i>
          <h6>AngelList</h6>
        </a> */}
        <a className='social-link' href="https://jasonmckenna.tech"  target='_blank' rel="noreferrer">
          <i className="fas fa-desktop"></i> 
          <h6>Personal Site</h6>
        </a>

      </div>
    </div>
  )
}

export default Footer