var loader = document.getElementById("loader-1");

window.addEventListener("load", function () {
    loader ? loader.style.display = "none" : '';
})
// ------------------------------------------------------------------------------------
const rankingElements = document.getElementsByClassName('ranking');

for (var i = 0; i < rankingElements.length; i++) {
    var rankingElement = rankingElements[i];
    var pointsElement = rankingElement.getElementsByClassName("points")[0];

    rankingElement.addEventListener('mouseover', createMouseOverHandler(rankingElement, pointsElement));

    rankingElement.addEventListener('mouseout', createMouseOutHandler(pointsElement));
}

function createMouseOverHandler(rankingElement, pointsElement) {
    return function () {
        pointsElement.style.color = 'black';
    };
}

function createMouseOutHandler(pointsElement) {
    return function () {
        pointsElement.style.color = 'black';
    };
}


function updateClock() {
    var now = new Date();
    var dname = now.getDay(),
        mo = now.getMonth(),
        dnum = now.getDate(),
        yr = now.getFullYear(),
        hou = now.getHours(),
        min = now.getMinutes(),
        sec = now.getSeconds(),
        pe = "AM";

    if (hou >= 12) {
        pe = "PM";
    }
    if (hou == 0) {
        hou = 12;
    }
    if (hou > 12) {
        hou = hou - 12;
    }

    Number.prototype.pad = function (digits) {
        for (var n = this.toString(); n.length < digits; n = 0 + n);
        return n;
    }

    var months = ["January", "February", "March", "April", "May", "June", "July", "Augest", "September", "October", "November", "December"];
    var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var ids = ["dayname", "month", "daynum", "year", "hour", "minutes", "seconds", "period"];
    var values = [week[dname], months[mo], dnum.pad(2), yr, hou.pad(2), min.pad(2), sec.pad(2), pe];
    for (var i = 0; i < ids.length; i++)
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
}

function initClock() {
    updateClock();
    window.setInterval("updateClock()", 1);
}





let menu = document.getElementById('driver-main-menu');
let mega_menu = document.getElementById('nav-secondary')


//   menu.addEventListener("mouseenter", (e) => {
//     mega_menu.style.display='block'
//   })
//   menu.addEventListener("mouseleave", (e) => {
//     mega_menu.style.display='none'
// })



let menu_items = document.querySelectorAll('.item')



menu_items.forEach((e) => {
    let menu_child = e.childNodes[0];

    if (menu_child.text === "DRIVER") {

        menu_child.addEventListener("mouseenter", (e) => {
            mega_menu.style.display = 'block'

            fetch_menu_content('test.html')
        })

        menu.addEventListener("mouseleave", (e) => {
            mega_menu.style.display = 'none'
            document.getElementById('driver-submenu').innerHTML = '';
        })

        mega_menu.addEventListener("mouseenter", (e) => {
            mega_menu.style.display = 'block'
            fetch_menu_content('test.html')

        })

        mega_menu.addEventListener("mouseleave", (e) => {
            mega_menu.style.display = 'none'
            document.getElementById('driver-submenu').innerHTML = '';
        })

        // }else if( menu_child.text  === "HOME" ){

        menu_child.addEventListener("mouseenter", (e) => {
            mega_menu.style.display = 'block'

            fetch_menu_content('test.html')
        })

        menu.addEventListener("mouseleave", (e) => {
            mega_menu.style.display = 'none'
            document.getElementById('driver-submenu').innerHTML = '';
        })

        mega_menu.addEventListener("mouseenter", (e) => {
            mega_menu.style.display = 'block'
            fetch_menu_content('test.html')

        })

        mega_menu.addEventListener("mouseleave", (e) => {
            mega_menu.style.display = 'none'
            document.getElementById('driver-submenu').innerHTML = '';
        })
    }
});

