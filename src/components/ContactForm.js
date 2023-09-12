import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';


const LoadingScreen = () => {
    return (
        <div className="loadingScreen">
        <div className="loader"></div>
        </div>
    );
};

function ContactForm() {
    const form = useRef();
    const [isSent, setIsSent] = useState(false);
    const [processing, setProcessing] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setProcessing(true);
        emailjs.sendForm('service_7sy4juq', 'template_xbgttke', form.current, 'nMr1AfDr8eLyUkkaP')
        .then((result) => {
            setIsSent(true);
            setProcessing(false);
        }, (error) => {
            setProcessing(false);
        });
    };

    if (isSent) {
        return (
            <div className="contactForm">
                <h1 className="bigTitle">Thank you for you message!</h1>
            </div>
        );
    }
    else {
        return (
            <div className="contactForm">
                {processing && <LoadingScreen />}
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
}

export default ContactForm;