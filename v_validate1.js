let blockName = document.querySelector(".blockName");
let btn = document.querySelector("button");
let inputName = blockName.querySelector("input");
let pName = blockName.querySelector("p");
let blockPassword = document.querySelector(".blockPassword");
let inputPassword = blockPassword.querySelector("input");
let pPassword = blockPassword.querySelector("p");
let symbols = ["!", "@", "#", "$", "%"];

btn.addEventListener("click", function () {
    if (inputName.value == "") {
        pName.textContent = "обязательное поле";
    }
    else {
        pName.textContent = "";
    }
    if (inputPassword.value == "") {
        pPassword.textContent = "обязательное поле";
    }
    else {
        pPassword.textContent = "";
    }
    let resultFunction = unusedCharacters(inputPassword.value);
    if (resultFunction.length != 0) {
        pPassword.textContent = "не использованы символы " + resultFunction;
    }
})
function unusedCharacters(password) {
    let unusChar = [];
    password = password.split("");
    symbols.forEach((el) => {
        if (!password.includes(el)) {
            unusChar.push(el);
        }
    })
    return unusChar;
}