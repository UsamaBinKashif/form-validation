let username, email, phone, message, btn;
let invalidName, invalidEmail, invalidPhone, invalidMessage, success, warning;
username = document.getElementById("name");
emailAddress = document.getElementById("email");
phone = document.getElementById("phone-number");
message = document.getElementById("message");
invalidName = document.getElementById("invalid-name");
invalidEmail = document.getElementById("invalid-email");
invalidPhone = document.getElementById("invalid-phone");
invalidMessage = document.getElementById("invalid-message");
success = document.getElementById("success");
warning = document.getElementById("warning");
btn = document.getElementById("btn-submit");

// VALIDATIONS
// username validation

// username validation
username.addEventListener("blur", () => {
  let regex = /^[a-zA-z\sa-zA-z]{6,16}$/;
  let name = username.value;
  if (regex.test(name) || name.value == " ") {
    console.log("valid");
    invalidName.classList.add("invalid");
  } else {
    console.log("not");
    invalidName.classList.remove("invalid");
  }
});

// email validation
emailAddress.addEventListener("blur", () => {
  let regex = /^([_\-\.0-9a-zA-z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-z]){2,16}$/;
  let email = emailAddress.value;
  if (regex.test(email)) {
    console.log("valid");
    invalidEmail.classList.add("invalid");
  } else {
    console.log("not");
    invalidEmail.classList.remove("invalid");
  }
});

// phone validation
phone.addEventListener("blur", () => {
  let regex = /^[0-9]{6,15}$/;
  let phoneNumber = phone.value;
  if (regex.test(phoneNumber)) {
    console.log("valid");
    invalidPhone.classList.add("invalid");
  } else {
    console.log("not");
    invalidPhone.classList.remove("invalid");
  }
});

// phone validation
message.addEventListener("blur", () => {
  let regex = /^[a-zA-z]{2,20}$/;
  let messageBox = message.value;
  if (regex.test(messageBox)) {
    console.log("valid");
  } else {
    console.log("not");

    invalidMessage.classList.remove("invalid");
  }
});

btn.addEventListener("click", () => {
  if (
    username.value === "" &&
    phone.value === "" &&
    emailAddress.value === "" &&
    message.value === ""
  ) {
    setInterval(() => {
      warning.style.display = "none";
    }, 3000);
    warning.style.display = "block";
  } else {
    setInterval(() => {
      success.style.display = "none";
    }, 3000);
    success.style.display = "block";
  }
});
