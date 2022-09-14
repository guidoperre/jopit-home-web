import React from "react";
import './Header.css';
import {
    onLoginClicked,
    onNavigateTo
} from "./HeaderNavigation";
import {useScrollPosition} from "../states/ScrollState";
import {Logo} from "../commons/logo/Logo";

export function Header(props) {
    const scrollPosition = useScrollPosition()
    let backgroundColor
    let logoImage
    let logoColor
    let textColor
    let loginBorder
    let boxShadow

    if (scrollPosition > 80) {
        backgroundColor = '#FFFFFF'
        logoImage = 'jopit_logo_red'
        logoColor = '#FF5757'
        textColor = '#333333'
        loginBorder = '0px'
        boxShadow = '0 3px 6px rgba(51, 51, 51, 0.2)'
    } else {
        backgroundColor = '#FF5757'
        logoImage = 'jopit_logo'
        logoColor = '#FFFFFF'
        textColor = '#FFFFFF'
        loginBorder = '1px solid white'
        boxShadow = '0 0 0 rgba(0, 0, 0, 0.0)'
    }

    return (
        <header className="Header" style={{ backgroundColor: backgroundColor, boxShadow: boxShadow}}>
            <Logo image={logoImage} color={logoColor} />
            <div className="Navigation">
                <p className="Page_Style"
                   onClick={() => onNavigateTo(props.description)}
                   style={{ color: textColor}}
                >¿Quienes somos?</p>
                <p
                    className="Page_Style"
                    onClick={() => onNavigateTo(props.price)}
                    style={{ color: textColor}}
                >Precio</p>
                <p
                    className="Page_Style"
                    onClick={() => onNavigateTo(props.faq)}
                    style={{ color: textColor}}
                >FAQ</p>
                <p
                    className="Page_Style"
                    onClick={() => onNavigateTo(props.contact)}
                    style={{ color: textColor}}
                >Contacto</p>
            </div>
            <div className="Login" onClick={onLoginClicked} style={{ border: loginBorder}}>
                <p className="Login_Text">INGRESAR</p>
            </div>
        </header>
    );
}
