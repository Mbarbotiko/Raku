//load all items in the DIV's
loadItems(happyHour, '#dt-happyhour');
loadItems(lunchMenu, '#dt-lunch');
loadItems(dinnerMenu, '#dt-dinner');
loadItems(happyHour, '#m-happyhour');
loadItems(lunchMenu, '#m-lunch');
loadItems(dinnerMenu, '#m-dinner');
//hide all containers
$('#dt-happyhour').hide();
$('#dt-lunch').hide();
$('#dt-dinner').hide();
$('#m-happyhour').hide();
$('#m-lunch').hide();
$('#m-dinner').hide();
//add click event to the buttons on load that checks for orientation and screen size following css standards
//on window resize event, hide the div's so it looks like a fresh start
//window event listener for resizing event
var windowSize = window.innerWidth;
//Global vars
//screen break considered media screen change
const desktopView = 866;
const mobileView = 865;



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


var menuNav = document.getElementsByClassName('menu-buttons')[0]
//add event click event listener to the parent of the menu types selection

menuNav.addEventListener('click', test)

function test(e) {

    //this needs an if else checking window size for what event listener to add
    var navSelection = e.target;
    var menuType = e.target.getAttribute('data-is');
    var mySiblings = ($(navSelection).parent().siblings());


    //desktop if desktop:
    if (windowSize >= desktopView) {
        var siblingOne = mySiblings[0].getElementsByTagName('h3')[0].getAttribute('data-is');
        var siblingTwo = mySiblings[1].getElementsByTagName('h3')[0].getAttribute('data-is');
        console.log('desktop add event')

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
    }


    //if media screen do this:
    if (windowSize <= mobileView) {
        console.log('mediascreen add event')

        switch (menuType) {
            case 'lunch':
                $('#m-' + menuType).toggle();
                break;
            case 'happyhour':
                $('#m-' + menuType).toggle()
                break;
            case 'dinner':
                $('#m-' + menuType).toggle()
                break;
            default: console.log('Menu button failing to show menu items, see menu.js');
        }
    }


};

window.addEventListener('resize', function () {
    windowSize = window.innerWidth;
    menuNav.removeEventListener('click', test)
    $('#dt-happyhour').hide();
    $('#dt-lunch').hide();
    $('#dt-dinner').hide();
    $('#m-happyhour').hide();
    $('#m-lunch').hide();
    $('#m-dinner').hide();
    //add orientation here later
    menuNav.addEventListener('click', test)


});









