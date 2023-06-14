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
        checkBox[0].classList.contains("clicked") &&
        checkBox[0].classList.contains("color-only") &&
        checkBox[0].innerHTML === "-"
      ) {
        checkBox[0].classList.remove("clicked");
        checkBox[0].classList.remove("color-only");
        checkBox[0].innerHTML = "";
      } else if (
        checkBox[1].classList.contains("clicked") &&
        checkBox[2].classList.contains("clicked")
      ) {
        checkBox[0].classList.toggle("clicked");
        checkBox[0].classList.toggle("color-only");
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
        checkBox[0].classList.contains("clicked") &&
        checkBox[0].classList.contains("color-only") &&
        checkBox[0].innerHTML === "-"
      ) {
        checkBox[0].classList.remove("clicked");
        checkBox[0].classList.remove("color-only");
        checkBox[0].innerHTML = "";
      } else if (
        checkBox[1].classList.contains("clicked") &&
        checkBox[2].classList.contains("clicked")
      ) {
        checkBox[0].classList.toggle("clicked");
        checkBox[0].classList.toggle("color-only");
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
      option.classList.remove("drop-active");
    });
    option.classList.add("drop-active");
  });
});

// Validações JS

function validar() {
  // Nome completo
  const nameInput = document.querySelector("#name").value;
  const fullName = nameInput.trim().split(" ");
  console.log(`Name: ${fullName}`);

  // E-mail
  const emailInput = document.querySelector("#email").value;
  const atSign = emailInput.indexOf("@");
  const dotSign = emailInput.indexOf(".");
  const emailValidate = emailInput.slice(atSign + 1, dotSign);
  console.log(emailValidate);
  console.log(`E-mail: ${emailInput}`);

  // Telefone
  const telephoneInput = document.querySelector("#telephone").value;
  const telNumber = telephoneInput
    .replaceAll(",", "")
    .replaceAll("-", "")
    .trim()
    .split(" ")
    .join("");
  console.log(`Telephone: ${telNumber}`);

  // Checkbox
  let arrCheckbox = [];
  for (let i = 1; i < checkBox.length; i++) {
    if (checkBox[i].classList.contains("clicked")) {
      const checkBoxValue = checkBox[i].nextElementSibling.innerText;
      arrCheckbox.push(checkBoxValue);
    }
  }
  console.log(`Checkbox: ${arrCheckbox}`);

  // Select
  console.log(`Selected: ${selected.innerText}`);

  // Radio
  let arrRadio = [];
  for (let i = 0; i < radioBtn.length; i++) {
    if (radioBtn[i].classList.contains("clicked")) {
      const radioBtnValue = radioBtn[i].nextElementSibling.innerText;
      arrRadio.push(radioBtnValue);
    }
  }
  console.log(`Radio button: ${arrRadio}`);

  // Textarea
  const textAreaInput = document.querySelector("#textarea").value;
  console.log(`Message: ${textAreaInput}`);

  if (fullName.length < 2) {
    alert("Digite o nome completo");
  } else if (
    emailValidate.length === 0 ||
    !emailInput.includes("@") ||
    !emailInput.includes(".")
  ) {
    alert("Digite um endereço de e-mail válido");
  } else if (telNumber.length !== 11) {
    alert("Digite um número válido (11 Caracteres)");
  } else if (arrCheckbox.length === 0) {
    alert("Selecione pelo menos uma opção de notificação");
  } else if (selected.innerText === "Selecione") {
    alert("Selecione um corte favorito");
  } else if (arrRadio.length === 0) {
    alert("Selecione pelo menos uma opção de preferência");
  } else if (textAreaInput.length < 5) {
    alert("Insira pelo menos uma mensagem com 5 caracteres");
  } else if (selected.innerText === "Selecione") {
    alert("Selecione um corte favorito");
  } else {
    window.location.reload();
    alert("Formulário enviado com sucesso");
  }
}

const btnSubmit = document.querySelector("#click-submit");
btnSubmit.addEventListener("click", validar);
