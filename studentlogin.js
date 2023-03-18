var username = document.getElementById("username")
var password = document.getElementById("password")
var submit = document.getElementById("button")





submit.addEventListener('click', () => {
    if (username.value === "student" && password.value === "student123") {
        window.open("studentpanel.html");
    } else {
        alert("Please enter correct details")
    }
});




