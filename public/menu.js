function loadMenus(menuObj, cssName){
for(var i = 0; i<menuObj.length;i++){
    $('.menu-list'+cssName).append('<p>'+menuObj[i].name+'</p><p>'+menuObj[i].description+'</p><p>'+menuObj[i].price+'</p>')
    //console.log(happyHourApps[i].name)
    
}
$('.menu-list').hide();
}

loadMenus(happyHourApps,'.happy-hour-list')
loadMenus(happyHourHotApps,'.hot-list')


$('.down-arrow').on('click', function(){
    var menuItemsText = $(this).siblings('.menu-list');
    console.log(menuItemsText)
    menuItemsText.toggle();
     })


    console.log(loadMenus(happyHourHotApps,'.happy-hour-hot-list'));