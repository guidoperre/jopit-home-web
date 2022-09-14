import React from "react";
import './Contact.css';
import {toast} from "react-toastify";

export function Contact(props) {
    return (
        <div className="Contact" ref={props.section}>
            <div className="Contact_Content">
                <p className="Contact_Title">Contacta con nosotros</p>
                <p className="Contact_Subtitle">Nuestro equipo respondera lo mas pronto posible 😀</p>
                <form className="Contact_Form" onSubmit={handleSubmit}>
                    <label className="Contact_Label">
                        <p className="Contact_Label_Title">Nombre</p>
                        <input className="Contact_Input" type="text" placeholder="Cosme Fulanito" />
                    </label>
                    <label className="Contact_Label">
                        <p className="Contact_Label_Title">Email</p>
                        <input className="Contact_Input" type="text" placeholder="cosmefulanito@gmail.com" />
                    </label>
                    <label className="Contact_Label">
                        <p className="Contact_Label_Title">Mensaje</p>
                        <textarea
                            className="Contact_TextArea"
                            placeholder="Quiero contactarme con ustedes."/>
                    </label>
                    <input className="Contact_Submit" type="submit" value="ENVIAR" />
                </form>
            </div>
        </div>
    );
}

function handleSubmit(e) {
    e.preventDefault()
    showSuccessToast()
}

function showSuccessToast() {
    toast.info('En desarrollo 🔨👷', {
        position: toast.POSITION.BOTTOM_LEFT
    });
}
