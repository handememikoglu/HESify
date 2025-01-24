const mail = document.querySelector(".login-email");
const password = document.querySelector(".login-password");
const button = document.querySelector(".login-button");

fetch("assets/json/users.json")
.then(res => {
    if(res.ok){
        return res.json();
    }
}).then(data => {
    

}).catch(e => {
    console.log("bir hata oldu.");
    
})

button.addEventListener("click", (event) => {
    event.preventDefault();
    const userMail = mail.value;
    const userPassword = password.value;
    console.log(userMail);
    console.log(userPassword);
    
});