$(function () {
    console.log('index.js ran');
    headerID = document.getElementById('loader-nav');
    headerBar = headerID.getElementsByClassName('hd-ft-bar')[0];
    navBar = headerID.getElementsByClassName('navbar')[0];

    function headerBarHide() {
        //Function hides the address bar at the top of the screen on scroll, to add a fade effect write below:
        if (window.scrollY > 0) {
            headerBar.style.display = "none";
            navBar.classList.add('fixed-top');
        } else {
            headerBar.style.display = "block";
            navBar.classList.remove('fixed-top');
        }
    };
    //Event listener for window on scroll to run headerBarHide();
    window.addEventListener('scroll', headerBarHide);

    //Select the element class
    let aboutUsWrapper = document.getElementsByClassName('aboutus-wrapper');

    function aboutusWrapperInView() {

        for (var i = 0; i < aboutUsWrapper.length; i++) {

            if(aboutUsWrapper[i].offsetTop+aboutUsWrapper[i].offsetHeight<window.pageYOffset-400||aboutUsWrapper[i].offsetTop>window.pageYOffset-400 + window.innerHeight){
                $(aboutUsWrapper[i]).children('.left-side').removeClass('left-side-new');
                $(aboutUsWrapper[i]).children('.right-side').removeClass('right-side-new');
                $(aboutUsWrapper[i]).children('.panel.middle').find('.overlay-about').removeClass('testing')
            }else{
                 $(aboutUsWrapper[i]).children('.left-side').addClass('left-side-new');
                $(aboutUsWrapper[i]).children('.right-side').addClass('right-side-new');
                $(aboutUsWrapper[i]).children('.panel.middle').find('.overlay-about').addClass('testing')

            }
        }
    }

    //When any element in that class becomes visible in the middle of the screen fade and roll in the text

    window.addEventListener('scroll', aboutusWrapperInView)
        ;
    //When it is no longer visible in the middle of the screen/ view port toggle the class back.

});