function fetch_menu_content(menu_name) {
    document.getElementById('driver-submenu').innerHTML = '<div class="loader" style="background: none;height: 0px;"></div>';
    fetch(menu_name)
        .then(response => response.text())
        .then(html => {
            // Store the HTML code in a JavaScript variable
            const htmlCode = html;

            document.getElementById('driver-submenu').innerHTML = htmlCode;
            // You can now use the htmlCode variable as needed
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

var textWrapper = document.querySelector('.no-margin .letters');
textWrapper ? textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letters'>$&</span>") : '';

// anime.timeline({loop: true})
//   .add({
//     targets: '.no-margin .letters',
//     rotateY: [-90, 0],
//     duration: 1300,
//     delay: (el, i) => 140 * i
//   }).add({
//     targets: '.no-margin',
//     opacity: 0,
//     duration: 1000,
//     easing: "easeOutExpo",
//     delay: 1000
//   });

let htmlCode = 'he';

const file_text = async (filename) => {
    try {
        const response = await fetch(filename);
        const html = await response.text();
        return html;
    } catch (error) {
        console.error('Error:', error);
    }
}

file_text('f1partners.html').then((result) => document.getElementById("default-f1-partners") ? document.getElementById("default-f1-partners").innerHTML = result : '')


const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');

let slideIndex = 0;

function nextSlide() {
    slideIndex = (slideIndex + 1) % images.length;
    updateSliderPosition();
}

function updateSliderPosition() {
    const offset = slideIndex * -100;
    slider ? slider.style.transform = `translateX(${offset}%)` : '';
}

// Change slide every 3 seconds (adjust the interval as needed)
const slideInterval = setInterval(nextSlide, 3000);

// Pause auto-sliding when the user hovers over the slider
slider ? slider.addEventListener('mouseenter', () => clearInterval(slideInterval)) : '';

// Resume auto-sliding when the user moves the mouse out of the slider
slider ? slider.addEventListener('mouseleave', () => {
    slideInterval = setInterval(nextSlide, 3000);
}) : '';



// const slider = document.querySelector('.slider');
// const images = document.querySelectorAll('.slider img');

// let slideIndex = 0;


// function nextSlide() {
//     slideIndex = (slideIndex + 1) % images.length;
//     updateSliderPosition();
// }

// function updateSliderPosition() {
//     const offset = slideIndex * -100;
//     slider.style.transform = `translateX(${offset}%)`;
// }

// // Change slide every 3 seconds (adjust the interval as needed)
// const slideInterval = setInterval(nextSlide, 3000);

// // Pause auto-sliding when the user hovers over the slider
// slider.addEventListener('mouseenter', () => clearInterval(slideInterval));

// // Resume auto-sliding when the user moves the mouse out of the slider
// slider.addEventListener('mouseleave', () => {
//     slideInterval = setInterval(nextSlide, 3000);
// });

$ (document).ready(function () {
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false
    });


    $('.gallery-text').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false
    });


    $('.gallery-text-2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false
    });


});
// -------------------------------------------------------------------------------------------------------------------
// password show
const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password-sign");
console.log('dsvdskjjh')
togglePassword.addEventListener("click", function () {
    // toggle the type attribute
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);

    // toggle the icon
    this.classList.toggle("fa-eye-slash");
});

// prevent form submit
const form = document.querySelector("form");
form.addEventListener('submit', function (e) {
    e.preventDefault();
});
// ------------------------------------------------------------------------------------------------------------------------
// cookies-box
const cookieBox = document.querySelector(".cookies-main"),
    buttons = document.querySelectorAll(".cookies-btn-1");

const executeCodes = () => {
    //if cookie contains codinglab it will be returned and below of this code will not run
    if (document.cookie.includes("codinglab")) return;
    cookieBox.classList.add("show");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            cookieBox.classList.remove("show");

            //if button has acceptBtn id
            if (button.id == "cookies-b-2") {
                //set cookies for 1 month. 60 = 1 min, 60 = 1 hours, 24 = 1 day, 30 = 30 days
                document.cookie = "cookieBy= codinglab; max-age=" + 60 * 60 * 24 * 30;
            }
        });
    });
};

//executeCodes function will be called on webpage load
window.addEventListener("load", executeCodes);