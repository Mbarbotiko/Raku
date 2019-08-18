//if windowSize then >>>>
//hide mobile view containers
$('#m-happyhour').hide();
$('#m-lunch').hide();
$('#m-dinner').hide();



loadItems(happyHour, '#m-happyhour');
loadItems(lunchMenu, '#m-lunch');
loadItems(dinnerMenu, '#m-dinner');


// if (windowSize >= desktopView) {
//     menuNav.addEventListener('click', function (e) {

//     });


// }