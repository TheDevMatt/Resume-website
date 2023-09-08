import React from 'react';
import {Link} from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GithubIcon from '@mui/icons-material/GitHub';
import '../../styles/Navigation.css';

const Navigation = () => {
return(
    <nav className='navigation'>
        <div className='navigation-container'>
        <Link to="/" className='navigation-logo'>
            M.K. portfolio
        </Link>
        <ul className='navigation-menu'>
            <li className='navigation-option'><Link to='/' className='navigation-home'>Home</Link></li>
            <li className='navigation-option'><Link to='/Projects' className='navigation-projects'>Projects</Link></li>
            <li className='navigation-option'><Link to='/AboutMe' className='navigation-about-me'>About me</Link></li>
            <li className='navigation-option'><Link to={process.env.REACT_APP_RESUME} target='_blank' className='navigation-my-resume'>My resume</Link></li>
        </ul>
        <div className='navigation-socials'>
            <Link to={process.env.REACT_APP_LINKEDIN} target='_blank' className='navigation-social linkedIn'><LinkedInIcon/></Link>
            <Link to={process.env.REACT_APP_GITHUB} target='_blank' className='navigation-social GitHub'><GithubIcon/></Link>
        </div>
        </div>
    </nav>
)
}

export default Navigation;