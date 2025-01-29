const mail = document.querySelector(".login-email");
const password = document.querySelector(".login-password");
const button = document.querySelector(".login-button");
const errorMessage = document.querySelector("#error-message");

password.addEventListener("blur", () => {
    if (password.value.length > 0 && password.value.length < 6) {
        errorMessage.style.display = "block";
        errorMessage.style.color = "red"
    } else {
        errorMessage.style.display = "none";
    }
});

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
            Swal.fire({
                title: "Giriş Başaralı",
                icon: "success",
                draggable: true
              });
            console.log("kullanıcı bulundu");
            
        }else {
            Swal.fire({
                title: "Böyle bir kullanıcı yok",
                icon: "error",
                draggable: false
              });
            console.log("kullanıcı bulunamadı");
        }
    

    }).catch(e => {
        console.log("bir hata oldu.");
        
    })


    
});