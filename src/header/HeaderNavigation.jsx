import {toast} from "react-toastify";

export const onLoginClicked = () => {
    showSuccessToast()
};

export const onNavigateTo = (section) => {
    scrollDown(section)
};

const scrollDown = (section) => {
    window.scrollTo({
        top: section.current.offsetTop,
        behavior: 'smooth',
    });
};

function showSuccessToast() {
    toast.success('Success Notification !', {
        position: toast.POSITION.BOTTOM_LEFT
    });
}
