var username = document.getElementById("username")
var password = document.getElementById("password")
var submit = document.getElementById("button")





submit.addEventListener('click', () => {
    if (username.value === "faculty" && password.value === "faculty123") {
        window.open("facultypanel.html");
    } else {
        alert("Please enter correct details")
    }
});




