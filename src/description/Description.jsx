import React from "react";
import './Description.css';

export function Description() {
    return (
        <div className="Description">
            <div className="Description_Content">
                <p className="Description_Subtitle">DESCRIPCIÓN</p>
                <p className="Description_Title">¿Quienes somos?</p>
                <p className="Description_Text">En Jopit tenemos como misión ayudar a encontrar a cada persona que tenga una tienda, a encontrar su lugar en el mundo digital. Para esto nos encargamos de desarrollar un plataforma completa, donde puedan crear y administrar su tienda de forma facil y segura.</p>
                <div className="Description_Features_Content">
                    <div className="Description_Features">
                        <Feature
                            icon='world_emoji'
                            title='Tu lugar en el mapa'
                            description='Cada tienda registrada va a tener la oportunidad de aparecer en el mapa. Esto puede ser increiblemente util para ganar exposicion en nuestra aplicacion de cara al usuario.' />
                        <Feature
                            icon='computer_emoji'
                            title='Autogestionable'
                            description='Vas a poder gestionar tu tienda de manera totalmente independiente. Vamos a ofrecerte toda la informacion que necesitas para que puedas hacerte cargo de la misma.' />
                        <Feature
                            icon='crown_emoji'
                            title='Tu tienda, tus reglas'
                            description='Al crearte una tienda, vas a obtener un link que podes compartir y utilizar como gustes. Este dominio te pertenece y podes utilizarlo para compartirlo por donde quieras y conseguir mas exposición.' />
                        <Feature
                            icon='joy_emoji'
                            title='Facil de usar'
                            description='Todas las caracteristicas que ofrecemos estan diseñadas a detalle para que puedan ser comprendidas y utilizadas de formas totalmente intuitiva. Vas a poder operar sin esfuerzo alguno.' />
                        <Feature
                            icon='handshake_emoji'
                            title='Integraciones'
                            description='Vamos a facilitarte herramientas para que puedas compartir tanto tu tienda como tus productos en diferentes redes sociales y que puedas acceder a los mejores planes de promoción.' />
                        <Feature
                            icon='cash_emoji'
                            title='El mejor precio'
                            description='Ofrecemos el mejor precio del mercado. Comisiones bajas y limite de pago para que no te preocupes por nada. Si no logramos que vendas, no vas a pagar nada. Tenemos beneficios especiales para aquellos que vendan mucho.' />
                    </div>
                    <div className="Description_Image_Container">
                        <img className="Description_Image"
                             src={process.env.PUBLIC_URL + '/description/description_image.png'}
                             alt="description" />
                    </div>
                </div>
            </div>
        </div>
    );
}

function Feature(props) {
    return(
        <div className="Feature">
            <div className="Feature_Title_Container">
                <img className="Feature_Emoji"
                     src={process.env.PUBLIC_URL + '/description/' + props.icon + '.png'}
                     alt="logo" />
                <p className="Feature_Title">{props.title}</p>
            </div>
            <p className="Feature_Description">{props.description}</p>
        </div>
    )
}
