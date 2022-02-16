const urlParams = new URLSearchParams(location.search);
var id = urlParams.get("id");


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


const getblog = JSON.parse(localStorage.getItem("article")).sort().reverse();

let check = localStorage.getItem("article");
var Readmessage = getblog[id];
console.log(Readmessage);


const date = document.querySelector('#date');
const author = document.querySelector('.author');
const image = document.querySelector('#img');
const title = document.querySelector('#title');
const body = document.querySelector('.body');
const formPost = document.querySelector('#formPost');

date.textContent = Readmessage.date;
title.textContent = Readmessage.articleName;
author.textContent = Readmessage.authorName;
body.textContent = Readmessage.message;
image.setAttribute("src", Readmessage.image);

const input1 = formPost.elements[0];
const input2 = formPost.elements[1];
const postBtn = document.querySelector('.comment-submit');
formPost.addEventListener('submit', (e) => {
  e.preventDefault();

  validationFun(); 
  addComment();
  // saveComment();
  location.reload();
})

function validationFun() { 
  if (input1.value == "" && input2.value == "") {

    input1.style.border = "solid 1px red";
    input2.style.border = "solid 1px red";
    input1_invalid.style.display = "block";
    input2_invalid.style.display = "block";
  }

}

function addComment() {
  var obj = {
    id: uuidv4(),
    Name: input1.value,
    Comment: input2.value,
    Time: time,
       
  }
  Readmessage.comment.push(obj);
  localStorage.setItem("article", JSON.stringify(getblog));
  formPost.reset();
}
console.log(Readmessage.comment);
const com = document.querySelector('#list-comment');

function saveComment() {
 
  for (let i = 0; i < Readmessage.comment.length; i++)
  {
    const el3 = document.createElement('h3');
    const el2 = document.createElement('h2');
    const span = document.createElement('span');
    
    el3.style.fontSize = "12px";
    span.style.fontSize = "10px"

    el2.style.color = "blue";
    el2.style.fontSize = "12px";

    el3.textContent = Readmessage.comment[i].Name;
    el2.textContent = Readmessage.comment[i].Comment;
    span.textContent = Readmessage.comment[i].Time;
    com.append(el3, el2, span);
  }

}
 
saveComment();
