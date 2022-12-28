var openModalRegister = document.querySelector(".register");
var openModalLogin = document.querySelector(".login");
var modalRegister = document.querySelector(".modal-register");
var modalLogin = document.querySelector(".modal-login");
var iconCloseRegister = document.querySelector(".header-icon-register");
var iconCloseLogin = document.querySelector(".header-icon-login");
var btnBackRegister = document.querySelector(".auth-form__back-register");
var btnBackLogin = document.querySelector(".auth-form__back-login");

function toggleModalRegister(e) {
  modalRegister.classList.toggle("hidden");
}

function toggleModalLogin(e) {
  modalLogin.classList.toggle("hidden");
}
openModalRegister.addEventListener("click", toggleModalRegister);
openModalLogin.addEventListener("click", toggleModalLogin);
iconCloseRegister.addEventListener("click", toggleModalRegister);
iconCloseLogin.addEventListener("click", toggleModalLogin);
btnBackRegister.addEventListener("click", toggleModalRegister);
btnBackLogin.addEventListener("click", toggleModalLogin);

modalRegister.addEventListener("click", function (e) {
  if (e.target == e.currentTarget) {
    toggleModalRegister();
  }
});
modalLogin.addEventListener("click", function (e) {
  if (e.target == e.currentTarget) {
    toggleModalLogin();
  }
});
