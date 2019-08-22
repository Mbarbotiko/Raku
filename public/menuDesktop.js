//Declaring functions:

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

//Global vars
//screen break considered media screen change
const desktopView = 866;
const mobileView = 865;

//window event listener for resizing event
var windowSize = window.innerWidth;
window.addEventListener('resize', function () {
    windowSize = window.innerWidth;
    loadMenuPage();//when this runs the content inside keeps adding additional event listeners without removing them, so show hide happens on the click event of those buttons, should I just add different menu buttons containers for mobile instead of messing with the click event on the same buttons
    console.log('window resize and function')

});
loadMenuPage();
function loadMenuPage() {

    //hide all containers
    $('#dt-happyhour').hide();
    $('#dt-lunch').hide();
    $('#dt-dinner').hide();
    $('#m-happyhour').hide();
    $('#m-lunch').hide();
    $('#m-dinner').hide();



    if (windowSize >= desktopView) {
        loadItems(happyHour, '#dt-happyhour');
        loadItems(lunchMenu, '#dt-lunch');
        loadItems(dinnerMenu, '#dt-dinner');

        //fix event listener to scroll to the top of the DIV when it is shown

        var menuNav = document.getElementsByClassName('menu-buttons')[0]
        //add event click event listener to the parent of the menu types selection

        menuNav.addEventListener('click', function (e) {
            console.log('added event listner to desktop')
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


        });
    }


    //MEDIA SCREEN CLICK SHOW HIDE LOAD MENU

    if (windowSize <= mobileView) {
        loadItems(happyHour, '#m-happyhour');
        loadItems(lunchMenu, '#m-lunch');
        loadItems(dinnerMenu, '#m-dinner');

        var menuNav = document.getElementsByClassName('menu-buttons')[0]
        //add event click event listener to the parent of the menu types selection

        menuNav.addEventListener('click', function (e) {
            console.log('added event listner to mobile')
            //this needs an if else checking window size for what event listener to add
            var navSelection = e.target;
            var menuType = e.target.getAttribute('data-is');
            var mySiblings = ($(navSelection).parent().siblings());
            var siblingOne = mySiblings[0].getElementsByTagName('h3')[0].getAttribute('data-is');
            var siblingTwo = mySiblings[1].getElementsByTagName('h3')[0].getAttribute('data-is');

            // function hideSiblings() {
            //     $('#m-' + siblingOne).hide();
            //     $('#m-' + siblingTwo).hide();
            // }
            switch (menuType) {
                case 'lunch':
                    $('#m-' + menuType).toggle();
                    //  hideSiblings();
                    break;
                case 'happyhour':
                    $('#m-' + menuType).toggle()
                    // hideSiblings();
                    break;
                case 'dinner':
                    $('#m-' + menuType).toggle()
                    // hideSiblings();
                    break;
                default: console.log('Menu button failing to show menu items, see menu.js');
            }
            // if ($('#m-' + menuType)) {
            //     $('html, body').animate({

            //         scrollTop: $('#-' + menuType).offset().top - 200
            //     }, 1000);

            // }


        });
    }

}






