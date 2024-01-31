const emailField = document.getElementById("email-field");
const emailError = document.getElementById("email-error");

function validateEmailAddress() {
  if (
    !emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)
  ) {
    emailError.innerHTML = "Valid email required";
    // emailError.style.color = "hsl(0, 94%, 66%)";

    emailField.style.border = "2px solid hsl(4, 100%, 67%)";
    emailField.style.backgroundColor = "hsl(0, 94%, 66%, 0.3)";

    return false;
  }
  emailError.innerHTML = " ";
  emailField.style.border = "2px solid green";

  return true;
}

// =========================================

const btnSubmit = document.querySelector(".btn_subscribe");
const btnDismiss = document.querySelector(".btn_dismiss");
const formContainer = document.querySelector(".stay-up-wrapper");
const successEl = document.querySelector(".success-message");
const inputEl = document.querySelector(".form input");

btnSubmit.addEventListener("click", () => {
  if (inputEl.value != "") {
    formContainer.classList.add("hide");
    successEl.classList.remove("hide");
  } else {
    console.log("input empty");
  }
});
