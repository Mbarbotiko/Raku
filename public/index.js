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
    //Event listener for window on scroll for header footer bar
    window.addEventListener('scroll', headerBarHide);
    //Event listener for window on scroll for about us section
    window.addEventListener('scroll', aboutusWrapperInView);

    //Select wrapper for about us section
    let aboutUsWrapper = document.getElementsByClassName('aboutus-wrapper');
    //Function for removing and adding classes on scroll for the wrapper
    function aboutusWrapperInView() {
        for (var i = 0; i < aboutUsWrapper.length; i++) {
            if (aboutUsWrapper[i].offsetTop + aboutUsWrapper[i].offsetHeight < window.pageYOffset - 400 || aboutUsWrapper[i].offsetTop > window.pageYOffset - 400 + window.innerHeight) {
                $(aboutUsWrapper[i]).children('.left-side').removeClass('left-side-new');
                $(aboutUsWrapper[i]).children('.right-side').removeClass('right-side-new');
                $(aboutUsWrapper[i]).children('.panel.middle').find('.overlay-header').removeClass('disappear')
            } else {
                $(aboutUsWrapper[i]).children('.left-side').addClass('left-side-new');
                $(aboutUsWrapper[i]).children('.right-side').addClass('right-side-new');
                $(aboutUsWrapper[i]).children('.panel.middle').find('.overlay-header').addClass('disappear')

            }
        }
    }


});
