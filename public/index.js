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
let aboutUsWrapper = document.getElementsByClassName('aboutus-wrapper')[0];
console.log(aboutUsWrapper);

function aboutusWrapperInView(e){
    var elinfo = {
        "top":aboutUsWrapper.offsetTop,
        "height":aboutUsWrapper.offsetHeight,
    };

    if (elinfo.top + elinfo.height < window.pageYOffset || elinfo.top > window.pageYOffset + window.innerHeight) {
        console.log('I am not in view')
        $('.overlay-about div').css('opacity', 1);
        return false;
    } else {
        console.log('I am in view')
        $('.left-side').toggleClass('left-side-new');
        $('.right-side').toggleClass('right-side-new');
        $('.overlay-about div').css('opacity', 0);
        return true;
    }
}

//When any element in that class becomes visible in the middle of the screen fade and roll in the text

window.addEventListener('scroll', aboutusWrapperInView)
;
//When it is no longer visible in the middle of the screen/ view port toggle the class back.

});
