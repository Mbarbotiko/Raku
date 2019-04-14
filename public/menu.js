

for(var i = 0; i<happyHourApps.length;i++){
    $('.menu-list .happy-hour-list').append('<p>'+happyHourApps[i].name+'</p><p>'+happyHourApps[i].description+'</p><p>'+happyHourApps[i].price+'</p>')
    //console.log(happyHourApps[i].name)
}

function hideMenuItems(){
    $('.menu-list').hide();
}


$('.down-arrow').on('click', function(){
    var menuItemsText = $(this).siblings('.menu-list');
    console.log(menuItemsText)
    menuItemsText.toggle();
     })