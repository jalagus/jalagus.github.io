import React from 'react';

function ContactForm() {
    return (
        <div className='contactForm'>
            <h1 className='bigTitle'>Leave a message!</h1>
            <div>
                <form>
                    <input type='text' name='name' placeholder='Name' />
                    <input type='email' name='email' placeholder='Email' />
                    <textarea name="message" placeholder='Message'></textarea>
                    <button className='buttonStyle' type='submit'>Send message</button>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;