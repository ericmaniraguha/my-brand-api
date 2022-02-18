let id = location.hash.split('#')[1]
console.log(id);

const readMore = async () =>{
    const res = await fetch(`https://my-brand-api-1.herokuapp.com/api/v1/articles/${id}`)
    const results = await res.json();
    const Readmessage = results.data;
   
    console.log(results);

    // const date = document.querySelector('#date');
    const author = document.querySelector('.author');
    const image = document.querySelector('#img');
    const title = document.querySelector('#title');
    const body = document.querySelector('.body');
    const formPost = document.querySelector('#formPost');

   
    date.textContent = Readmessage.create_at;
    title.textContent = Readmessage.title;
    author.textContent = Readmessage.author;
    body.textContent = Readmessage.content;
    image.setAttribute("src", Readmessage.image);

}

readMore();
const input1 = formPost.elements[0];
const input2 = formPost.elements[1];
const postBtn = document.querySelector('.comment-submit');
const com = document.querySelector('#list-comment');

const addComment = async () =>{
    var obj = {
        name: input1.value,
        comment: input2.value,
     
      }  
    const comment = await fetch(`https://my-brand-api-1.herokuapp.com/api/v1/comments/${id}`,{
         method:'POST',
         body: JSON.stringify(obj),
         headers:{
            'Content-Type':'application/json'
         }
    })
    if(comment.status === 201){
    const results = await comment.json();
    console.log(results);

    const commentAdded = results.data;
    console.log(commentAdded);
    for (let i = 0; i < commentAdded.length; i++)
    {


      console.log("commentAdded[i].name");
      const el2 = document.createElement('h2');
      const span = document.createElement('span');
      
      el3.style.fontSize = "12px";
      span.style.fontSize = "10px"
  
      el2.style.color = "blue";
      el2.style.fontSize = "12px";
  
      
      el3.textContent = commentAdded[i].name;
      el2.textContent = commentAdded[i].comment;
    //   span.textContent = commentAdded[i].Time;
      com.append(el3, el2, span);
      
    }

    }else{
        console.log('Failed to add comment');
    }
}

formPost.addEventListener('submit', (e) => {
    e.preventDefault();
  
    addComment();
    // saveComment();
    // location.reload();
  })


function validationFun() { 
  if (input1.value == "" && input2.value == "") {

    input1.style.border = "solid 1px red";
    input2.style.border = "solid 1px red";
    input1_invalid.style.display = "block";
    input2_invalid.style.display = "block";
  }

}

// function addComment() {
 
//   Readmessage.comment.push(obj);
//   localStorage.setItem("article", JSON.stringify(getblog));
//   formPost.reset();
// }
// console.log(Readmessage.comment);
// const com = document.querySelector('#list-comment');

// function saveComment() {
 
//   for (let i = 0; i < Readmessage.comment.length; i++)
//   {
//     const el3 = document.createElement('h3');
//     const el2 = document.createElement('h2');
//     const span = document.createElement('span');
    
//     el3.style.fontSize = "12px";
//     span.style.fontSize = "10px"

//     el2.style.color = "blue";
//     el2.style.fontSize = "12px";

//     el3.textContent = Readmessage.comment[i].Name;
//     el2.textContent = Readmessage.comment[i].Comment;
//     span.textContent = Readmessage.comment[i].Time;
//     com.append(el3, el2, span);
//   }

// }
 
// saveComment();
