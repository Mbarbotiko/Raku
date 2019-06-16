const subpageHeaders =
{
    menu:{
        image: './images/menu-banner.jpg',
        heading: 'Menu',
        subheading: 'Great food to satisfy all cravings'
    },
    location:{
        image: './images/location-banner.jpg',
        heading: 'Locations',
        subheading: 'Two beautiful metro locations'
    },
    delivery:{
        image: './images/delivery-banner.jpg',
        heading: 'Delivery',
        subheading: 'Don\'t feel like going out? We have you covered'
    },
    test:{
        image: './images/stockBar.jpg',
        heading: 'Raku Sushi',
        subheading: 'TRADITIONAL JAPANESE COUSINE WITH A MODERN TWIST'
    }
}

var currentPage = location.pathname;
var image, heading, subheading;

switch (currentPage) {
    case '/locations.html':
            image = subpageHeaders.location.image;
            heading = subpageHeaders.location.heading;
            subheading = subpageHeaders.location.subheading;
        break;
    case '/delivery.html':
            image = subpageHeaders.delivery.image;
            heading = subpageHeaders.delivery.heading;
            subheading = subpageHeaders.delivery.subheading;
        break;
    case '/menu.html':
            image = subpageHeaders.menu.image;
            heading = subpageHeaders.menu.heading;
            subheading = subpageHeaders.menu.subheading;
        break;
    default: 
    image = subpageHeaders.test.image;
    heading = subpageHeaders.test.heading;
    subheading = subpageHeaders.test.subheading;
    break;
}


const subpageBanner = `<section class='subpage-banner'>
<div class=subpage-overlay>
</div>
<div class='subpage-content'>
    <img src=${image}>
    <h1>${heading}</h1>
    <h5>${subheading}</h5>
</div>
</section>`
document.getElementById('banner').innerHTML = subpageBanner;

