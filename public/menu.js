$('.menu-list').hide();

function loadMenus(menuObj, cssName) {
    for (var i = 0; i < menuObj.length; i++) {
        //console.log(menuObj[i]);
        $(cssName).append('<p>' + menuObj[i].name + '<span>|</span>'+ menuObj[i].price + '</p><p>'+ menuObj[i].description + '</p>')
        //console.log(happyHourApps[i].name)

    }
    
}

function loadDrinks(menuObj, cssName) {
    for (var i = 0; i < menuObj.length; i++) {
        //console.log(menuObj[i]);
        $(cssName).append('<p>' + menuObj[i].name + '<span>|</span>'+ menuObj[i].price + '</p>')
        //console.log(happyHourApps[i].name)

    }
    
}

function loadNameDescription(menuObj, cssName) {
    for (var i = 0; i < menuObj.length; i++) {
        //console.log(menuObj[i]);
        //turn the first p rkuRD?or add underline
        $(cssName).append('<p>' + menuObj[i].name + '</p>'+ '<p>'+menuObj[i].description + '</p>')
        //console.log(happyHourApps[i].name)

    }
    
}

function loadNames(menuObj, cssName) {
    for (var i = 0; i < menuObj.length; i++) {
        //console.log(menuObj[i]);
        //turn the first p rkuRD?or add underline
        $(cssName).append('<p>' + menuObj[i].name + '</p>')
        //console.log(happyHourApps[i].name)

    }
    
}



loadMenus(happyHourApps, '.appetizer')
loadMenus(happyHourSushiRaw, '.app-raw')
loadMenus(happyHourSushiRolls, '.app-rolls')
loadMenus(happyHourSpRolls, '.app-specialty-rolls')
loadDrinks(drinkSpecials, '.drink-specials')
loadNameDescription(lunchMenuEntree, '.lunch-entrees')
loadNames(lunchSpecialRolls, '.lunch-specialty-rolls')
loadNames(lunchBox, '.lunch-boxes');
loadNameDescription(dinnerEntree, '.dinner-entrees')
loadNameDescription(dinnerRolls, '.dinner-specialty-rolls')

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


