let divProfile = document.querySelector('.container');
var profile1 = localStorage.getItem('profileInfo');
var profile = JSON.parse(profile1);

function viewer(info, idx) {
    let div = document.createElement('div');
   
    div.innerHTML = `
    <section class="text-header">
      <div class="info">
        <h4 class="intro">${info.authorName}</h4>
  
      </div>
      <div class="profile">
        <div><img class="profile" src="${info.image}"></div>
      </div>
    </section>
  
    <section class="content">
      <p class="para">${info.message}</p>
  
    </section>
    `;
    divProfile.append(div);

}

profile.forEach((element, idx) => {
  
    viewer(element, idx);
});


