const logout = document.getElementById("logout");
logout.addEventListener("click", () => {
    localStorage.setItem("isLogedIn", JSON.stringify(false))
    window.location.href = "admin-login.html";
})
