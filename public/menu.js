//check for screen size here
// if screen size is mobile append divs under the button divs
//if desk top append divs to menu items section
//need to add event listener to window that checks for divs in dom, on specific window size (if div exists under this parent then remove it, and add it to this other parent) if this happens then the element click event needs to be added again as well.
// window.addEventListener('resize', function(){
//    console.log(window.innerWidth);
//if the window size is <768 and the div lives under this parent then to this
//if the window size is is any thing else check for the element under the other parent if its not there destory then reappend along with click function
var desktopView = 769;
var mobileView = 768;

// })
rearrange();
//creates DIV's dynamically based on screen size because they will be arranged differently on mobile versus desktop with different functionality

function rearrange() {
    if (window.innerWidth <= mobileView) {
        $('#lunch-button').append(`<div id='lunch'></div>`)
        $('#happy-hour-button').append(`<div id='happyhour'></div>`)
        $('#dinner-button').append(`<div id='dinner'></div>`)
        $('#lunch-button').append(`<div id='lunch'></div>`)
    } else {
        $('.menu-items').append(`<div id='lunch'></div>
    <div id='happyhour'></div>
    <div id='dinner'></div>`
        )



    }
}

$('#happyhour').hide();
$('#lunch').hide();
$('#dinner').hide();

//rewrite to be one function passed params
(function loadItems() {
    var s = '<span>';
    var p = '<p>';
    var sc = '</span>'
    var pc = '</p>'
    var h = '<h4>'
    var hc = '</h4>'
    function loadItems(obj, cssName) {

        for (var i = 0; i < obj.length; i++) {
            var buildItem = '';
            try {
                if (obj[i].header) {
                    buildItem += h + obj[i].header + hc
                }

                if (obj[i].name) {
                    buildItem += p + obj[i].name
                    // $(cssName).append(p + obj[i].name);
                }
                if (obj[i].price) {
                    buildItem += s + '|' + sc + obj[i].price + pc
                    // $(cssName).append(s + '|' + sc + obj[i].price+pc);

                }
                if (obj[i].description) {
                    buildItem += p + obj[i].description + pc
                    // $(cssName).append(p + obj[i].description + pc);
                } if (!obj[i].price && !obj[i].description) {
                    buildItem += pc
                }

                //console.log(buildItem);
                $(cssName).append(buildItem)
                //append here after building item string out

            } catch (error) {
                console.log(error);
                //create small modal here to try again or view PDF version
                //or text because its a show/hide function on the page to retry the load o report it/PDF view

            }
        }
    }
    //load items in specific divs
    loadItems(happyHour, '#happyhour');
    loadItems(lunchMenu, '#lunch');
    loadItems(dinnerMenu, '#dinner');
    var closeButton = `<h5 role = 'close'><span>[</span>   Collapse   <span>]</span></h5>`;

    if (window.innerWidth >= desktopView) {
        //appending buttons that will close the DIV only for desktop view
        $('#lunch').append(closeButton)
        $('#happyhour').append(closeButton)
        $('#dinner').append(closeButton)
        $('[role="close"]').on('click', function(){
            $(this).parent().hide();
            //add event listened to close this parent, and scroll back to top where the top menubar isnt showing, scrollX = 10 from that position
            $(window).scrollTop(10);
        })
    }


}());
//fix event listener to scroll to the top of the DIV when it is shown

var menuNav = document.getElementsByClassName('menu-buttons')[0]
//add event click event listener to the parent of the menu types selection
menuNav.addEventListener('click', function (e) {
    //select the target of the parent and its attribute, which is then passed to a matching DIV ID to show/ hide the menu item previously loaded above in the loadItems function.  When the event target is clicked it will show the DIV with the ID matching the data-is attribute of the item clicked and hide it's sibling containers.
    var navSelection = e.target;
    var menuType = e.target.getAttribute('data-is');
    var mySiblings = ($(navSelection).parent().siblings());
    var siblingOne = mySiblings[0].getElementsByTagName('h3')[0].getAttribute('data-is');
    var siblingTwo = mySiblings[1].getElementsByTagName('h3')[0].getAttribute('data-is');

    function hideSiblings() {
        $('#' + siblingOne).hide();
        $('#' + siblingTwo).hide();
    }
    switch (menuType) {
        case 'lunch':
            $('#' + menuType).show();
            hideSiblings();
            break;
        case 'happyhour':
            $('#' + menuType).show()
            hideSiblings();
            break;
        case 'dinner':
            $('#' + menuType).show();
            hideSiblings();
            break;
        default: console.log('Menu button failing to show menu items, see menu.js');
    }
    var addressBar = document.getElementsByClassName('hd-ft-bar')[0].style.display;
    //if the address bar isnt displayed do not run with a top offset
    if (addressBar === 'none' && window.innerWidth >= 769 || addressBar === null && window.innerWidth >= 769) {
        $('html, body').animate({
            scrollTop: $('#' + menuType).offset().top
        }, 1000);
    }
    if (addressBar === 'block' && window.innerWidth >= 769) {
        //if it is, offset by 100 so menu header is in view
        $('html, body').animate({
            scrollTop: $('#' + menuType).offset().top - 100
        }, 1000);
    }

    //for mediascreen sizes break point 768, because the address bar shouldnt exist at this screen size onload and at break 
    if (window.innerWidth <= 768) {
        $('html, body').animate({
            scrollTop: $('#' + menuType).offset().top - 200
        }, 0);
    }
    //create a fade affect here later
});

