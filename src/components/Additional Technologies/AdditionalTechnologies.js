import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import '../../styles/AdditionalTechnologies.css';

const AdditionalTechnologies = () => {
    return(
        <div className='additionalTechnologies-container'>
        <h1 className='additionalTechnologies-heading'>Additional Technologies and Skills</h1>
        <p>Below you can find my additional skills:</p>
        <ul className='additionalTechnologies-list'>
            <li><ArrowForwardIcon className='additionalTechnologies-icon' sx={{color:'#8C61D6'}}/><span>Responsive Web Design</span></li>
            <li><ArrowForwardIcon className='additionalTechnologies-icon' sx={{color:'#8C61D6'}}/><span>C1 English</span></li>
            <li><ArrowForwardIcon className='additionalTechnologies-icon' sx={{color:'#8C61D6'}}/><span>B1 German</span></li>
            <li><ArrowForwardIcon className='additionalTechnologies-icon' sx={{color:'#8C61D6'}}/><span>Teamwork</span></li>
            <li><ArrowForwardIcon className='additionalTechnologies-icon' sx={{color:'#8C61D6'}}/><span>Public speaking</span></li>
            <li><ArrowForwardIcon className='additionalTechnologies-icon' sx={{color:'#8C61D6'}}/><span>Canva</span></li>
        </ul>
        </div>
    )
}

export default AdditionalTechnologies;