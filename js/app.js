const showModalBox = document.getElementById("application-modal-box-button");
const modalBox = document.getElementById("application-modal-box-wrapper");
const closeModalBox = document.getElementById("application-modal-box-close");
const productsSectionAnchor = document.getElementById("products-section");
const scrollUpButtonSmall = document.querySelector("#scroll-up-button-wrapper-small");
const scrollUpButtonLarge = document.querySelector("#scroll-up-button-wrapper-large");

const handleToggleModal = function() {
    $(modalBox).fadeToggle();
}
const clear = function(...items) {
    for (let i = 0; i < items.length; i++) {
        const element = items[i];
        $(element).fadeOut();
    }
}
const checkScrollBtnVisability = function() {
    if (window.screenY > (document.querySelector("body").getBoundingClientRect().top + 200)) {
        if (window.innerWidth <= 600){
            $(scrollUpButtonSmall).fadeIn();
            $(scrollUpButtonLarge).fadeOut();
        }
        else {
            $(scrollUpButtonLarge).fadeIn();
            $(scrollUpButtonSmall).fadeOut();
        }
    } else {
        clear(scrollUpButtonLarge, scrollUpButtonSmall);
    }
}

const scrollUp = function() {
    document.querySelector("body").scrollIntoView({"behavior": "smooth"});
}

showModalBox.addEventListener("click", handleToggleModal);
closeModalBox.addEventListener("click", handleToggleModal);
scrollUpButtonLarge.addEventListener("click", scrollUp);
scrollUpButtonSmall.addEventListener("click", scrollUp);
window.onscroll = checkScrollBtnVisability;
window.onresize = checkScrollBtnVisability;
checkScrollBtnVisability();