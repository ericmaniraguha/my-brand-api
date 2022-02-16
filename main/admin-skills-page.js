var url;
document.querySelector("#image").addEventListener("change", function () {
    const image = new FileReader();
    image.readAsDataURL(this.files[0]);
    image.addEventListener("load", () => {
        url = image.result;
    })
});

let datePost = new Date().toLocaleString('en-GB', {
    year: "numeric",
    month: 'long',
    day: '2-digit',
    weekday: "long",
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })
  
  ;

function createSkills(event) {
    event.preventDefault();

    var hoverText = document.getElementById('hoverText');
    var descrText = document.getElementById('descrText');
    var image = document.getElementById('image');

    var image_invalid = document.getElementById("image_invalid");
    var hoverText_invalid = document.getElementById("hoverText_invalid");
    var descrText_invalid = document.getElementById("descrText_invalid");

    if (hoverText.value == "" ||image.value == "" || descrText.value == "") {
        hoverText.style.border = "solid 1px red";
        image.style.border = "solid 1px red";
   

        image_invalid.style.display = "block";
        hoverText_invalid.style.display = "block";

        descrText_invalid.style.display = "block";
        descrText.style.border = "solid 1px red"; 

    } else {
        var obj = {
            id: uuidv4(),
            hoverText: hoverText.value,
            descrText: descrText.value,
            date: datePost,
            image: url,
        
        }
        let bloges = localStorage.getItem("skillsPage");
        if (bloges) {
            var converBlog = JSON.parse(bloges);
            converBlog.push(obj);
            localStorage.setItem("skillsPage", JSON.stringify(converBlog));
            alert("created well");
            window.location.reload();
        } else {
            var blogArray = [obj];
            localStorage.setItem("skillsPage", JSON.stringify(blogArray));
            console.log(blogArray);
            alert("created well");
            window.location.reload();
        }
    }
}

const posts = JSON.parse(localStorage.getItem("skillsPage"));
var tbody = document.querySelector("tbody");

function displayPost(index) {
    for (let index = 0; index < posts.length; index++) {

        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        td1.textContent = index + 1;

        const td2 = document.createElement("td");
        td2.textContent = posts[index].hoverText;

        const td3 = document.createElement("td");
        td3.textContent = posts[index].hoverText;

        const td4 = document.createElement("td");
        td4.textContent = posts[index].date;

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

        td6.addEventListener("click", deleteSkills)
        td6.style.cursor = "pointer";

        tr.append(td1, td2, td3, td4, td5, td6);
        tbody.appendChild(tr);

        function deleteSkills() {
            let postTodelete;
            const del = confirm("Please, Do you agree to delete ?")
            if (del === true) {
                if (localStorage.getItem("skillsPage") === null) {
                    postTodelete = [];
                } else {
                    postTodelete = JSON.parse(localStorage.getItem("skillsPage"))
                }
            }
            postTodelete.splice(index, 1);
            localStorage.setItem("skillsPage", JSON.stringify(postTodelete));
            tbody.textContent = "";
            displayPost();
            location.reload();
            alert("deleted successfull")
        }
        // editskillsPages
        function editPost(event) {
            const formContainer = document.getElementById('myform');
            const publish = document.getElementById("publish");
       console.log(event.target.parentElement.parentElement.parentElement.firstChild.textContent)

            let retrieved=JSON.parse(localStorage.getItem('skillsPage'));
            hoverText.value = retrieved[index].hoverText;
         
  
            publish.addEventListener('click',(e)=>{
                e.preventDefault();
                console.log(e.target.textContent)
                retrieved[index].hoverText=hoverText.value;
                              
                localStorage.setItem('skillsPage',JSON.stringify(retrieved));
            
                setTimeout(() => {
                formContainer.classList.toggle('open-modal');
                window.location.reload();
                }, 2000);
            })
           }
    
        }

    }

// editPost();
displayPost();
