const showModalBox = document.getElementById("application-modal-box-button");
const modalBox = document.getElementById("application-modal-box-wrapper");
const closeModalBox = document.getElementById("application-modal-box-close");

const handleToggleModal = function() {
    $(modalBox).fadeToggle();
}
showModalBox.addEventListener("click", handleToggleModal);
closeModalBox.addEventListener("click", handleToggleModal);