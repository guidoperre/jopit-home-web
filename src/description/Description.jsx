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
                        <div className="Feature">

                        </div>
                        <div className="Feature"/>
                        <div className="Feature"/>
                        <div className="Feature"/>
                        <div className="Feature"/>
                        <div className="Feature"/>
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
