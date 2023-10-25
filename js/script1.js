
/**
 * sign-in sign-up form
 */

const changeFormType = document.querySelector("[bton]");
const formType = document.querySelector("[form-type]");
const probType = document.querySelector("[prob-type]");
const questBton = document.querySelector("[quest-bton");
const signBtn = document.querySelector("[sign-type");
const userName = document.querySelector("[user-name]");

const changeForm = function() {
  signBtn.removeAttribute("value");
  signBtn.setAttribute("value", "Sign Up");
  formType.textContent = "Create New Account";
  probType.style.display = "none";
  questBton.innerHTML = "<p>You already an Account. <a href=\"login.html\">Click Here</a><p> ";
  userName.style.display = "block";
   
}

changeFormType.addEventListener("click", changeForm);