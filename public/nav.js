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
            document.getElementsByTagName('header')[0].innerHTML= xmlDoc.getElementById
            ('nav-transfer').innerHTML
            document.getElementsByTagName('footer')[0].innerHTML=
            xmlDoc.getElementById
            ('footer-transfer').innerHTML
        }
    }

xhr.open('GET', 'index.html', true);
xhr.send(null);
    
});
