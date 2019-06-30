$('#happyhour').hide();
$('#lunch').hide();
$('#dinner').hide();

//rewrite to be one function passed params
(function loadItems() {
    var s = '<span>';
    var p = '<p>';
    var sc = '</span>'
    var pc = '</p>'
    function loadItems(obj, cssName) {

        for (var i = 0; i < obj.length; i++) {
            var buildItem = '';
            try {

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

    //maybe consolidate this later add headers using jscript instead so this function is only called per section instead of per header in each section
    // loadItems(happyHourApps, '#happyhour')
    // loadItems(happyHourSushiRaw, '.app-raw')
    // loadItems(happyHourSushiRolls, '.app-rolls')
    // loadItems(happyHourSpRolls, '.app-specialty-rolls')
    // loadItems(drinkSpecials, '.drink-specials')
    // loadItems(lunchMenuEntree, '.lunch-entrees')
    // loadItems(lunchSpecialRolls, '.lunch-specialty-rolls')
    // loadItems(lunchBox, '.lunch-boxes');
    // loadItems(dinnerEntree, '.dinner-entrees')
    // loadItems(dinnerRolls, '.dinner-specialty-rolls')
    loadItems(happyHourApps, '#happyhour');
    loadItems(lunchMenuEntree, '#lunch');
    loadItems(dinnerEntree, '#dinner');




}());

var menuNav = document.getElementsByClassName('menu-buttons')[0]
//add event click event listener to the parent of the menu types selection
menuNav.addEventListener('click', function (e) {
    //select the target of the parent and its attribute, which is then passed to a matching DIV ID to show/ hide the menu item previously loaded above in the loadItems function.  When the event target is clicked it will show the DIV with the ID matching the data-is attribute of the item clicked and hide it's sibling containers.
    var navSelection = e.target;
    var menuType = e.target.getAttribute('data-is');
    var mySiblings = ($(navSelection).parent().siblings());
    var siblingOne = mySiblings[0].getElementsByTagName('h3')[0].getAttribute('data-is');
    var siblingTwo = mySiblings[1].getElementsByTagName('h3')[0].getAttribute('data-is');
    function hideSiblings(){
        $('#'+siblingOne).hide();
        $('#'+siblingTwo).hide();
    }
    switch (menuType) {
        case 'lunch': 
        $('#'+menuType).show()
        hideSiblings()
            break;
        case 'happyhour': 
        $('#'+menuType).show()
        hideSiblings()
            break;
        case 'dinner': 
        $('#'+menuType).show()
        hideSiblings()
            break;
        default: console.log('ohboy')
    }
})


