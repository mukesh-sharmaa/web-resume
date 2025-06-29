import '../style/contactMe.css';
import personalInfo from '../data/aboutme.json';
import { Fragment } from 'react/jsx-runtime';

export default function Contact(){   
    
    return(
        <div className='container-app'>
        <h1>CONTACT ME</h1>
        <div className="contact-container">
           
            <div >
            <form className='form-container'>
                <label for="firstName">First Name</label>
                <input type='text' id='firstName' />
                <label for="lastName">Last Name</label>
                <input type='text' id='lastName' />
                <label for="email">Email</label>
                <input type='email' id='email' />
                <label for="message">Type your message here...</label>
                <input type='textarea' id='message' />
                <button type='submit'>Submit</button>
            </form>
            </div>
            <div className='contact-info'>
                <p>{personalInfo.name}</p>
                <p>{personalInfo.position}</p>
                <p>Phone:</p>
                <p>{personalInfo.phone}</p>
                <p>Email:</p>
                <p>{personalInfo.emailId}</p> 
            </div>
        </div>
        </div>
        
    )
}