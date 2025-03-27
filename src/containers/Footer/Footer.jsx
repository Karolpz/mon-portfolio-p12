import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Lottie from 'lottie-react'
import rocketAnimation from '../../data/rocket.json'


const Footer = () => {

    const handleScrollTop = (event) => {
        event.preventDefault()
        window.scrollTo({ top: 0, behavior: "smooth" })
    }
  return (
    <footer className='footer'>
        <div className="linkRS">
              <FontAwesomeIcon icon = {faGithub} className='linkRS__github' />
              <FontAwesomeIcon icon={faLinkedin} className='linkRS__linkedin' />
        </div>
          <p>© 2025 - Caroline Lopez. Tous droits réservés.</p>
          <Lottie animationData={rocketAnimation} loop={true} className='rocketAnimation' onClick={handleScrollTop} />
    </footer>
  )
}

export default Footer