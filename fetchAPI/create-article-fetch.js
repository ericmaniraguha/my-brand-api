
// let retrievedToken = localStorage.getItem("token");
//   const createBlog = document.getElementById("myform");
//   createBlog.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const formData = new FormData(createBlog);
//     let response = fetch(
//       "https://my-brand-api-1.herokuapp.com/api/v1/articles",
//       {
//         method: "POST",
//         body: formData,
//         headers: {
//           Authorization: `token ${retrievedToken}`,
//         },
//       }
//     )
//       .then((res) => {
//         return res.json();
//       })
//       .then((article) => {
//         console.log(article);
//         if (article.status == 200) {
//           window.location.replace("blogb.html");
//         }
//       });
//   });


let image = document.getElementById("image").addEventListener("change", function (e){console.log(e.target.files[0])})
console.log(image)
//initialising the local storage
const createArticleForm = document.querySelector("#myform");
createArticleForm.addEventListener("submit", async (e) => {
    e.preventDefault()
    const author = e.target.elements.author.value
    const title = e.target.elements.title.value
    const content = e.target.elements.content.value
    // const existingArticle = await post('/articles',data);
    // console.log(existingArticle)
    let images = e.target.elements.image.files[0];
    const formData = new FormData();
    formData.append('author',author)
    formData.append('image', images);
    formData.append("title", title);
    formData.append("content", content);
    let existingArticle = fetch('https://my-brand-api-1.herokuapp.com/api/v1/articles', {
        method :"POST",
        mode: 'cors',
        cache: 'reload',
        headers: {
          'Accept': 'application/json',
          'Authorization' : window.localStorage.getItem ("accessToken"),
        },
        body: formData,
        })
        .then((res) => res.json())
        .then((data) => console.log(data));
        if (existingArticle) {
            alert("Article created successfully");
           
        } else {
            alert("not created");
        }
    })