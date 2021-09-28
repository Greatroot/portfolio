import React, {useRef} from 'react';
import { useState } from "react";
import styled from "styled-components";
import emailjs from 'emailjs-com'

const ContactForm = () => {
    const form = useRef();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        console.log("sendEmail got clicked")
        console.log(e);

        emailjs.sendForm('service_0lvha8a', 'template_1t05avr', form.current, 'user_xZNb5R42OllQccqbn22Yx')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
            console.log(error.text);
        });
        // e.target.reset();
    };

    return (
        <div>
            <FormStyles onSubmit={sendEmail} ref={form}>
                <div className="form-group">
                    <label htmlFor="name">Your name
                        <input type="text"
                               name="name"
                               id="name"
                               value={name}
                               onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Your email
                        <input type="text"
                               name="email"
                               id="email"
                               value={email}
                               onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="message">Your message
                        <textarea id="message"
                                  name="message"
                                  value={message}
                                  onChange={(e) => setMessage(e.target.value)}
                        />
                    </label>
                </div>
                <button type="submit" onClick={sendEmail}>Send</button>
            </FormStyles>
        </div>
    );
};

export default ContactForm;

const FormStyles = styled.form`
  width: 100%;
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
  }
  label {
    font-size: 1.8rem;
  }
  input, textarea {
    width: 100%;
    font-size: 2rem;
    padding: 1.2rem;
    color: var(--gray-1);
    background-color: var(--deep-dark);
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;
  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }
  button[type='submit'] {
    background-color: var(--gray-1);
    color: var(--black);
    font-size: 2rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem 4rem;
    border-radius: 8px;
    cursor: pointer;
  }
`;