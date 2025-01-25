const errorMsg = "404 Hata!";
const fetchErrorMsg = "404 Hata! - fetch'te bir hata oluştu.";
const amptyMsg = "Fields cannot be empty"
const invalid = "Invalid operation";
const passwordMsg = "Password must be grader than 5"

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

  if (
    userFormObj.name.trim() == ""
    || userFormObj.surname.trim() == ""
    || userFormObj.age.trim() == ""
    || userFormObj.gander.trim() == ""
    || userFormObj.email.trim() == ""
    || userFormObj.password.trim() == ""
  ) {
    alert(amptyMsg);
  }

  const age = Number(userFormObj.age);
  if (isNaN(age) || age < 1 || age > 120) {
    alert(invalid);
    return;
  }

  if (userFormObj.password.length < 6) {
    alert(passwordMsg);
    return;
  }

}

































/*

{
  "age": 25,
  "gender": "male",
  "name": "John",
  "surname": "Doe",
  "username": "johndoe",
  "password": "password123",
  "email": "johndoe@example.com",
  "isLoggedIn": false
}
  */