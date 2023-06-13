//Radio Button
const radioBtn = document.getElementsByClassName("radio-btn");

for (let i = 0; i < radioBtn.length; i++) {
  radioBtn[i].addEventListener("click", function () {
    this.classList.add("clicked");
    if (i === 0) {
      radioBtn[1].classList.remove("clicked");
      radioBtn[2].classList.remove("clicked");
    } else if (i === 1) {
      radioBtn[0].classList.remove("clicked");
      radioBtn[2].classList.remove("clicked");
    } else {
      radioBtn[0].classList.remove("clicked");
      radioBtn[1].classList.remove("clicked");
    }
  });
}

//Checkbox
const checkBox = document.getElementsByClassName("ckb");

for (let i = 0; i < checkBox.length; i++) {
  checkBox[i].addEventListener("click", function () {
    if (i === 0) {
      checkBox[0].classList.toggle("clicked");
      if (
        checkBox[1].classList.contains("clicked") &&
        checkBox[2].classList.contains("clicked")
      ) {
        checkBox[1].classList.remove("clicked");
        checkBox[2].classList.remove("clicked");
        checkBox[0].classList.remove("clicked");
        checkBox[0].classList.remove("color-only");
        checkBox[0].innerHTML = "";
      } else if (
        checkBox[1].classList.contains("clicked") ||
        checkBox[2].classList.contains("clicked")
      ) {
        checkBox[1].classList.remove("clicked");
        checkBox[2].classList.remove("clicked");
        checkBox[0].classList.remove("clicked");
        checkBox[0].classList.remove("color-only");
        checkBox[0].innerHTML = "";
      } else {
        checkBox[1].classList.toggle("clicked");
        checkBox[2].classList.toggle("clicked");
        checkBox[0].innerHTML = "&#x2713;";
      }
    } else if (i === 1) {
      checkBox[1].classList.toggle("clicked");
      if (
        checkBox[1].classList.contains("clicked") &&
        checkBox[2].classList.contains("clicked")
      ) {
        checkBox[0].classList.toggle("clicked");
        checkBox[0].classList.remove("color-only");
        checkBox[0].innerHTML = "&#x2713;";
      } else if (
        checkBox[1].classList.contains("clicked") ||
        checkBox[2].classList.contains("clicked")
      ) {
        checkBox[0].classList.toggle("color-only");
        checkBox[0].innerHTML = "-";
      }
    } else {
      checkBox[2].classList.toggle("clicked");
      if (
        checkBox[1].classList.contains("clicked") &&
        checkBox[2].classList.contains("clicked")
      ) {
        checkBox[0].classList.toggle("clicked");
        checkBox[0].classList.remove("color-only");
        checkBox[0].innerHTML = "&#x2713;";
      } else if (
        checkBox[1].classList.contains("clicked") ||
        checkBox[2].classList.contains("clicked")
      ) {
        checkBox[0].classList.toggle("color-only");
        checkBox[0].innerHTML = "-";
      }
    }
  });
}

//Dropdown

const dropdown = document.querySelector(".dropdown");

const select = dropdown.querySelector(".select");
const caret = dropdown.querySelector(".caret");
const menu = dropdown.querySelector(".menu");
const options = dropdown.querySelectorAll(".menu li");
const selected = dropdown.querySelector(".selected");

select.addEventListener("click", () => {
  select.classList.toggle("select-clicked");
  caret.classList.toggle("caret-rotate");
  menu.classList.toggle("menu-open");
});

options.forEach((option) => {
  option.addEventListener("click", () => {
    selected.innerText = option.innerText;
    select.classList.remove("select-clicked");
    caret.classList.remove("caret-rotate");

    menu.classList.remove("menu-open");
    options.forEach((option) => {
      option.classList.remove("active");
    });
    option.classList.add("active");
  });
});
