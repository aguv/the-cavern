import React from 'react'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
    return (
        <div className='bg-gray-800 h-16 w-auto shadow-lg flex justify-center items-center'>
            <a href='https://github.com/aguv'>
                <FontAwesomeIcon icon={faGithub} size="2x" className='hover:text-yellow-300'/>
            </a>
            <p className='mx-10'>aguv - 2021</p>
            <a href='https://www.linkedin.com/in/aguvazquez912/'>
                <FontAwesomeIcon icon={faLinkedin} size="2x" className='hover:text-yellow-300'/>
            </a>
        </div>
    )
}

export default Footer
