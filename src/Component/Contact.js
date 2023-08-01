import React, { useState } from 'react';
import '../style/Contact.css'
import axios from 'axios'
function Contact() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        profession: "",
        message: "",
    });
    const handleChange = ( (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setUser({
            ...user,
            [name]: value
        })
    });
    const handleSubmit = () => {
        const { name, email, profession, message } = user;
        if (name, email, profession, message) {
            axios.post("http://localhost:5000/register", user)
                .then(res => { console.log(res) })
            alert("successfully posted")
            
        }
        else {
            alert("please fffill all the details")
        }
    };
    return (
        <div id='Contact' className="contact">
            <h1 className='conth'>Contact me</h1>
            <div className='aaa'>
                <div className='form'>
                    <div className='divinp'>
                        <input type="text" name='name' value={user.name} onChange={handleChange} className='inp' placeholder="👤   Enter your name" />
                    </div>
                    <div className='divinp'>
                        <input type="text" name='email' value={user.email} onChange={handleChange} className='inp' placeholder="💌   Enter your email" />
                    </div>
                    <div className='divinp'>
                        <input type="text" name='profession' value={user.profession} onChange={handleChange} className='inp ' placeholder="👨‍🎓   Enter your profession" />
                    </div>
                    <div className='divinp'>
                        <textarea name="message" value={user.message} onChange={handleChange} id="" cols="20" rows="5" placeholder="✍🏿 Enter your message" className='inp'></textarea>
                    </div>
                    <div className='divinp'>
                        <button onClick={handleSubmit} className='subm'>Submit</button>
                    </div>
                </div>
                <div className='imdiv'>
                    <img src={require('../Images/sasdf.jpg')} alt="salman" className='imgsal' />
                </div>
            </div>
        </div>
    );
}
export default Contact;