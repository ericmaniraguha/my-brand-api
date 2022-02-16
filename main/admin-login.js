localStorage.setItem("user", JSON.stringify({
    email: "admin@gmail.com",
    password: "pass123"
}))

if (JSON.parse(localStorage.getItem("isLogedIn"))) {
    window.location.href = "admin-articles-dashboard.html";
}


function Adminlogin(event) {
    event.preventDefault();
    const email = event.target.elements.email.value
    const password = event.target.elements.password.value
    const user = JSON.parse(localStorage.getItem("user"))

    if (password === "") {
        const password_invalid = document.querySelector("#password_invalid")
        password_invalid.style.border = "solid 2px red";
        password_invalid.style.display = "block";

        document.querySelector("form").reset();
        document.querySelector("email").focus();
    }
    if (!check_email(email)) {
        const email_invalid = document.querySelector("#email_invalid")
        email_invalid.style.border = "solid 1px red";
        email_invalid.style.display = "block";

        document.querySelector("form").reset();
        document.querySelector("email").focus();
    }
    if (user.email === email && user.password === password) {
        localStorage.setItem("isLogedIn", JSON.stringify(true))
        window.location.href = "admin-articles-dashboard.html";
    } else {
        localStorage.setItem("isLogedIn", JSON.stringify(false))
        window.alert("Please, use valid credintial");

        document.querySelector("form").reset();
        document.querySelector("email").focus();
    }
}

function check_email(email) {
    if (!email.match(/\S+@\S+\.\S+/)) {
        return false;
    }
    if (email.indexOf(' ') != -1 || email.indexOf('..') != -1) {
        return false;
    }
    return true;
}
