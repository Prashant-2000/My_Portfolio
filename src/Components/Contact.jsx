import React from 'react'
import { FaInstagram } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { MdEmail } from "react-icons/md";

const Contact = () => {
    return (
        <>
            <div className="container contact" id='contact'>
                <h1>CONTACT ME</h1>
                <div className="contact-icon"
                
                data-aos="zoom-in-up"
                data-aos-duration="1000"
                >
                    <a href="https://www.instagram.com/prashant_gogde/?hl=en" target='_blank' className="items"> <FaInstagram className='icons' />  </a>
                    <a href="https://www.facebook.com/prashant.gogde.3/" target='_blank' className="items"> <FaFacebook className='icons' />  </a>
                    <a href="https://www.linkedin.com/in/prashantgogde/" target='_blank' className="items"> <FaLinkedin className='icons' />  </a>
                    <a href="https://github.com/Prashant-2000" target='_blank' className="items"> <FaGithub className='icons' />  </a>
                    <a href="mailto:prashantgogde1006@gmail.com" target='_blank'  className="items"> <MdEmail className='icons' />  </a>
                </div>
            </div>

        </>
    )
}

export default Contact