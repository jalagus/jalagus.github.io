import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

function ContactForm() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_7sy4juq', 'template_xbgttke', form.current, 'nMr1AfDr8eLyUkkaP')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <div className="contactForm">
            <h1 className="bigTitle">Leave a message!</h1>
            <div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Name" />
                    <input type="email" name="email" placeholder="Email" />
                    <textarea name="message" placeholder="Message"></textarea>
                    <button className="buttonStyle" type="submit">Send message</button>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;