import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faSquarePhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';


function Contact() {
    const [msg, setMsg] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const scriptURL = 'https://script.google.com/macros/s/AKfycbyfgUluWKgc8UMfZSrit-N3Imxojmc7BWl3YYLkPJZiAm0YLkLsEjLzcvJQRbfaBN1h8g/exec';
        const form = e.target;
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                setMsg("Message sent successfully");
                setTimeout(() => setMsg(""), 5000);
                form.reset();
            })
            .catch(error => console.error('Error!', error.message));
    };

    return (
        <div id="contact">
            <div className="container">
                <div className="contact-left">
                    <h1 className="sub-title">Contact Me</h1>
                    <p><FontAwesomeIcon icon={faPaperPlane} /> amhinanay@gmail.com</p>
                    <p><FontAwesomeIcon icon={faSquarePhone} /> +639627506627</p>
                    <div className="social-icon">
                        <a href="https://www.facebook.com/alex8mh/"><FontAwesomeIcon icon={faFacebook} /></a>
                        <a href="https://www.instagram.com/aleksu.x/"><FontAwesomeIcon icon={faInstagram} /></a>
                    </div>
                    <img src="https://media.giphy.com/media/pEuD18F5xjR9SNVmYz/giphy.gif" alt="GIF Description" width="100" height="100" />
                    <br></br>
                    <a href="/HINANAY.pdf" className="btn" download>Buy me a coffee</a> 
                </div>
                <div className="contact-right">
                    <form name="submit-to-google-sheet" onSubmit={handleSubmit}>
                        <input type="text" name="Name" placeholder="Your Name" required />
                        <input type="email" name="email" placeholder="Your Email" required />
                        <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
                        <button type="submit">Submit</button>
                    </form>
                    <span id="msg">{msg}</span>
                </div>
            </div>
        </div>
    );
}

export default Contact;
