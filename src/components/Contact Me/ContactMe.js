import React, {useState} from 'react';
import axios from 'axios';
import Api from "../API/Api";
import '../../styles/ContactMe.css';

const ContactMe = () => {

        const [formData, setFormData] = useState({
            name: '',
            email: '',
            message:'',
        })
        
        const handleChange = (e) => {
            setFormData({...formData, [e.target.name]: e.target.value });
        }
    
        const handleSubmit = async (e) => {
            e.preventDefault();
        
        try {
        
        if(validateEmail()){
            await axios.post(`${Api.URL}/send-email`, formData);
            alert('Email sent successfully');
        }else {
            alert('Invalid email format. Please correct it!');
        }
        
        } catch(error){
            console.error("Error sending email:", error);
            alert('Failed to sent email');
        }

        setFormData({
            name: '',
            email: '',
            message: '',
        })
    }

    const validateEmail = () => {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        return regex.test(formData.email);
    }
    
    return(
        <div className='contactMe-container'>
            <h1>Contact Me</h1>
            <div className='contactMe-form'>
            <p>Do not hesitate to contact me! If you would like to get in touch with me, below you can find the form. </p>
            <form onSubmit={handleSubmit}>
                <p>Name</p>
                <input type='text' name='name' id='input-name' value={formData.name} onChange={handleChange} />
                <p>Email</p>
                <input type='email' name='email' id='input-email' value={formData.email} onChange={handleChange} />
                <p>Message</p>
                <textarea name='message' rows='12' id='textarea-message' value={formData.message} onChange={handleChange}/>
                <button type='submit'>Send</button>
            </form>
            </div>
        </div>
    )
}

export default ContactMe;