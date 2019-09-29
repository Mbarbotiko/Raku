var deliveryData;




$('#bs').on('click', function () {
    $('.modal').toggle()

})


$('.close').on('click', function () {
    $('.modal').toggle()

})



var deliveryContainer = document.getElementsByClassName('delivery-services');
var deliveryImages = deliveryContainer[0].getElementsByTagName('img');

//add event listener that collects data from image click to pass into modal for what href will be added to images there.
for (var i = 0; i < deliveryImages.length; i++) {
    deliveryImages[i].addEventListener('click', function (e) {
        deliveryData = e.target.getAttribute('data-is');
    })
}
var slpModalImage = document.getElementsByClassName('modal-slp')[0].getElementsByTagName('a')[0];
var edinaModalImage = document.getElementsByClassName('modal-edina')[0].getElementsByTagName('a')[0]

var linkHrefs={
    bitesquad: {slp:'href', edina:'href'},
    bitesquad: {slp:'href', edina:'href'},
    bitesquad: {slp:'href', edina:'href'},
    bitesquad: {slp:'href', edina:'href'},
    bitesquad: {slp:'href', edina:'href'},

    


}

switch(deliveryData){
case 'bitesquad':
slpModalImage.setAttribute('href', '')
break;

}