"use script";

const validRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const form = document.querySelector("form");

const input = document.querySelector(".sec-access__form-input");

const error = document.querySelector(".sec-access__form-error");

const btn = document.querySelector(".sec-access__form-btn");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  if (input.value.match(validRegex)) {
    error.style.opacity = 0;
  } else error.style.opacity = 1;
});
