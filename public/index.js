$(function () {
    const ua = window.navigator.userAgent;
    const msie = ua.indexOf('MSIE ');
    const trident = ua.indexOf('Trident/');
    const edge = ua.indexOf('Edge/');
    var header = document.getElementsByTagName('header')[0];
    var headerBar = header.getElementsByClassName('hd-ft-bar')[0];
    var navBar = header.getElementsByClassName('navbar')[0];

    function headerBarHide() {
        //Function hides the address bar at the top of the screen on scroll, to add a fade effect write below:
        if (window.scrollY > 3 && window.innerWidth > 991) {
            //hide address bar, add black background to nav bar
            headerBar.style.display = 'none';
            if (msie < 0 && trident < 0 && edge < 0) {
                $(navBar).attr('style', 'background: rgb(0,0,0,.85) !important');
            } else {
                $(navBar).attr('style', 'background:black !important');
            }
            $(navBar).css({ top: '0px' });
        }





        if (window.scrollY < 3 && window.innerWidth > 991) {
            headerBar.style.display = 'block';
            headerBar.classList.add('hdBarFadeIn');
            $(navBar).attr('style', 'background: transparent !important');
            $(navBar).css({ top: '40px' })

            //returns bar

        }

        if (window.innerWidth < 991) {
            headerBar.style.display = 'none';
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
        //if window width is equal to or higher than __pixels, run this code:
        if (window.innerWidth >= 1160) {
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
        } if (window.innerWidth < 1159) {
            $(aboutUsWrapper[i]).children('.left-side').css('display', 'none');
            $(aboutUsWrapper[i]).children('.right-side').css('display', 'none');
            for (var i = 0; i < aboutUsWrapper.length; i++) {
                if (aboutUsWrapper[i].offsetTop + aboutUsWrapper[i].offsetHeight < window.pageYOffset - 400 || aboutUsWrapper[i].offsetTop > window.pageYOffset - 400 + window.innerHeight) {
                    $(aboutUsWrapper[i]).children('.panel.middle').find('.overlay-header').removeClass('disappear')
                } else {
                    $(aboutUsWrapper[i]).children('.panel.middle').find('.overlay-header').addClass('disappear')

                }

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
    //for subpage header.js
    checkForIE($('.subpage-content h5'), 'animation-name', 'shrink')
    //for landing page index.js
    checkForIE($('.landing-subtext'), 'animation-name', 'shrink')

});
