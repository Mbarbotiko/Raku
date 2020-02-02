$(function () {
    const ua = window.navigator.userAgent;
    const msie = ua.indexOf('MSIE ');
    const trident = ua.indexOf('Trident/');
    const edge = ua.indexOf('Edge/');
    var header = document.getElementsByTagName('header')[0];
    var headerBar = header.getElementsByClassName('hd-ft-bar')[0];
    var navBar = header.getElementsByClassName('navbar')[0];

    function headerBarHide() {

        //IE doesn't understand what window.scrollY is, so set a background for without scroll position
        if (trident > -1) {
            if (window.innerWidth < 768) {
                $(navBar).attr('style', 'background: transparent !important');
                $(navBar).css({ top: '40px' })
            } else {
                $(navBar).attr('style', 'background:black !important');
                $(navBar).css({ top: '0px' });//change position of the nav bar 
            }
        }

        //Function hides the address bar at the top of the screen on scroll, to add a fade effect write below:
        if (window.scrollY > 3 && window.innerWidth > 991) {

            //hide address bar, add black background to nav bar
            headerBar.style.display = 'none';
            if (msie < 0 && trident < 0 && edge < 0) {
                //if all of these return false:
                $(navBar).attr('style', 'background: rgb(0,0,0,.85) !important');
            } else {
                $(navBar).attr('style', 'background:black !important');


            }
            $(navBar).css({ top: '0px' });//change position of the nav bar because the header footer bar disappears
        }

        if (window.scrollY < 3 && window.innerWidth > 991) {
            headerBar.style.display = 'block';
            headerBar.classList.add('hdBarFadeIn');
            $(navBar).attr('style', 'background: transparent !important');
            $(navBar).css({ top: '40px' })
            //returns bar
        }

        if (window.innerWidth < 991) {
            //hides bar on window size of less than 991
            headerBar.style.display = 'none';
        }

    };

    function headerBarResize() {
        //Function hides the address bar at the top of the screen on scroll, to add a fade effect write below:
        if (window.innerWidth < 991 && window.innerWidth > 767) {
            //hide address bar, add black background to nav bar
            headerBar.style.display = 'none';
            if (msie < 0 && trident < 0 && edge < 0) {
                //if all of these return false:
                $(navBar).attr('style', 'background: rgb(0,0,0,.85) !important');
            } else {
                $(navBar).attr('style', 'background:black !important');
            }
            $(navBar).css({ top: '0px' });//change position of the nav bar because the header footer bar disappears
        }
        if (window.innerWidth > 991) {
            headerBar.style.display = 'block';
            headerBar.classList.add('hdBarFadeIn');
            $(navBar).attr('style', 'background: transparent !important');
            $(navBar).css({ top: '40px' })
            //returns bar
        }
        if (window.innerWidth < 768) {
            $(navBar).attr('style', 'background: transparent !important');
            $(navBar).css({ top: '40px' })
            //returns bar
        }

    };
    //Event listener for window on scroll for header footer bar
    window.addEventListener('scroll', headerBarHide);
    window.addEventListener('resize', headerBarResize);
    window.addEventListener('load', function () {
        if (window.location.hash) {
            //on page load check for hash, apply css to the nav bar
            if (window.innerWidth > 991) {
                $(navBar).attr('style', 'background:black !important');
                $(navBar).css({ top: '0px' });//change position of the nav bar 
            }
        }
    })


    //Event listener for window on scroll for about us section
    window.addEventListener('scroll', aboutusWrapperInView);
    //Select wrapper for about us section
    function aboutusWrapperInView() {
        var aboutUsWrapper = document.getElementsByClassName('aboutus-wrapper');
        for (var i = 0; i < aboutUsWrapper.length; i++) {
            var a = aboutUsWrapper[i].offsetTop;//distance from parent
            var b = aboutUsWrapper[i].offsetHeight;//height of element
            var c = window.pageYOffset;//window position
            var d = window.innerHeight;//height of window
            var e = b * 1.1;//range
            one = a + b - e < c;//if distance from parent + height of element - range is less than window position, if this element is NOT in the windows position range it must have the overlay assigned to it, applies to scroll up
            two = a > c - e + d;
            //if distance from parent is more than window position - offset + window height, applies to scroll down
            if (one || two) {
                $(aboutUsWrapper[i]).children('.panel.middle').find('.overlay-header').removeClass('disappear')//make this overlay appear
                $(aboutUsWrapper[i]).children('.left-side').removeClass('left-side-new');
                $(aboutUsWrapper[i]).children('.right-side').removeClass('right-side-new');
            } else {
                $(aboutUsWrapper[i]).children('.panel.middle').find('.overlay-header').addClass('disappear')//make this overlay dissapear
                $(aboutUsWrapper[i]).children('.left-side').addClass('left-side-new');
                $(aboutUsWrapper[i]).children('.right-side').addClass('right-side-new');
            }
        }
    }


    function checkForIE(selector, cssProp, cssVal) {
        //create a reusable function, accepts css selector, property and value for that property
        if (msie < 0 && trident < 0 && edge < 0) {
            //check for IE type browser and Edge
            if (selector.length !== 0) {
                //if element exists on the page and its NOT an IE or Edge browser add property and value to this dom element
                selector.css(cssProp, cssVal);
            }
        }
    }
    //for subpage header.js (all pages except index page)
    checkForIE($('.subpage-content h5'), 'animation-name', 'shrink')
    //for landing page index.js (only index page)
    checkForIE($('.landing-subtext'), 'animation-name', 'shrink');


    //event listener to change the background color of the navigation only when berger is opening and closing, once closed go back to transparent
    function addBlack() {

        if (msie < 0 && trident < 0 && edge < 0) {
            var isOpen = $(this).attr('aria-expanded');
            if (isOpen === 'false') {
                $(navBar).attr('style', 'background:rgb(0,0,0,.85)!important');
            }
            if (isOpen === 'true') {
                setTimeout(function () {
                    $(navBar).attr('style', 'background:transparent !important');
                }, 250);
            }
        } else {
            var isOpen = $(this).attr('aria-expanded');
            if (isOpen === 'false') {
                $(navBar).attr('style', 'background:black !important');
            }

        }

    }

    $('.navbar-toggler').on('click', addBlack);
});
