$(function () {
   
    //create new HTTP req
    var xhr = new XMLHttpRequest();
    xhr.onload= function(){
        //if response is good
        if (xhr.status ===200){
            responseObj = xhr.responseText
            console.log(responseObj)
            document.getElementById('map-SLP').innerHTML= responseObj;
        }
    }

xhr.open('GET', '/iframe', true);
xhr.send(null);
console.log('nav.js ran');
    
});
