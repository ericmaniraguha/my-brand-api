// const form = document.querySelector("#myform");
// document.getElementById("myform").addEventListener("submit", (event) => {
//   event.preventDefault();
//   console.log(form);
//   const formData = new FormData(form);
//   let response = fetch(
//     "https://my-brand-api-1.herokuapp.com/api/v1/users/login",
//     {
//       method: "POST",
//       body: formData,
//     }
//   )
//     .then((res) => {
//       return res.json();
//     })
//     .then((user) => {
//       console.log(user);
//       if (user.status == 200) {
//         let token = localStorage.setItem("token", user.accessToken);
//         window.location.replace("../pages/admin-articles-dashboard.html");
//       } else {
//         let errormessage = [];
//         errormessage.push("INVALID CREDENTIALS!");
//         errorElement.innerText = errormessage;
//         setTimeout(() => {
//           window.location.reload();
//         }, 3000);
//       }
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// });

const loginForm = document.querySelector("#myform");
loginForm.addEventListener("submit",async (e) => {
    e.preventDefault()
    const email = e.target.elements.email.value
    const password = e.target.elements.password.value
    const user = {
        email,
        password
    }
    //Authenticating user
    const auth = await post('/users/login',user)
    console.log(auth)
    //check if the user is successfuly logged in
    if (auth.status === 200 ) {
               // can only be accessible if logged in
                const token = "Bearer" +' '+auth.data.accessToken;
                localStorage.setItem ("accessToken",token)
                localStorage.setItem("isLogedIn", JSON.stringify(true))
                // document.querySelector("#loginError").style.display = "none";
                location.assign("../pages/admin-articles-dashboard.html")
            } else {
                document.querySelector("#loginError").style.display = "block";
            }
})
const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};
