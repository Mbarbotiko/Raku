$(function () {
    console.log('nav file linked');
    //start new HTTP request
    var xhr = new XMLHttpRequest();
    xhr.onload= function(){
        //if a successful request:
        if (xhr.status ===200){
            responseObj = xhr.responseText
            var parser, xmlDoc
            //use DOMParser to find element from response to replace innerHTML of current page
            parser = new DOMParser();
            xmlDoc = parser.parseFromString(responseObj, 'text/html')
            ('loader-nav')
            document.getElementById('testing').innerHTML= xmlDoc.getElementById
            ('loader-nav').innerHTML;
            //remember to change the testing ID when other pages are built to a different ID.
        }
    }


xhr.open('GET', 'index.html', true);
xhr.send(null);
    
});
