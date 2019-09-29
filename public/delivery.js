var deliveryData;
//select anchors from modal images
var slpModalImage = document.getElementsByClassName('modal-slp')[0].getElementsByTagName('a')[0];
var edinaModalImage = document.getElementsByClassName('modal-edina')[0].getElementsByTagName('a')[0];

var deliveryContainer = document.getElementsByClassName('delivery-services');
var deliveryImages = deliveryContainer[0].getElementsByTagName('img');

//set up object to hold hrefs for easy access later
var linkHrefs = {
    biteSquad: { slp: 'https://www.bitesquad.com/food/raku-sushi-lounge-west-end/200', edina: 'https://www.bitesquad.com/food/raku-edina/199' },

    postMates: { slp: 'https://postmates.com/merchant/raku-sushi-lounge-saint-louis-park', edina: 'https://postmates.com/merchant/raku-modern-japanese-cuisine-edina' },

    doorDash: { slp: 'none', edina: 'https://www.doordash.com/store/raku-sushi-lounge-minneapolis-12423/' },

    uberEats: { slp: 'https://www.ubereats.com/en-US/minneapolis/food-delivery/raku-sushi-and-lounge/X4Y5n8PXRqG6OZavUF_3Lw/', edina: 'https://www.ubereats.com/en-US/minneapolis/food-delivery/raku-japanese-restaurant/HAAwDe6KTAyAks3mDFjkDQ/' }
}


//click events for modal
$(deliveryImages).on('click', function () {
    $('.modal').toggle()

})

$('.close').on('click', function () {
    $('.modal').toggle()

})


//add event listener that collects data from image click to pass into modal for what href will be added to images there.
for (var i = 0; i < deliveryImages.length; i++) {
    deliveryImages[i].addEventListener('click', function (e) {
        deliveryData = e.target.getAttribute('data-is');

        switch (deliveryData) {
            case 'bitesquad':
                slpModalImage.setAttribute('href', linkHrefs.biteSquad.slp);
                edinaModalImage.setAttribute('href', linkHrefs.biteSquad.edina);
                $('.unavailable').hide();
                break;
            case 'postmates':
                slpModalImage.setAttribute('href', linkHrefs.postMates.slp);
                edinaModalImage.setAttribute('href', linkHrefs.postMates.edina);
                $('.unavailable').hide();
                break;
            case 'doordash':
                slpModalImage.setAttribute('href', linkHrefs.doorDash.slp);
                //set to a not available class later
                edinaModalImage.setAttribute('href', linkHrefs.doorDash.edina);
                $('.unavailable').show();
                break;
            case 'ubereats':
                slpModalImage.setAttribute('href', linkHrefs.uberEats.slp);
                edinaModalImage.setAttribute('href', linkHrefs.uberEats.edina);
                $('.unavailable').hide();
                break;
            default: console.log('href not found')//add text with error code and contact information here

        }
    })
}



