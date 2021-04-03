/* import {
    useParams
} from "react-router-dom"; */
import "../Styles.css";
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import "../styles/Contact.css";
import bkpic from "../images/costanera.png";


const CONTACT = () => {
    /*     let { col } = useParams(); */
    const frmContact = { userName: '', userEmail: '', userTel: '', message: '' };
    const [contact, setContact] = useState(frmContact);
    const [showMessage, setShowMessage] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target;
        setContact({ ...contact, [name]: value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        emailjs.send('default_service', 'template_5min7yg', contact, 'user_K6I3hCUFvXbvNzXl38ypS')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setContact(frmContact);
                setShowMessage(true);
            }, (err) => {
                console.log('FAILED...', err);
            });
    }

    return (
        <div style={{
            backgroundImage: `url(${bkpic})`,
        }}>
            <div className="contact"
            >
                CONTACT
        </div>
            <div className="container pt-2 text-center" >
                <div className="alert alert-light" role="alert">
                </div>
                {showMessage ? <div className="alert alert-success col-md-5 mx-auto" role="alert">Email enviado, pronto te responderemos. ¡Gracias por comunicarte!</div> : ``}
                <form onSubmit={handleSubmit}>
                    <div className="input-field col s12">
                        <div id="header" className="form-group text-left">
                            <i className="material-icons prefix-left">account_circle</i>
                            <input id="input_form" required type="text" value={contact.userName} name="userName" onChange={handleChange} className="form-control" placeholder="Tu nombre" />
                        </div>
                    </div>
                    <div className="input-field col s12">
                        <span className="form-group text-left">
                            <i className="material-icons prefix-left">email</i>
                            <input id="input_form" required type="text" value={contact.userEmail} name="userEmail" onChange={handleChange} className="form-control" placeholder="Tu email" />
                        </span>
                    </div>
                    <div className="input-field col s12">
                        <div className="form-group text-left">
                            <i className="material-icons prefix-left">phone</i>
                            <input id="input_form" value={contact.userTel} required type="text" name="userTel" onChange={handleChange} className="form-control" placeholder="Tu teléfono" />
                        </div>
                    </div>
                    <div className="input-field col s12">
                        <div className="form-group text-left">
                            <i className="material-icons prefix-left">mode_edit</i>
                            <textarea id="icon_prefix2" required name="message" onChange={handleChange} className="form-control" placeholder="Dejanos tu mensaje" value={contact.message}></textarea>
                        </div>
                    </div>
                    <div className="pt-3 col-md-5 mx-auto text-left">
                        <button id="contactBoton" className="waves-effect waves-light red lighten-2 btn-large">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CONTACT;