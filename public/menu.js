function loadMenus(menuObj, cssName) {
    for (var i = 0; i < menuObj.length; i++) {
        //console.log(menuObj[i]);
        $(cssName).append('<p>' + menuObj[i].name + '<span>|</span>'+ menuObj[i].price + '</p><p>'+ menuObj[i].description + '</p>')
        //console.log(happyHourApps[i].name)

    }
    $('.menu-list').hide();
}

loadMenus(happyHourApps, '.appetizer')
loadMenus(happyHourSushiRaw, '.app-raw')
loadMenus(happyHourSushiRolls, '.app-rolls')
loadMenus(happyHourSpRolls, '.app-specialty-rolls')



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


