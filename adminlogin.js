var username = document.getElementById("username")
var password = document.getElementById("password")
var submit = document.getElementById("button")





submit.addEventListener('click', () => {
    if (username.value === "admin" && password.value === "admin123") {
        window.open("adm/admin.html");
    } else {
        alert("Please enter correct details")
    }
});




