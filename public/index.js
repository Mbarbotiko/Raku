$(function () {
    console.log('javascript file linked');

    let locationLink = document.querySelectorAll('[data-value ="location"]')[0];

    let homeLink = document.querySelectorAll('[data-value ="home"]')[0];

    let careersLink = document.querySelectorAll('[data-value ="careers"]')[0];


    locationLink.addEventListener('click', function(){
        $('.container').load('./location.html');

    });

    homeLink.addEventListener('click', function(){
        $('.container').load('./index.html');

    });

    careersLink.addEventListener('click', function(){
        $('.container').load('./careers.html');

    });
   
    //CORS error must be on a server local host or online already.

    // http://api.jquery.com/load/


 

});
