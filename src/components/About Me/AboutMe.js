import React from 'react';
import WavingHandIcon from '@mui/icons-material/WavingHand';
import '../../styles/AboutMe.css';
import ImageOfMe from '../../Images/AboutMe.png';

const AboutMe = () => {
    return(
        <div className='aboutMe-container'>
            <h1>About Me</h1>
            <section className='aboutMe'>
            <img src={ImageOfMe} alt='Mateusz Kot' className='aboutMe-imageOfMe'/>
            <div className='aboutMe-description'>
            <h2>Hey. What's Up? Hello! <WavingHandIcon fontSize='small'/></h2>
            <p>I'm Mateusz Kot - <span>frontend developer</span> and <span>Computer Science Engineer</span> who blends the best of engineering knowledge and frontend development into creating well looking and responsive web applications.
            <br/><br/>
            But when I'm not hitting commits to Git repository, I'm probably at the gym or watching the latest series on Netflix. Leading an active lifetyle is my personal goal and I don't mind playing football with my peers.
            <br/><br/>
            As my surname suggests - Cat in English - I am a huge fan of cats and I have one!
            </p>
            </div>
            </section>
        </div>
    )
}

export default AboutMe;