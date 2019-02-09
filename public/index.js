$(function () {
    console.log('index.js ran');

    // if(window.location.pathname!=='/'){
    //     console.log('heybuddy')
    // }

 
//#loader-nav, .hd-ft-bar
    headerBar= document.getElementById('loader-nav').getElementsByClassName('hd-ft-bar')[0];
    console.log(headerBar)

   function headerBarHide(){
        console.log(window.scrollY);
        if(window.scrollY>0){
            headerBar.style.display ="none"
        }else{
            headerBar.style.display ="block"
        }
    };

   window.addEventListener('scroll', headerBarHide)


  

});
