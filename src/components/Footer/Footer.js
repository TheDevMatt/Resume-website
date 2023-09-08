import React from 'react';
import {Link} from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GithubIcon from '@mui/icons-material/GitHub';
import Image from '../../Images/Logo.png'
import '../../styles/Footer.css';

const Footer = () => {
return(
    <div className='footer-container'>
        <img src={Image} alt='logo' className='footer-logo'/>
        <div className='footer-contact'>
        <Link to={`mailto:${process.env.REACT_APP_EMAIL}`} className='footer-email'>mateusz.k0710@gmail.com</Link>
        <Link to={process.env.REACT_APP_LINKEDIN} target='_blank' className='navigation-social linkedIn'><LinkedInIcon/></Link>
        <Link to={process.env.REACT_APP_GITHUB} target='_blank' className='navigation-social GitHub'><GithubIcon/></Link>
        </div>
    </div>
)
}

export default Footer;