import '../styles/style.css';
import emailjs from 'emailjs-com';
import React, { useRef } from 'react';

export default function Contact() {

    const form = useRef();


    function sendEmail(e) {

        e.preventDefault();

        emailjs.sendForm('service_ikdb12r', 'template_49u75tc', e.target, 'user_2PVELfoeusHEpbGTQ77Rx')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
    };

    return (
        <div className="blog">
            <article className="container">
                <h2>Kontakt</h2>
                <p>
                    Du kan även kontakta oss på mail <span>EmmaTheFemma94@gmail.com</span>
                </p>
                <form ref={form} onSubmit={sendEmail} className="form-contact">
                    <label>Namn</label>
                    <input type="text" placeholder="Skriv ditt Namn..." name="name"/>
                    <label>Emai</label>
                    <input type="email" placeholder="Skriv din Email" name="user_email"/>
                    <textarea name="message"></textarea>
                    <button type="submit" value="send">Skicka</button>
                </form>
            </article>
        </div>
    )
}
