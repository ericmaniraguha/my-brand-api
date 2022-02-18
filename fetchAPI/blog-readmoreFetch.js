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
const com = document.querySelector('.read-comment');

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
     
    if(comment.status === 201 ){
    const results = await comment.json();
  

    const commentAdded = results;
  
    console.log(commentAdded);
    for (let i = 0; i < commentAdded.length; i++)
    {
      console.log(commentAdded);


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

     validationFun();  
      addComment();
      getComments();
      location.reload();
  
  })


function validationFun() { 
  if (input1.value == "" && input2.value == "") {
    alert('Your field must be filled')
    input1.style.border = "solid 1px red";
    input2.style.border = "solid 1px red";
    input1_invalid.style.display = "block";
    input2_invalid.style.display = "block";
  }

}

//get comments 

const getComments = () => {
  const myComments = document.querySelector(".comment-area");
  let response = fetch(
    `https://my-brand-api-1.herokuapp.com/api/v1/comments/${id}`,
    {
      method: "GET",
    }
  )
    .then((res) => {
      return res.json();
    })
    .then((comments) => {
      console.log(comments);
      const content = comments.data
      console.log(content)
      content.map((comment) => {
        let html1 = `

            <div class="comment-area">
            <img
              class="comment-avatar"src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
            />
            <div>
              <h3 class="comment-author">${comment.name} <span id="comment_date">${comment.create_at}</span></h3> <br> <br>
              <p class="comment-body">${comment.comment}</p> 
            </div>
          </div>

                   `;
        myComments.innerHTML += html1;
      });
    })
    .catch((error) => console.log(error));
};
getComments();