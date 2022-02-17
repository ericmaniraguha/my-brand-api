

var tbody = document.querySelector("tbody");
const token = localStorage.getItem("accessToken");
const form = document.getElementById('myform');



const getAr = async () =>{
   const res = await fetch('https://my-brand-api-1.herokuapp.com/api/v1/articles')
   const result = await res.json();
  

   if(res.status === 200){
    console.log(result);
    const posts = result.data

    for (let index = 0; index < posts.length; index++) {

        async function  deleteArticle() {
            let postTodelete;
            const del = confirm("Please, Do you agree to delete ?")
            if (del === true) {

                const deleteArt = await fetch(`https://my-brand-api-1.herokuapp.com/api/v1/articles/${posts[index]._id}`,
                   {
                       method :"DELETE",
                       headers:{
                        Authorization:`${token}`
                       }
                    
                   }
                )
               if(deleteArt.status === 200){
                   const results  = await deleteArt.json();
                   console.log(results);

                   tbody.textContent = "";
        
                   location.reload();
                   alert("deleted successfull")
       
               } 
               else{
                   console.log("Data not found");
               }
            }
          
        }

        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        td1.textContent = index + 1;

        const td2 = document.createElement("td");
        td2.textContent = posts[index].author;

        const td3 = document.createElement("td");
        td3.textContent = posts[index].title;

        const td4 = document.createElement("td");
        td4.textContent = posts[index].create_at;


        const td5 = document.createElement("div");
        const editButton = document.createElement("button");

        editButton.setAttribute("class", "edit");

        const label = document.createElement("div");

        label.textContent = "Edit Button";

        editButton.appendChild(label);
        editButton.addEventListener("click", editPost)
        td5.appendChild(editButton);
        td5.style.cursor = "pointer";
        td5.style.background = "grey";

        //delete button
        const td6 = document.createElement("td");
        const delButton = document.createElement("de");

        delButton.setAttribute("class", "delete");
        const deleteLabel = document.createElement("div");

        deleteLabel.textContent = "Delete Button";
        delButton.appendChild(deleteLabel);
        td6.appendChild(delButton);

        td6.style.color = "brown"
        td6.style.cursor = "pointer";

        td6.addEventListener("click", deleteArticle)
        td6.style.cursor = "pointer";

        tr.append(td1, td2, td3, td4, td5, td6);
        tbody.appendChild(tr);

       
        // editarticles
        function editPost(event) {
            const publish = document.getElementById("publish");
            console.log(event.target.parentElement.parentElement.parentElement.firstChild.textContent)

            const author = document.getElementById('authorName').value;
            const title =  document.getElementById('article-title').value;
            const image =  document.getElementById('image').files[0];
            const text =  document.getElementById('text').value;

                    
        form.addEventListener('submit',(e)=>{
                e.preventDefault();

                const formData = new FormData(form);
               /*  formData.append('author',author)
                formData.append('image', image);
                formData.append("title", title);
                formData.append("content", text); */
                // console.log(image)
                
                 fetch(`https://my-brand-api-1.herokuapp.com/api/v1/articles/${posts[index]._id}`,
                {
                    method :"PATCH",
                    headers:{
                     Authorization:`${token}`
                    },
                    body:formData
                 
                }
            /*     , window.location.reload(), */
                
             )
                    .then((res) => {return res.json();})
                    .then((data) => console.log(data));
                   
              alert('Data well updated!')
            })
            
           }
         
        }

   }
}
getAr();

