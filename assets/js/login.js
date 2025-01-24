const mail = document.querySelector(".login-email");
const password = document.querySelector(".login-password");
const button = document.querySelector(".login-button");

button.addEventListener("click", (event) => {
    event.preventDefault();
    const userMail = mail.value;
    const userPassword = password.value;
    console.log(userMail);
    console.log(userPassword);
    fetch("./assets/json/users.json")
    .then(res => {
        if(res.ok){
            return res.json();
        }
    }).then(data => {
        const users = data.find(user => user.email === userMail && user.password == userPassword);
        
        if(users){
            console.log("kullanıcı bulundu");
            
        }else {
            console.log("kullanıcı bulunamadı");
        }

    }).catch(e => {
        console.log("bir hata oldu.");
        
    })


    
});