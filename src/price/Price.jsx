import React from "react";
import './Price.css';

export function Price() {
    return (
        <div className="Price">
            <div className="Price_Top_Content">
                <p className="Price_Subtitle">CREAR TU NEGOCIO ES</p>
                <p className="Price_Title">¡GRATIS!</p>
                <p className="Price_Text">Con una comision por venta del <b>1,5%</b> y un tope maximo total de <b>$450</b> por mes.</p>
            </div>
            <div className="Price_Bottom_Content">
                <div className="Price_Features">
                    <Feature
                        icon='world_emoji'
                        title='Solo pagas, si vendes'
                        description='Con nuestro sistema de pago vas a poder vender desde el primer momento totalmente gratis. Solo vas a pagar una muy baja comision por venta hasta llegar a un tope maximo de $450 por mes.' />
                    <Feature
                        icon='world_emoji'
                        title='Tus productos, siempre seguros'
                        description='A la hora de ejecutarse el intercambio, ideamos un sistema para que desde ambas partes puedan estar 100% seguros de que el producto fue entregado y recibido. Esto lo hacemos a traves de contratos inteligentes.' />
                    <Feature
                        icon='world_emoji'
                        title='Cobra como quieras'
                        description='Ofrecemos diferentes medios de pagos para que puedas cobrar tus compras. Entre ellos vas a poder encontrar el clasico pago en efectivo, mercadopago, tarjetas de debito y credito.' />
                    <Feature
                        icon='world_emoji'
                        title='Integrate con tus redes sociales'
                        description='Vas a poder compartir tu local y tus productos en redes sociales para expandir tu clientela y fidelizarla con tu marca. Ofrecemos integraciones sencillas con Instagram y Facebook' />
                    <Feature
                        icon='world_emoji'
                        title='Entregas en el momento'
                        description='Vas a poder crear ofertas por tiempo limitado y de muchas formas posibles. Te ofrecemos un sistema de actualizacion de ofertas muy sencillo para que puedas hacerlo sin problema.' />
                    <Feature
                        icon='world_emoji'
                        title='Crea ofertas a tu gusto'
                        description='Vas a poder crear ofertas por tiempo limitado y de muchas formas posibles. Te ofrecemos un sistema de actualizacion de ofertas muy sencillo para que puedas hacerlo sin problema.' />
                </div>
            </div>
        </div>
    );
}

function Feature(props) {
    return(
        <div className="Price_Feature">
            <div className="Price_Feature_Title_Container">
                <img className="Price_Feature_Emoji"
                     src={process.env.PUBLIC_URL + '/description/' + props.icon + '.png'}
                     alt="logo" />
                <p className="Price_Feature_Title">{props.title}</p>
            </div>
            <p className="Price_Feature_Description">{props.description}</p>
        </div>
    )
}
