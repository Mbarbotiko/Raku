$(function () {
    console.log('nav file linked');
    //create new HTTP req
    var xhr = new XMLHttpRequest();
    xhr.onload= function(){
        //if response is good
        if (xhr.status ===200){
            responseObj = xhr.responseText
            var parser, xmlDoc
            parser = new DOMParser();
            xmlDoc = parser.parseFromString(responseObj, 'text/html')
            document.getElementById('testing').innerHTML= xmlDoc.getElementById
            ('loader-nav').innerHTML
        }
    }

xhr.open('GET', 'index.html', true);
xhr.send(null);
    
});
