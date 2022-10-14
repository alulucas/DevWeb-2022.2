const button = document.getElementById("inscrever-se")
const checkbox = document.getElementById("yes")
    

document.addEventListener('change', function() {
    if (checkbox.checked) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
})

