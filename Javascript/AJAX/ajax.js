function call_api(){
  var movieName =  document.getElementById("search_movie").value;
  
  //XML http request...method 1 for api call

//   const http = new XMLHttpRequest();
   const url=`https://www.omdbapi.com/?i=tt3896198&apikey=ba811eaa&s=${movieName}&page=1`;


// this code will check the status (200,400,404,201,402,500) of api and request and give the data....
//   http.onreadystatechange=function(){
//     if(http.readyState == 4 && http.status == 200){
//         console.log(http.responseText)
//     }
//   } 

//   get the url and method...(get,post,put,delete)
//   http.open('GET',url);

//    trigger the function and hit api
//   http.send();

//fetch method 2 for call API....

// fetch("https://www.omdbapi.com/?i=tt3896198&apikey=ba811eaa&s=bat&page=1",{
//     method:"GET"
// })

//  fetch(url)
 //promise function its give two methods 
 //then(its will excute only on true)
 //catch(its will excute only in false)

//  .then(function(response){
//  return response.json();
//  })


 //()=>{} .. did not return the value directly return
//  .then(response=>response.json())
//  .then(data=>console.log(data))
//  .catch(err=>console.log(err))


// Ajax calling method 1(xmlhttprequest)
//    var http_calling=new XMLHttpRequest();
//    http_calling.onreadystatechange=(function(){
//       if(http_calling.readyState==4 && http_calling.status==200){
//        console.log(http_calling.responseText)
//       } 
//    })
//    http_calling.open('GET',url);
//    http_calling.send();


// Ajax calling method 2(fetch)
fetch(url,{
    method:'GET'
})
//then
//if  you want automatic return data dont use {}->curlyfase  or
//if  you want manually return data use {}->curlyfase 
.then(Response=>Response.json())
.then(result=>{
    console.log(result)
   
 if(result.Response == "True"){
     const movieArray = result.Search;
     var pageNumber=Math.ceil(result.totalResults/10);

     //creating movies information...
     const infoElement=`<div><b>Movie</b>:${movieName}</div>
                        <div><b>Total Result</b>:${result.totalResults}</div>
                        <div><b>Total page</b>:${pageNumber}</div>`
     document.getElementById('info').innerHTML=infoElement;

     //create a card dynamically...
    const cardUI = movieArray.map((movie)=>{
        var moveName=movie.Title.substr(0, 21);
        //templete literal its help to call the data for objects in dynamics rendering...
          return `<div class="card">
                      <img src=${movie.Poster}>
                      <h4>${moveName}</h4>
                  </div>`
     }).join('')
     document.getElementById('movies_card_container').innerHTML=cardUI;
 }
 else{
    document.getElementById('movies_card_container').innerHTML='';
    document.getElementById('info').innerHTML='';
    document.getElementById('movies_card_container').innerHTML=result.Error;
 }
  
})

//catch
//if  you want automatic return data dont use {}->curlyfase  or
//if  you want manually return data use {}->curlyfase
.catch(err=>{
    console.log(err)
    document.getElementById('info').innerHTML='';
    document.getElementById('movies_card_container').innerHTML="Please search movie name..."
})
 }
 