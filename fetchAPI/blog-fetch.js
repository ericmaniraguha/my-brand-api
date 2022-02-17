const getArticles = () => {
  const blogContainer = document.querySelector(".blog-container");

  let response = fetch("https://my-brand-api-1.herokuapp.com/api/v1/articles", {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .then((post) => {
      post.data.map((article) => {
        const div = document.createElement("div");
        div.setAttribute("class", "post-container");
        const el = `
        <div class="blog-box">
    
        <div class="blog-img">
                <img src="${article.image}" alt="Blog">
        </div>
    
        <div class="blog-text">
            <span>Article Name : ${article.title}</span> <br>
            <a href="blog-read-more-01.html?id=" class="blog-title">Author : ${article.author}</a> <br>
            <a  class="blog-date">Published on : ${ new Date( article.create_at).toUTCString()}</a>
            
            <p> ${article.content.substring(
              0,
              200
            )}</p>
            <a href="blog-read-more-01.html#${article._id}" id ="read-more">Read more</a>
        </div>
    
    </div> `;
        div.innerHTML = el;
        blogContainer.append(div);
      });
    })
    .catch((error) => console.log(error));
};
getArticles();

