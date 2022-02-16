let divSkills = document.querySelector('.container');
var skills1 = localStorage.getItem('skillsPage');
var skills = JSON.parse(skills1);

function viewer(info, idx) {
    let div = document.createElement('div');
    console.log(idx);
    div.innerHTML = `

 <div class="gallery">
      <a class="gallery-item" href="#"> <img src="${info.image}" alt="icon">
        <span class="text-wrapper"><span class="name">${info.hoverText}</span><span class="title">${info.descrText}</span></span></a>
     
      </div>
   
    </div>  `;

    divSkills.append(div);

}

skills.forEach((element, idx) => {
  
    viewer(element, idx);
});


