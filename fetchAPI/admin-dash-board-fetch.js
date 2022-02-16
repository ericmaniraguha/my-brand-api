// fetch data from database
const accessToken = localStorage.getItem("accessToken");
const token = accessToken.replace(/['"]+/g, "");
var tbody = document.querySelector("tbody");
const getPosts = async() => {
    const response = await fetch(
        "https://my-brand-api-1.herokuapp.com/api/v1/articles"
    );
    const result = await response.json();
    if (response.status === 200) {
        let posts = result.data;
        for (let index = 0; index < posts.length; index++) {
            const deletePost = async() => {
                const del = confirm("are you sure you want to delete comment?");
                if (del === true) {
                    const response = await fetch(
                        `https://my-brand-api-1.herokuapp.com/api/v1/articles${posts[index]._id}`, {
                            method: "DELETE",
                            headers: {
                                Authorization: `Bearer ${token}`,
                            },
                        }
                    );
                    const result = await response.json();
                    if (response.status === 200) {
                        console.log(result);
                        tbody.textContent = "";
                        location.reload();
                        alert("deleted successfull");
                    }
                }
            };
           
            const tr = document.createElement("tr");
            const td1 = document.createElement("td");
            td1.textContent = index + 1;
    
            const td2 = document.createElement("td");
            td2.textContent = posts[index].authorName;
    
            const td3 = document.createElement("td");
            td3.textContent = posts[index].articleName;
    
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
    

            //delete
            // const td5 = document.createElement("td");
            const delButton = document.createElement("a");
            delButton.setAttribute("class", "delete");
            const delIcon = document.createElement("i");
            delIcon.setAttribute("class", "icon-trash");
            const label1 = document.createElement("span");
            label1.textContent = "Delete";
            delButton.appendChild(delIcon);
            delButton.appendChild(label1);
            td5.appendChild(delButton);
            td5.addEventListener("click", deletePost);
            td5.style.cursor = "pointer";


            //publish
            const td6 = document.createElement("td");
            const publishButton = document.createElement("a");
            publishButton.setAttribute("class", "publish");
            const publishIcon = document.createElement("i");
            publishIcon.setAttribute("class", "icon-edit-sign");
            const label2 = document.createElement("span");
            label2.textContent = "Publish";
            publishButton.append(publishIcon, label2);
            
            publishButton.addEventListener("click", () => {
                console.log("hello");
                posts[index].stat = true;
                localStorage.setItem("posts", JSON.stringify(posts));
                alert("successfully published!");
                location.reload();
                console.log(posts);
            });
            if (posts[index].stat === false) {
                td6.appendChild(publishButton);
                td6.style.cursor = "pointer";
            } else {
                td6.textContent = "published";
                td6.style.cssText = "color:green";
            }
            // //append td's to tr
            tr.append(td1, td2, td3, td4, td5, td6);
            tbody.appendChild(tr);
            //edit post
            function editPost() {
                location.assign(`../pages/update.html#${posts[index]._id} `);
            }
        }
    }
};
getPosts();