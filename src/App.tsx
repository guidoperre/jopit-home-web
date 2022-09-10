import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
        <Header/>
    </div>
  );
}

function Header() {
    return (
        <header className="Header">
            <div className="Logo_Container">
                <img className="Logo_Image"
                     src={process.env.PUBLIC_URL + '/logo/jopit_logo.png'}
                     alt="logo" />
                <p className="Logo_Name">jopit</p>
            </div>

            <div className="Page_Navigation_Container">
                <div className="Navigation">
                    <p className="Page_Style">¿Quienes somos?</p>
                    <p className="Page_Style">Precio</p>
                    <p className="Page_Style">FAQ</p>
                    <p className="Page_Style">Contacto</p>
                </div>
                <div className="Google_Login">
                    <img className="Google_Image"
                         src={process.env.PUBLIC_URL + '/social/google_icon.png'}
                         alt="logo" />
                </div>
                <div className="Facebook_Login">
                    <img className="Facebook_Image"
                         src={process.env.PUBLIC_URL + '/social/facebook_icon.png'}
                         alt="logo" />
                </div>
                <div className="Normal_Login">
                    <p className="Normal_Login_Text">INGRESAR</p>
                </div>
            </div>

        </header>
    );
}

export default App;
