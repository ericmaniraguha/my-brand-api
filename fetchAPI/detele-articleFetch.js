function deleteArticle(id){

    confirmDiv.style.display="block";
        
    confirmCancelBtn.addEventListener('click',(e)=>{
        e.preventDefault();
        confirmDiv.style.display="none";
    });
    confirmOkBtn.addEventListener('click', async()=>{
      confirmOkBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
        const response= await fetch(`https://my-brand-api-1.herokuapp.com/api/v1/articles${id}`,{
            method:'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        const fetchedResponse= await response.json()
        console.log(fetchedResponse);
        confirmOkBtn.innerHTML = 'Ok';
        confirmDiv.style.display="none";
        renderArticles();
    });
}







