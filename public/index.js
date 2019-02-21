$(function () {
    console.log('index.js ran');
    headerID = document.getElementById('loader-nav')
    headerBar= headerID.getElementsByClassName('hd-ft-bar')[0];
    navBar = headerID.getElementsByClassName('navbar')[0]

   function headerBarHide(){
       //function hides the address bar at the top of the screen on scroll, to add a fade effect write below:
        if(window.scrollY>0){
            headerBar.style.display ="none"
            navBar.classList.add('fixed-top')
        }else{
            headerBar.style.display ="block"
            navBar.classList.remove('fixed-top');
        }
    };
   window.addEventListener('scroll', headerBarHide)

   console.log($('.middle-image').height());

   var a = document.getElementsByClassName('middle-image')[0].clientHeight;
var b = document.getElementsByClassName('middle-image')[0].offsetHeight;
var c = document.getElementsByClassName('middle-image')[0].scrollHeight;
console.log(a,b,c);

//add event listener to remove class and add class in javascript instead: DO NOT TOGGLE THE CLASS
//left side of about me panel:
    $('.right-side').click(function(){
      $('.left-side').toggleClass('left-side-new');
    });



});
