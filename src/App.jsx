import React from 'react';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <div className="App">
        <Header/>
        <ToastContainer />
    </div>
  );
}

function Header() {
    const onFacebookClicked = () => {
        toast.success('Success Notification !', {
            position: toast.POSITION.BOTTOM_LEFT
        });
    }

    const onGoogleClicked = () => {
        showSuccessToast()
    };

    const onLoginClicked = () => {
        showSuccessToast()
    };

    const onAboutUsClicked = () => {
        showSuccessToast()
    };

    const onPriceClicked = () => {
        showSuccessToast()
    };

    const onFAQClicked = () => {
        showSuccessToast()
    };

    const onContactClicked = () => {
        showSuccessToast()
    };

    function showSuccessToast() {
        toast.success('Success Notification !', {
            position: toast.POSITION.BOTTOM_LEFT
        });
    }

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
                    <p className="Page_Style" onClick={onAboutUsClicked}>¿Quienes somos?</p>
                    <p className="Page_Style" onClick={onPriceClicked}>Precio</p>
                    <p className="Page_Style" onClick={onFAQClicked}>FAQ</p>
                    <p className="Page_Style" onClick={onContactClicked}>Contacto</p>
                </div>
                <div className="Google_Login" onClick={onGoogleClicked}>
                    <img className="Google_Image"
                         src={process.env.PUBLIC_URL + '/social/google_icon.png'}
                         alt="logo" />
                </div>
                <div className="Facebook_Login" onClick={onFacebookClicked}>
                    <img className="Facebook_Image"
                         src={process.env.PUBLIC_URL + '/social/facebook_icon.png'}
                         alt="logo" />
                </div>
                <div className="Normal_Login" onClick={onLoginClicked}>
                    <p className="Normal_Login_Text">INGRESAR</p>
                </div>
            </div>

        </header>
    );
}
