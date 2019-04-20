function loadMenus(menuObj, cssName) {
    for (var i = 0; i < menuObj.length; i++) {
        //console.log(menuObj[i]);
        $('.menu-list' + cssName).append('<p>' + menuObj[i].name + '</p><p>' + menuObj[i].description + '</p><p>' + menuObj[i].price + '</p>')
        //console.log(happyHourApps[i].name)

    }
    $('.menu-list').hide();
}

loadMenus(happyHourApps, '.happy-hour-list')
loadMenus(happyHourHotApps, '.hot-list')



$('.down-arrow').on('click', function () {
    var menuItemsText = $(this).siblings('.menu-list');
   menuItemsText.toggle();
   var hiArrow = $(this).siblings('.hi-arrow');
   hiArrow.show();

})



$('.hi-arrow').on('click', function () {
    $(this).hide();
    var hellonurse = $(this).siblings('.menu-list');
    hellonurse.toggle();


})


