const queryCollection = document.querySelector('.column');

const url = 'https://my-brand-api-1.herokuapp.com/api/v1/queries';
const token = localStorage.getItem('accessToken');

fetch(url,{
    method:'GET',
    headers: {
        'authorization': `${token}`
    },
})
.then((res) => res.json())
.then((data) =>{
    console.log(data);
const content = data.data;

content.forEach((messageUser) => {

    let div = document.createElement('div');
    div.setAttribute('class', 'query');
    let h4 = document.createElement('h4');
    let h3 = document.createElement('h3');
    let br = document.createElement('br');
    let geo = document.createElement('p');
    let h6 = document.createElement('h6');
    let p = document.createElement('p');
    let hr = document.createElement('hr');
    let btn = document.createElement('button');
    btn.setAttribute("value", messageUser._id);
    btn.setAttribute("id", "deleteButton");
    btn.innerHTML = "Delete";
    
    let span = document.createElement('span');
    

  
    h4.textContent = messageUser.senderName;
    h4.textContent = messageUser.email;
    geo.textContent = messageUser.location;
    h6.textContent = (messageUser.date_created).substr(0,10) +' '+ (messageUser.date_created).substr(11,8);
    p.textContent = messageUser.message;
    // span.textContent = messageUser.Email;

    div.append(br);
    div.append(br);
    div.append(br);

    div.appendChild(h4).style.textTransform = "small";
    div.appendChild(h4).style.color = "	#00008b";
    div.appendChild(h4).style.cursor = "pointer";
    div.appendChild(h4).style.textDecoration = "underline";
    
    
    
    div.appendChild(p);
    div.appendChild(geo).style.color = "grey";
    div.appendChild(geo).style.cursor = "pointer";
    div.appendChild(geo).style.fontSize = "12px";

    div.appendChild(h6);
    div.appendChild(h6).style.color = "#a9a9a9";
    

    div.appendChild(span).style.color = "blue";
    div.appendChild(span).style.cursor = "pointer";
    div.appendChild(span).style.textDecorationLine = "underline";
    div.appendChild(span).style.fontSize = "12px";
    div.append(br);

    div.appendChild(btn).style.color = "back";
    div.appendChild(btn).style.background = "red";
    div.appendChild(btn).style.color = " skyblue";
    div.appendChild(btn).style.width = " 150px";
    div.appendChild(btn).style.height = " 30px";
    div.appendChild(btn).style.cursor = "pointer";

    div.append(hr);

    queryCollection.appendChild(div);
    btn.getAttribute("value")
    btn.addEventListener('click', (e) => {
    
        var id = messageUser._id;
        const url_id = url + '/' + id;
        console.log(url_id);

        fetch(url_id,{
            method:'DELETE',
            headers: {
                'authorization': `${token}`
            },
        })

        if (window.confirm("are you sure you need to delete this message")) {
            window.location.reload();
            localStorage.setItem("queries", JSON.stringify(restOfQueries))
            
     
        }
    }
    );
})
})