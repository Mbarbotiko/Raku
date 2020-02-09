//add event listener to open and close menu, load menu items
openCloseMenu()
loadItems(happyHour, '#happyhour');
loadItems(lunchMenu, '#lunch');
loadItems(dinnerMenu, '#dinner');

function loadItems(obj, cssName) {
    var s = '<span>';
    var p = '<p>';
    var sc = '</span>'
    var pc = '</p>'
    var h = '<h4>'
    var hc = '</h4>'
    var ns = '-'
    for (var i = 0; i < obj.length; i++) {
        var buildItem = '';
        try {
            if (obj[i].header) {
                buildItem += h + obj[i].header + hc
            }

            if (obj[i].name) {
                buildItem += p + obj[i].name
            }
            if (obj[i].nameSpan) {
                buildItem += p + s + ns + sc + obj[i].nameSpan + s + ns + sc
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
function openCloseMenu() {
    try {
        var menuButtons = document.getElementsByClassName('menu-buttons')[0].children;
        //console.log('global scope'+menuType)
        for (var i = 0; i < menuButtons.length; i++) {
            menuButtons[i].addEventListener('click', function (e) {
                var menuType = e.target.getAttribute('data-is');
                var menuID = '#' + menuType;
                $(menuID).toggle();
            })
        }
    } catch (e) {
        console.log('Menu button function failed', e)
    }
}



