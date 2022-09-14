import React from "react";
import './FAQ.css';

export function FAQ(props) {
    return (
        <div className="FAQ" ref={props.section}>
            <div className="FAQ_Content">
                <p className="FAQ_Title">Preguntas Frecuentes</p>
                <div className="FAQ_Questions_Content">
                    <div className="FAQ_Questions">
                        <Question title='¿Donde van a encontrar mi tienda?'/>
                        <Question title='¿Donde van a encontrar mi tienda?'/>
                        <Question title='¿Donde van a encontrar mi tienda?'/>
                        <Question title='¿Donde van a encontrar mi tienda?'/>
                        <Question title='¿Donde van a encontrar mi tienda?'/>
                        <Question title='¿Donde van a encontrar mi tienda?'/>
                        <Question title='¿Donde van a encontrar mi tienda?'/>
                        <Question title='¿Donde van a encontrar mi tienda?'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Question(props) {
    return(
        <div className="Question">
            <p className="Question_Text">{props.title}</p>
            <img className="Question_Chevron"
                 src={process.env.PUBLIC_URL + '/faq/faq_chevron.png'}
                 alt="logo" />
        </div>
    )
}
