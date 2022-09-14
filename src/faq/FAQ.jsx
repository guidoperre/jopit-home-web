import React, {useEffect, useRef, useState} from "react";
import './FAQ.css';

export function FAQ(props) {
    return (
        <div className="FAQ" ref={props.section}>
            <div className="FAQ_Content">
                <p className="FAQ_Title">Preguntas Frecuentes</p>
                <div className="FAQ_Questions_Content">
                    <div className="FAQ_Questions">
                        <Question question='¿Donde van a encontrar mi tienda?' answer='Soy una respuesta a la pregunta seleccionada. Por ahora no se que responderte, pues no hay ninguna pregunta valida que me hayan hecho. Pero seguramente dentro de muy poco podamos responder lo que nos pidas. Gracias por ser paciente.'/>
                        <Question question='¿Donde van a encontrar mi tienda?' answer='Soy una respuesta a la pregunta seleccionada.'/>
                        <Question question='¿Donde van a encontrar mi tienda?' answer='Soy una respuesta a la pregunta seleccionada.'/>
                        <Question question='¿Donde van a encontrar mi tienda?' answer='Soy una respuesta a la pregunta seleccionada. Por ahora no se que responderte, pues no hay ninguna pregunta valida que me hayan hecho. Pero seguramente dentro de muy poco podamos responder lo que nos pidas. Gracias por ser paciente.'/>
                        <Question question='¿Donde van a encontrar mi tienda?' answer='Soy una respuesta a la pregunta seleccionada. Por ahora no se que responderte, pues no hay ninguna pregunta valida que me hayan hecho. Pero seguramente dentro de muy poco podamos responder lo que nos pidas. Gracias por ser paciente.'/>
                        <Question question='¿Donde van a encontrar mi tienda?' answer='Soy una respuesta a la pregunta seleccionada.'/>
                        <Question question='¿Donde van a encontrar mi tienda?' answer='Soy una respuesta a la pregunta seleccionada.'/>
                        <Question question='¿Donde van a encontrar mi tienda?' answer='Soy una respuesta a la pregunta seleccionada. Por ahora no se que responderte, pues no hay ninguna pregunta valida que me hayan hecho. Pero seguramente dentro de muy poco podamos responder lo que nos pidas. Gracias por ser paciente.'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Question(props) {
    const [active, setActive] = useState(false);
    const contentRef = useRef(null);

    useEffect(() => {
        contentRef.current.style.maxHeight = active
            ? `${contentRef.current.scrollHeight}px`
            : "0px";
    }, [contentRef, active]);

    const toggleAccordion = () => {
        setActive(!active);
    };

    return (
        <div>
            <button
                className={`Question ${active}`}
                onClick={toggleAccordion}>
                <div className="Question_Container">
                    <div className="Question_Align">
                        <p className="Question_Text">{props.question}</p>
                        <img className="Question_Chevron"
                             src={process.env.PUBLIC_URL + '/faq/faq_chevron.png'}
                             alt="logo" />
                    </div>
                    <div ref={contentRef} className="Answer_Container">
                        <p className="Answer">{props.answer}</p>
                    </div>
                </div>
            </button>
        </div>
    );
}
