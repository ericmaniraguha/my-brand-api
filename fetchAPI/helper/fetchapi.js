//cors
window.localStorage.getItem ("accessToken")
var baseUrl = "https://my-brand-api-1.herokuapp.com/api/v1";
     async function post(url,body){
       console.log("user",JSON.stringify(body))
          try {
            const response = await axios.post(baseUrl + url, body,
              {
              'Accept': 'application/json',
              'Content-Type': 'application/json; charset=utf-8',
              'Authorization' : window.localStorage.getItem ("accessToken"),
            })
            return response;
          } catch (error) {
            return error;
          }
    }
     async function get(url){
      const request = new Request(baseUrl + url, {
        method: 'GET',
        mode: 'cors',
        cache: 'reload',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Authorization': window.localStorage.getItem ("accessToken"),
        },
      });
      try {
        const response = await fetch(request);
        return response.json();
      } catch (error) {
        return error;
      }
    }
     async function patch(url,data){
      const request = new Request(baseUrl + url, {
        method :"patch",
        mode: 'cors',
        cache: 'reload',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Authorization' : window.localStorage.getItem ("accessToken"),
        },
        data: JSON.stringify(data),
      });
      try {
        const response = await fetch(request);
        return response;
      } catch (error) {
        return error;
      }
    }
  //   async function dlt (url, post) {
  //     const res = await fetch(url, {
  //         method: 'DELETE',
  //         headers: {
  //             'Content-Type': 'application/json'
  //         },
  //         body: JSON.stringify(post)
  //     })
  //     const data = await 'Deleted successfully'
  //     return data
  // }