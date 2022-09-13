import {toast} from "react-toastify";

export const onLoginClicked = () => {
    showSuccessToast()
};

export const onAboutUsClicked = () => {
    showSuccessToast()
};

export const onPriceClicked = () => {
    showSuccessToast()
};

export const onFAQClicked = () => {
    showSuccessToast()
};

export const onContactClicked = () => {
    showSuccessToast()
};

function showSuccessToast() {
    toast.success('Success Notification !', {
        position: toast.POSITION.BOTTOM_LEFT
    });
}
