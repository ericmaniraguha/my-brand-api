

const createQuery = document.querySelector('#myform');

const getAr = async () =>{
    const res = await fetch('https://my-brand-api-1.herokuapp.com/api/v1/articles')
    const result = await res.json();
   

    //getting values from the form
    let fname = e.target.elements.senderName.value;
    let email = e.target.elements.email.value;
    let message = e.target.elements.message.value;

//    define the message
const query ={
     "senderName" : fname,
     email,
     message,
     location,
}
console.log(query);
     const createQueries = await postMessage('')
    
     const postQueries = await post('/queries/',query);
     console.log(postQueries)
     const queries = postQueries.data;
    
 if (fname.value == "" && message.value == "") {

     fname.style.border = "solid 1px red";
    //  lname.style.border = "solid 1px red";
     tel.style.border = "solid 1px red";
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
         id: uuidv4(),
         Fname: fname.value,
         Email: email.value,
         location: userLocation,
         Message: message.value,
         Time: time
    
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

}
successCallback();












