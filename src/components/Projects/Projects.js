import React from 'react';
import ImageOfPC from '../../Images/Projects.png';
import '../../styles/Projects.css';

const Projects = () => {
return(
    <div className='projects-container'>
        <h1>Projects</h1>
        <section className='projects'>
        <div className='element'>
        <h2>#1 Recipe App</h2>
        <p>A recipe app allows users to search for recipes based on dish name or type of meal.</p>
        <img src={ImageOfPC} alt='PC'/>
        </div>
        </section>
    </div>
)
}

export default Projects;