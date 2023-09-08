import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import '../../styles/AdditionalTechnologies.css';

const AdditionalTechnologies = () => {
    return(
        <div className='additionalTechnologies-container'>
        <h1 className='additionalTechnologies-heading'>Additional Technologies and Skills</h1>
        <p>Below you can find my additional skills:</p>
        <ul className='additionalTechnologies-list'>
            <li><ArrowForwardIcon sx={{color:'#8C61D6'}} fontSize='large'/><span>Responsive Web Design</span></li>
            <li><ArrowForwardIcon sx={{color:'#8C61D6'}} fontSize='large'/><span>C1 English</span></li>
            <li><ArrowForwardIcon sx={{color:'#8C61D6'}} fontSize='large'/><span>B1 German</span></li>
            <li><ArrowForwardIcon sx={{color:'#8C61D6'}} fontSize='large'/><span>Teamwork</span></li>
            <li><ArrowForwardIcon sx={{color:'#8C61D6'}} fontSize='large'/><span>Public speaking</span></li>
            <li><ArrowForwardIcon sx={{color:'#8C61D6'}} fontSize='large'/><span>Canva</span></li>
        </ul>
        </div>
    )
}

export default AdditionalTechnologies;