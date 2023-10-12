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
// -------------------------------------------------------------------------------------

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
// -----------------------------------------------------------------------------------------------------------------------




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
// ----------------------------------------------------------------------------------------

var textWrapper = document.querySelector('.no-margin .letters');
textWrapper ? textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letters'>$&</span>") : null;

if (textWrapper) {
    anime.timeline({ loop: true })
        .add({
            targets: '.no-margin .letters',
            rotateY: [-90, 0],
            duration: 1300,
            delay: (el, i) => 140 * i
        }).add({
            targets: '.no-margin',
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
        });
}

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


// -------------------------------------------------------------------------------------------------------------------
// password show

const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#sign-password");

if (togglePassword && password) {
    togglePassword.addEventListener("click", function () {
        // Toggle the password input's type attribute
        if (password.getAttribute("type") === "password") {
            password.setAttribute("type", "text");
            this.classList.remove("fa-eye");
            this.classList.add("fa-eye-slash");
        } else {
            password.setAttribute("type", "password");
            this.classList.remove("fa-eye-slash");
            this.classList.add("fa-eye");
        }
    });
}

// Prevent form submission
const form = document.querySelector("form");
if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
    });
}

// ------------------------------------------------------------------------------------------------------------------------
// cookies-box
// const cookieBox = document.querySelector(".cookies-main");
// const buttons = document.querySelectorAll(".cookies-btn-1");

// const executeCodes = () => {
//   // Check if the cookie contains "codinglab"; if yes, return early
//   if (document.cookie.includes("cookieBy=codinglab")) return;
//   cookieBox.classList.add("show");

//   buttons.forEach((button) => {
//     button.addEventListener("click", () => {
//       cookieBox.classList.remove("show");

//       // Check if the clicked button has the id "cookies-b-2"
//       if (button.id === "cookies-b-2") {
//         // Set a cookie named "cookieBy" with the value "codinglab" that expires in 30 days
//         const expirationDate = new Date();
//         expirationDate.setTime(expirationDate.getTime() + 30 * 24 * 60 * 60 * 1000);
//         document.cookie = "cookieBy=codinglab; expires=" + expirationDate.toUTCString();
//       }
//     });
//   });
// };

// // Call executeCodes function when the webpage loads
// window.addEventListener("load", executeCodes);
// ---------------------------------------------------------------------------------------------------------
// sign-alert-box


// document.addEventListener("DOMContentLoaded", function () {
//     var loginForm = document.getElementById("sign-login-form");
//     if (loginForm) {
//         loginForm.addEventListener("submit", function (event) {
//             event.preventDefault();

//             var emailInput = document.getElementById("sign-email");
//             var passwordInput = document.getElementById("sign-password");

//             if (emailInput && passwordInput) {
//                 var email = emailInput.value.trim();
//                 var password = passwordInput.value.trim();

//                 if (email === "" || password === "") {
//                     alert("Please fill in both email and password fields.");
//                 } else {
//                     window.location.href = "http://127.0.0.1:5500/index.html";
//                     alert("Welcome back!");
//                 }
//             } else {
//                 alert("Email or password input fields not found.");
//             }
//         });
//     }
// });
// -------------------------------------------------------------------------------------------------------------------
// for active underline
// Wrap everything in a DOMContentLoaded event listener to ensure the page is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    const signInLink = document.getElementById("signInLink");
    const registerLink = document.getElementById("registerLink");

    // Check if elements exist before adding event listeners
    if (signInLink && registerLink) {
        signInLink.addEventListener("click", () => {
            signInLink.classList.add("active");
            registerLink.classList.remove("active");
        });

        registerLink.addEventListener("click", () => {
            registerLink.classList.add("active");
            signInLink.classList.remove("active");
        });
    } else {
        //   console.error("One or both elements not found.");
    }
});


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// for image slider


const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');
let slideIndex = 0;
let slideInterval;

function nextSlide() {
    slideIndex = (slideIndex + 1) % (images ? images.length : 0);
    updateSliderPosition();
}

function updateSliderPosition() {
    if (slider) {
        const offset = slideIndex * -100;
        slider.style.transform = `translateX(${offset}%)`;
    }
}

function pauseSlider() {
    clearInterval(slideInterval);
}

function resumeSlider() {
    if (slideInterval) {
        slideInterval = setInterval(nextSlide, 3000);
    }
}

if (slider) {
    slideInterval = setInterval(nextSlide, 3000);

    slider.addEventListener('mouseenter', pauseSlider);
    slider.addEventListener('mouseleave', resumeSlider);
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// email notification
function SendEmail() {
    let title = document.getElementById("Title-input").value;
    let firstname = document.getElementById("FirstName-input").value;
    let lastname = document.getElementById("LastName-input").value;
    let email = document.getElementById("Email-input").value;
    let dateofbirth = document.getElementById("BirthDate-input").value;
    let country = document.getElementById("Country-input").value;
    
let body = "Name:" + title + " "+firstname +" "+ lastname + "<br/> Email:" + email + "<br/> Date of birth:" + dateofbirth + "<br/> Country:" + country;

    Email.send({
        SecureToken : "0bfc6237-1400-4d03-97a3-7de8e95629e6",
        To : 'dalsaniyaankit557@gmail.com',
        From : "aryanpatel9279@gmail.com",
        Subject : "New f1-registration",
        Body : body
    }).then(
      message => alert("Registration Successful")
    );
}
function signemail(){
    let SignEmail = document.getElementById("sign-email").value;
    let signPassword = document.getElementById("sign-password").value;
let body = "Welcome Back";
    
    console.log(SignEmail)
    Email.send({
        SecureToken : "0bfc6237-1400-4d03-97a3-7de8e95629e6",
        To : SignEmail,
        From : "aryanpatel9279@gmail.com",
        Subject : "New f1-registration",
        Body : body
    }).then(
      message => alert("Registration Successful")
    );
}

