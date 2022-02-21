// const isLogedIn = JSON.parse(localStorage.getItem("isLogedIn"))
// if (!isLogedIn) {
//     window.location.href = "../pages/admin-login.html";
// }

const isLogedIn = JSON.parse(localStorage.getItem("isLogedIn")) === null ? localStorage.setItem("isLogedIn", JSON.stringify(false)) : JSON.parse(localStorage.getItem("isLogedIn"))
if (!isLogedIn) {
    console.log("Test");

    location.assign("../pages/admin-login.html")
    
}
