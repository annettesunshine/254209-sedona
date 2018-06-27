var button = document.querySelector(".open-button");

var popup = document.querySelector(".modal-search");

var form = popup.querySelector("form");
var arrivalDate = document.querySelector("[name=arrival-date]");
var departureDate = document.querySelector("[name=departure-date]");
var adult = document.querySelector("[name=adult-number]");
var child = document.querySelector("[name=child-number]");

var isStorageSupport = true;
var storageAdult = "";
var storageChild = "";

try {
  storageAdult = localStorage.getItem("adult");
  storageChild = localStorage.getItem("child");
} catch (err) {
  isStorageSupport = false;
}

button.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-show");
  popup.classList.remove("modal-error");
  if (storageAdult, storageChild) {
    adult.value = storageAdult;
    child.value = storageChild;
  }
  arrivalDate.focus();
});

form.addEventListener("submit", function (evt) {
  if (!arrivalDate.value || !departureDate.value || !adult.value || !child.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("adult", adult.value);
      localStorage.setItem ("child", child.number);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});
