const errorMsg = "404 Hata!";
const fetchErrorMsg = "404 Hata! - fetch'te bir hata oluştu.";
const userAlreadyExist = "Mail hesabı önceden kaydedilmiş."
const amptyMsg = "Alanlar boş olamaz."
const invalid = "Geçersiz işlem";
const passwordMsg = "Şifre en az 6 haneli olmalı."

let users = [];
const userForm = document.querySelector("#signUpForm");

fetch("./assets/json/users.json")
.then(res => {
  if (res.ok) {
    return res.json()
  }
}).then(data => {

  users = data

}).catch(e => {
  console.log(fetchErrorMsg);
});

userForm.addEventListener("submit", createUser);

function createUser(e) {
  e.preventDefault();

  const userFormObj = Object.fromEntries(new FormData(userForm));

  if(!checkValidation(e, userFormObj)) return;

  const userId = users.length > 0 ? users[users.length -1].id + 1 : 1;

  const usernameArry = [...userFormObj.email];
  let username = usernameArry.splice(0, usernameArry.indexOf("@")).join("");

  const newUser = {
    id: userId,
    age: userFormObj.age,
    gender: userFormObj.gender,
    name: userFormObj.name,
    surname: userFormObj.surname,
    username,
    password: userFormObj.password,
    email: userFormObj.email,
    isLoggedIn: true
  }

  users.push(newUser);
  
  window.location.href = `index.html?userId=${newUser.id}`;

  // TODO: index.js te veri bu şekilde alınacak.
  // const urlParams = new URLSearchParams(window.location.search);
  // const userId = urlParams.get('userId');
  // userId string olarak gelir
}

function checkValidation(e, userFormObj) {

  if (
    userFormObj.name.trim() == ""
    || userFormObj.surname.trim() == ""
    || userFormObj.age.trim() == ""
    || userFormObj.gender == undefined
    || userFormObj.email.trim() == ""
    || userFormObj.password.trim() == ""
  ) {
    alert(amptyMsg);
    return false;
  }

  const age = Number(userFormObj.age);
  if (isNaN(age) || age < 1 || age > 120) {
    alert(invalid);
    e.target.age.value = "";
    return false;
  }

  if (userFormObj.password.length < 6) {
    alert(passwordMsg);
    e.target.password.value = "";
    return false;
  }

  if (users.some(u => u.email === userFormObj.email)) {
    alert(userAlreadyExist);
    e.target.email.value = "";
    return false;
  }

  return true;
}