import {toast} from "react-toastify";

export const onLoginClicked = () => {
    showSuccessToast()
};

export const onNavigateTo = (section) => {
    scrollDown(section)
};

const scrollDown = (section) => {
    window.scrollTo({
        top: section.current.offsetTop - 40,
        behavior: 'smooth',
    });
};

function showSuccessToast() {
    toast.info('En desarrollo 🔨👷', {
        position: toast.POSITION.BOTTOM_LEFT
    });
}
