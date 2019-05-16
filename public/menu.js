$('.menu-list').hide();

//rewrite to be one function passed params
(function loadItems() {
    var s = '<span>';
    var p = '<p>';
    var sc = '</span>'
    var pc = '</p>'
    function loadItems(obj, cssName) {

        for (var i = 0; i < obj.length; i++) {
            var buildItem ='';
            try {

                if (obj[i].name) {
                    buildItem+=p + obj[i].name
                   // $(cssName).append(p + obj[i].name);
                }
                if (obj[i].price) {
                   buildItem+=s + '|' + sc + obj[i].price+pc
                    // $(cssName).append(s + '|' + sc + obj[i].price+pc);

                }
                if (obj[i].description) {
                    buildItem+=p + obj[i].description + pc
                    // $(cssName).append(p + obj[i].description + pc);
                }if(!obj[i].price&&!obj[i].description){
                    buildItem+=pc
                }

                //console.log(buildItem);
                $(cssName).append(buildItem)
                //append here after building item string out

            } catch (error) {
                console.log(error);
                //create small modal here to try again or view PDF version

            }
        }
    }

    //maybe consolidate this later add headers using jscript instead.
    loadItems(happyHourApps, '.appetizer')
    loadItems(happyHourSushiRaw, '.app-raw')
    loadItems(happyHourSushiRolls, '.app-rolls')
    loadItems(happyHourSpRolls, '.app-specialty-rolls')
    loadItems(drinkSpecials, '.drink-specials')
    loadItems(lunchMenuEntree, '.lunch-entrees')
    loadItems(lunchSpecialRolls, '.lunch-specialty-rolls')
    loadItems(lunchBox, '.lunch-boxes');
    loadItems(dinnerEntree, '.dinner-entrees')
    loadItems(dinnerRolls, '.dinner-specialty-rolls')


}());



$('.arrow.down').on('click', function () {
    var menuItemsText = $(this).siblings('.menu-list');
    menuItemsText.toggle();
    var upArrow = $(this).siblings('.arrow.up');
    upArrow.toggle();

})



$('.arrow.up').on('click', function () {
    $(this).hide();
    var menuItemsText = $(this).siblings('.menu-list');
    menuItemsText.toggle();


})


