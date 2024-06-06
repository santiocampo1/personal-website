import React, { useState } from 'react'
import emailjs from 'emailjs-com';
import DOMPurify from 'dompurify';

export default function ContactMenu() {
    const initialState = {
        name: '',
        email: '',
        message: ''
    };    

    const [formData, setFormData] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const validateErrors = validateForm();
        if (Object.keys(validateErrors).length > 0) {
            setErrors(validateErrors);
            return;
        }

        setIsLoading(true);

        const {name, email, message} = formData;
        const sanitizedData = {
            name: "Name: " + DOMPurify.sanitize(name),
            email: "Email: " + DOMPurify.sanitize(email),
            message: "Message: " + DOMPurify.sanitize(message)
        };
        
        const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
        const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
        const userId = process.env.REACT_APP_EMAILJS_USER_ID;

        emailjs
        .send(serviceId, templateId, sanitizedData, userId)
        .then((response) => {
            console.log("Email has been sent successfully", response.text);
            setFormData(initialState);
            setErrors({});
            setIsSent(true);
        })
        .catch((error) => {
            console.log("Email has not been sent successfully", error);
        }) 
        .finally(() => {
            setIsLoading(false);
        });
    }

    const validateForm = () => {
        const errors = {};
        const {name, email, message} = formData;

        if(!name.trim()) {
            errors.name = 'Name is required';
        }

        if(!email.trim()) {
            errors.email = 'Email is required';
        } else if (!isValidEmail(email)) {  
            errors.email = 'Invalid email format';
        }

        if(!message.trim()) {
            errors.message = 'Message is required';
        }

        return errors;
    }

    const isValidEmail = (email) => {
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailRegex.test(email);
    }

    return (
        <div className='contact-menu'>
            {!isSent && (
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor="name">Name: </label>
                        <input type="text" name="name" id="name" placeholder='Name' value={formData.name} onChange={handleChange} className={errors.name? 'error' : ''} disabled={isLoading} />
                            {errors.name && <span className='error-message'>{errors.name}</span>}
                    </div>

                    <div className='form-group'>
                        <label htmlFor="email">Email: </label>
                        <input type="email" name="email" id="email" placeholder='Email' value={formData.email} onChange={handleChange} className={errors.email? 'error' : ''} disabled={isLoading} />
                            {errors.email && <span className='error-message'>{errors.email}</span>}
                    </div>

                    <div className='form-group'>
                        <label htmlFor="message">Message: </label>
                        <textarea name="message" id="message" placeholder='Message' value={formData.message} onChange={handleChange} className={errors.message? 'error' : ''} disabled={isLoading}></textarea>
                            {errors.message && <span className='error-message'>{errors.message}</span>}
                    </div>
                    <button type='submit' disabled={isLoading}>{isLoading ? "Sending..." : "Submit"}</button>
                </form>
            )}
            {isSent && 
            (<div className='success-message'>
                <p>SUCCESS!</p> 
                <p>Your message has been successfully sent!</p> 
                <p>You can safely leave this page.</p> 
            </div>)}
        </div>
    )
};

