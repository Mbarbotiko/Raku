//Declaring functions:

/*
force a js reload if someone resizes the window
function bind()
        {
            $(window).resize(function () { $("#scriptToReload").attr("src",   "reloadedScript.js"); });
        }

$(document).ready( function () { bind();} );


*/


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

//Global vars
//screen break considered media screen change
const desktopView = 866;
const mobileView = 865;

//window event listener for resizing event
var windowSize = window.innerWidth;
window.addEventListener('resize', function () {
    windowSize = window.innerWidth;

});

//if windowSize then >>>>
//hide desktop view containers
$('#dt-happyhour').hide();
$('#dt-lunch').hide();
$('#dt-dinner').hide();

//load items in specific divs
loadItems(happyHour, '#dt-happyhour');
loadItems(lunchMenu, '#dt-lunch');
loadItems(dinnerMenu, '#dt-dinner');


//fix event listener to scroll to the top of the DIV when it is shown

var menuNav = document.getElementsByClassName('menu-buttons')[0]
//add event click event listener to the parent of the menu types selection

menuNav.addEventListener('click', function (e) {
    if (windowSize >= desktopView) {
        //this needs an if else checking window size for what event listener to add
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
    }

});



