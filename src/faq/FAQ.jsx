import React, {useEffect, useState} from "react";
import './FAQ.css';

export function FAQ(props) {
    return (
        <div className="FAQ" ref={props.section}>
            <div className="FAQ_Content">
                <p className="FAQ_Title">Preguntas Frecuentes</p>
                <div className="FAQ_Questions_Content">
                    <div className="FAQ_Questions">
                        <Question title='¿Donde van a encontrar mi tienda?' response='Soy una respuesta a la pregunta seleccionada. Por ahora no se que responderte, pues no hay ninguna pregunta valida que me hayan hecho. Pero seguramente dentro de muy poco podamos responder lo que nos pidas. Gracias por ser paciente.'/>
                        <Question title='¿Donde van a encontrar mi tienda?' response='Soy una respuesta a la pregunta seleccionada.'/>
                        <Question title='¿Donde van a encontrar mi tienda?' response='Soy una respuesta a la pregunta seleccionada.'/>
                        <Question title='¿Donde van a encontrar mi tienda?' response='Soy una respuesta a la pregunta seleccionada.'/>
                        <Question title='¿Donde van a encontrar mi tienda?' response='Soy una respuesta a la pregunta seleccionada.'/>
                        <Question title='¿Donde van a encontrar mi tienda?' response='Soy una respuesta a la pregunta seleccionada.'/>
                        <Question title='¿Donde van a encontrar mi tienda?' response='Soy una respuesta a la pregunta seleccionada.'/>
                        <Question title='¿Donde van a encontrar mi tienda?' response='Soy una respuesta a la pregunta seleccionada.'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Question(props) {
    const [isExpanded, setExpandedState] = useState(false);
    let expandedClass
    let expandedResponseClass

    if (isExpanded) {
        expandedClass = 'ExpandedQuestion'
        expandedResponseClass = 'ExpandedResponse'
    } else {
        expandedClass = 'CollapsedQuestion'
        expandedResponseClass = 'CollapsedResponse'
    }

    return(
        <div id="expandable-question" className={expandedClass} onClick={() => setExpandedState(!isExpanded)}>
            <div className="Question_Container">
                <p className="Question_Text">{props.title}</p>
                <img className="Question_Chevron"
                     src={process.env.PUBLIC_URL + '/faq/faq_chevron.png'}
                     alt="logo" />
            </div>
            <p id="expandable-response" className={expandedResponseClass}>{props.response}</p>
        </div>
    )
}
