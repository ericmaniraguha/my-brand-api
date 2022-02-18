const isLogedIn = JSON.parse(localStorage.getItem("isLogedIn"))
if (!isLogedIn) {
    window.location.href = "admin-login.html";
}