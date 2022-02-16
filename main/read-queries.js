const queryCollection = document.querySelector('.column');
var q = localStorage.getItem('queries');
var splitObj = JSON.parse(q);
var msg = splitObj.sort().reverse();
msg.forEach((messageUser) => {

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
    btn.setAttribute("value", messageUser.id);
    btn.setAttribute("id", "deleteButton");
    btn.innerHTML = "Delete";
    
    let span = document.createElement('span');
    h4.textContent = messageUser.Fname;
    h4.textContent = messageUser.Lname;
    geo.textContent = messageUser.location;
    h6.textContent = messageUser.Time;
    p.textContent = messageUser.Message;
    span.textContent = messageUser.Email;

    div.append(br);
    div.append(br);
    div.append(br);

    div.appendChild(h4).style.textTransform = "capitalize";
   
    
    div.appendChild(p);
    div.appendChild(geo).style.color = "grey";
    div.appendChild(geo).style.cursor = "pointer";
    div.appendChild(geo).style.fontSize = "12px";

    div.appendChild(h6);
    div.appendChild(h6).style.color = "grey";
    

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
        const toBeDeleted = btn.getAttribute("value");
        const allQueries = JSON.parse(localStorage.getItem("queries"))
        const restOfQueries = allQueries.filter((query) => {
            return query.id !== toBeDeleted
        })
        if (window.confirm("are you sure you need to delete this message")) {
            localStorage.setItem("queries", JSON.stringify(restOfQueries))
            location.reload()
        }
    }
    );
})
