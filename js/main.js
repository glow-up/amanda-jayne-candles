// ON HOVER POP UP APPLY LIGHT BROWN FILTER ON THE BG
// CHANGE BACKGROUND AFFTER 4 SENDS (PSUEDO CAROUSELL)

var container = document.querySelector('#main');
var popUpContainer = document.querySelector('.popup-box');
var closeIcon = document.querySelector('.close-icon');

// var bgimages = {
//     current: 0,
//     locations: new Array,
//     amount() { return this.locations.length; },
//     createDots() {
//         var navDotsContainer = document.createElement('ul');
//         navDotsContainer.id = 'navdots';

//         navDotsContainer.addEventListener('click', (e) => {
//             if (e.target.classList.contains('dots')) {
//                 // GET THE DOTS POSITION
//                 //source: https://stackoverflow.com/questions/13656921/fastest-way-to-find-the-index-of-a-child-node-in-parent
//                 var position = [].indexOf.call(e.target.parentNode.children, e.target);

//                 changeBG(position);
//             }
//         });

//         var n = 0;
//         for (n = 0; n < this.amount(); n++) {
//             var dot = document.createElement('li');
//             dot.className = 'dots';
//             navDotsContainer.appendChild(dot);
//         }
//         container.appendChild(navDotsContainer);
//     }
// }

// bgimages.locations.push('../images/an-image-of-some-essential-candles.jpg',
//     '../images/an-image-of-some-essential-oils.jpg',
//     '../images/an-image-of-some-essential-oils2.jpg');


popUpContainer.addEventListener('mouseenter', e => {
    if (!(container.classList.contains('hover'))) {
        // APPLY CLASS TO BACKGROUND BOX'
        container.classList.add('hover');
        // APPLY CLASS TO THE BOX
        popUpContainer.classList.add('hover');
    }
});
popUpContainer.addEventListener('mouseleave', e => {
    if ((container.classList.contains('hover'))) {
        // REMOVE CLASS TO BACKGROUND BOX'
        container.classList.remove('hover');
        // REMOVE CLASS TO THE BOX
        popUpContainer.classList.remove('hover');
    }
});

closeIcon.addEventListener('click', e => {
    window.open("https://sa.amandajaynecandles.com/", "_self");
});

// function changeBG(number) {
//     if (number || number === 0) {

//         if (bgimages.current >= bgimages.amount()) {
//             bgimages.current = 0;

//         } else {
//             bgimages.current++;
//         }

//         container.style.backgroundImage = `url(${bgimages.locations[number]})`;
//         updateNavDots(bgimages.current);


//     } else if (bgimages.current < bgimages.amount()) {
//         container.style.backgroundImage = `url(${bgimages.locations[bgimages.current]})`;
//         bgimages.current++

//         if (bgimages.current >= bgimages.amount()) {
//             bgimages.current = 0;
//         }
//         updateNavDots(bgimages.current)
//     } else {
//         bgimages.current = 0;
//         container.style.backgroundImage = `url(${bgimages.locations[bgimages.current]})`;
//         updateNavDots(bgimages.current)
//     }

// }

// function updateNavDots(number) {
//     var navDots = document.querySelectorAll('.dots');
//     var currentlyActive = document.querySelector('.dots.active');

//     if (currentlyActive) { currentlyActive.classList.remove('active'); }
//     navDots[number].classList.add('active');

//     console.log(bgimages.current)
// }

// bgimages.createDots();

// changeBG(0);


// setInterval(function () { changeBG(false) }, 4000);




// OPEN STORE LINKS ON 404
(function openStoreLink(store) {
    var saBtn = document.querySelector('#sa');
    var ukBtn = document.querySelector('#sa');

    if (saBtn || ukBtn) {
        var url = window.location.replace('http://127.0.0.1:5500/', '');
        console.log(url);
        alert(1)
    }
}()) 