let fname = document.getElementById('fname');
let email = document.getElementById('email');
let message = document.getElementById('message');
let form = document.getElementById('myform');


var fname_invalid = document.getElementById("fname_invalid");
var email_invalid = document.getElementById("email_invalid");
var Message_invalid = document.getElementById("message");

// date function 
var time = new Date().toLocaleString('en-GB', {
 year: "numeric",
 month: 'long',
 day: '2-digit',
 weekday: "long",
 hour: '2-digit',
 minute: '2-digit',
 second: '2-digit'
})



function Contact(event) {
 
 event.preventDefault();

 if (fname.value == "" || message.value == "") {

     fname.style.border = "solid 1px red";
     email.style.border = "solid 1px red";
     message.style.border = "solid 1px red";
     fname_invalid.style.display = "block";
     Message_invalid.style.display = "block";

 } else if (!check_email(email.value)) {
     
     email.style.border = "solid 1px red";
     email_invalid.style.display = "block";
 }

 else {
     var obj = {
        //  id: uuidv4(),
         Fname: fname.value,
         Email: email.value,
        //  location: userLocation,
         Message: message.value,
        //  Time: time
    
     }

     let check = fetch('https://my-brand-api-1.herokuapp.com/api/v1/queries', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain,*/*',
            'content-type': 'application/json',
        },

        body: JSON.stringify({
            senderName: fname.value,
            email: email.value,
            message: message.value,
            // date_created: Date.now(),
        }),
    })
    .then((res) => res.json())

        .then((data) => console.log(data));
        window.location.reload();
        if (check) {
            alert("Send Messege Well");
            form.reset(); 
        } else {
            alert("not Send Messege");
            form.reset(); 
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
}

// geolocation Detatection

function successCallback (){
 if(navigator.geolocation){
     navigator.geolocation.getCurrentPosition(onSuccess, errorCallback);
 }else{
     userLocation = "Your browser not support";
 }
}
function onSuccess(position){
 let {latitude, longitude} = position.coords;

 
 fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=01c88ee1253b428b97ff365cad50a597`)
     .then(response => response.json()).then(response => {
     
     let infoLocationDetails = response.results[0].components;
     console.table(infoLocationDetails);
     let {county, postcode, country} = infoLocationDetails;
         userLocation = `${county} , ${country}`;
         
     }).catch(() => {
     
     userLocation = "Something went wrong";
 });
}
function errorCallback (error){
 if(error.code == 1){
     userLocation = "You denied location request";

 }else if(error.code == 2){
     userLocation = "Location not unavailable";

 }else{
     userLocation = "Location not detected";
 }

 button.setAttribute("disabled", "true");
}
successCallback();












