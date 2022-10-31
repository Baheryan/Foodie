"use strict";

//mobile menu animation

const buttonMenu = document.getElementById('header__button');

buttonMenu.onclick = function() {
    let menuElements = document.querySelectorAll('.header__button, .header__nav__container');
    menuElements.forEach((menuElements) => {
        menuElements.classList.toggle('active');
    });
};

//footer form validation

const form = document.getElementById("footer__form");
const input = document.getElementById("form__input");
const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const formMessage = document.getElementById("form__message");

form.addEventListener("submit", element => {
    element.preventDefault();
    validation();
    submitStatus();
});

form.addEventListener("keydown", element => validation());

const validation = function () {
   if (input.value.match(pattern)) {
    formMessage.classList.add("valid");
    formMessage.classList.remove("invalid");
    formMessage.innerHTML = "Your email adress is valid";
   } else {
    formMessage.classList.remove("valid");
    formMessage.classList.add("invalid");
    formMessage.innerHTML = "Please enter valid email adress";
   }
};

const submitStatus = function() {
    if (input.value.match(pattern)) {
        formMessage.innerHTML = "Congrats! You've been subsribed";
    }

    if (input.value === '') {
        formMessage.innerHTML = "Email field cannot be empty";
    }
};

input.addEventListener("focusout", element => {
    formMessage.innerHTML = "";
});