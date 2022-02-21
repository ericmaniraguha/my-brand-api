function init(){
    // console.log(window.localStorage.getItem("isLogedIn")=="true")

    // console.log("object");
if (window.localStorage.getItem("isLogedIn") == "true") {
    document.querySelector(".loginLink").style.display = "none";
    document.querySelector(".adminLink").style.display = "block"
}  
}
init()
