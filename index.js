const clickMeBtn = document.querySelector("#clickMe");
const closeBtn = document.querySelector("#close");
const modal = document.querySelector("#modal");
const modalBackdrop = document.querySelector(".backdrop");

const handleClick = () => {
    modal.classList.remove("modal-hide");
    modal.classList.add("modal-show");
};

const handleClose = () => {
    modal.classList.remove("modal-show");
    modal.classList.add("modal-hide");
};

clickMeBtn.addEventListener("click", handleClick);

closeBtn.addEventListener("click", handleClose);

modalBackdrop.addEventListener("click", handleClose);
