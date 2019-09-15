//Global vars
//screen break considered media screen change
// const desktopView = 866;
// const mobileView = 865;
function hideMenus() {
    $('#dt-happyhour').hide();
    $('#dt-lunch').hide();
    $('#dt-dinner').hide();
    $('#m-happyhour').hide();
    $('#m-lunch').hide();
    $('#m-dinner').hide();
}
hideMenus();
//function that loads menuobject into the dom
function loadItems(obj, cssName) {
    var s = '<span>';
    var p = '<p>';
    var sc = '</span>'
    var pc = '</p>'
    var h = '<h4>'
    var hc = '</h4>'
    for (var i = 0; i < obj.length; i++) {
        var buildItem = '';
        try {
            if (obj[i].header) {
                buildItem += h + obj[i].header + hc
            }

            if (obj[i].name) {
                buildItem += p + obj[i].name
            }
            if (obj[i].price) {
                buildItem += s + '|' + sc + obj[i].price + pc

            }
            if (obj[i].description) {
                buildItem += p + obj[i].description + pc
            } if (!obj[i].price && !obj[i].description) {
                buildItem += pc
            }

            $(cssName).append(buildItem)
            //append here after building item string out

        } catch (error) {
            console.log(error);
            //create small modal here to try again or view PDF version
            //or text because its a show/hide function on the page to retry the load o report it/PDF view

        }
    }
}

loadItems(happyHour, '#dt-happyhour');
loadItems(lunchMenu, '#dt-lunch');
loadItems(dinnerMenu, '#dt-dinner');
loadItems(happyHour, '#m-happyhour');
loadItems(lunchMenu, '#m-lunch');
loadItems(dinnerMenu, '#m-dinner');


//window event listener for resizing event, will run loadMenuPage function on resize
var windowSize = window.innerWidth;
window.addEventListener('resize', function () {
    hideMenus();
    windowSize = window.innerWidth;

});

//for desktop view add this event listener to buttons
var menuNav = document.getElementsByClassName('menu-buttons')[0];
menuNav.addEventListener('click', function (e) {
    var navSelection = e.target;
    var menuType = e.target.getAttribute('data-is');
    var mySiblings = ($(navSelection).parent().siblings());
    var siblingOne = mySiblings[0].getElementsByTagName('h3')[0].getAttribute('data-is');
    var siblingTwo = mySiblings[1].getElementsByTagName('h3')[0].getAttribute('data-is');

    function hideSiblings() {
        $('#dt-' + siblingOne).hide();
        $('#dt-' + siblingTwo).hide();
    }
    switch (menuType) {
        case 'lunch':
            $('#dt-' + menuType).show();
            hideSiblings();
            break;
        case 'happyhour':
            $('#dt-' + menuType).show()
            hideSiblings();
            break;
        case 'dinner':
            $('#dt-' + menuType).show();
            hideSiblings();
            break;
        default: console.log('Menu button failing to show menu items, see menu.js');
    }
    if ($('#dt-' + menuType)) {
        $('html, body').animate({

            scrollTop: $('#dt-' + menuType).offset().top - 200
        }, 1000);

    }
});


var menuNav = document.getElementsByClassName('media-menu-buttons')[0]
menuNav.addEventListener('click', function (e) {
    console.log('sanity')
    var navSelection = e.target;
    var menuType = e.target.getAttribute('data-is');
    console.log(menuType)
    var mySiblings = ($(navSelection).parent().siblings());
    console.log(mySiblings)
    switch (menuType) {
        case 'lunch':
            $('#m-' + menuType).toggle();
            console.log('toggled')
            break;
        case 'happyhour':
            $('#m-' + menuType).toggle()
            break;
        case 'dinner':
            $('#m-' + menuType).toggle()
            break;
        default: console.log('Menu button failing to show menu items, see menu.js');
    }
});










