//set the page header information and images
const subpageHeaders =
{
    menu:{
        image: './images/headers/menu1280.jpg',
        heading: 'Menu',
        subheading: 'Great food to satisfy all cravings'
    },
    location:{
        image: './images/headers/locations1280.jpg',
        heading: 'Locations',
        subheading: 'Two beautiful metro locations'
    },
    delivery:{
        image: './images/headers/delivery.jpg',
        heading: 'Delivery',
        subheading: 'Don\'t feel like going out? We have you covered'
    },
    defaultImage:{
        image: './images/headers/default.jpg',
        heading: 'Raku Sushi',
        subheading: 'TRADITIONAL JAPANESE COUSINE WITH A MODERN TWIST'
    }
}

//check against the path, set variables image, heading and subheading in the switch based on what page the user is on
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
    image = subpageHeaders.defaultImage.image;
    heading = subpageHeaders.defaultImage.heading;
    subheading = subpageHeaders.defaultImage.subheading;
    break;
}

//create the section on the page and dynamically set heading and subheading
//removed template literal because IE doesnt support.
const subpageBanner = "<section class='subpage-banner'><div class=subpage-overlay></div><div class='subpage-content'><h1>"+heading+"</h1><h5>"+subheading+"</h5></div></section>"
//once the section has been appended to the page, add attribute to the current style for a background image and dynamically show the image
document.getElementById('banner').innerHTML = subpageBanner;
var bannerNoStyle = document.getElementsByClassName('subpage-banner')[0];
bannerNoStyle.setAttribute("style", "background-image:url("+image+")");


