const button = document.getElementById("btn-login")
const email = document.getElementById("emailInput")
const password = document.getElementById("password")

document.addEventListener('keyup', function(){
    if(email.value.length > 0 && password.value.length > 0){
        button.disabled = false
    }else{
        button.disabled = true
    }
})

