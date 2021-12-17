const showModalBox = document.getElementById("application-modal-box-button");
const modalBox = document.getElementById("application-modal-box-wrapper");
const closeModalBox = document.getElementById("application-modal-box-close");

const handleToggleModal = function() {
    $(modalBox).fadeToggle();
}
const calcResize = function() {

    const productsFlxBx = document.getElementById("products");
    const productsFlxBxMaxWidth = productsFlxBx.parentElement.offsetWidth;
    const productCard = document.getElementsByClassName("product-card-wrapper")[0];
    const productCardWidth = productCard.getBoundingClientRect().width + (parseInt(window.getComputedStyle(productCard).getPropertyValue("margin-left").match(/(\d+)/))*2);
    if (Math.floor(productsFlxBxMaxWidth / productCardWidth) * productCardWidth !== 0) {
        productsFlxBx.setAttribute("style",`width:${Math.floor(productsFlxBxMaxWidth / productCardWidth) * productCardWidth}px`);
    }
}
window.onresize = calcResize;
calcResize();
showModalBox.addEventListener("click", handleToggleModal);
closeModalBox.addEventListener("click", handleToggleModal);