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

menu_items.forEach( (e) => {
    let menu_child = e.childNodes[0];

    if( menu_child.text  === "DRIVER" ){

        menu_child.addEventListener("mouseenter", (e) => {
            mega_menu.style.display='block'

            fetch_menu_content('test.html')
        })

        menu.addEventListener("mouseleave", (e) => {
            mega_menu.style.display='none'
            document.getElementById('driver-submenu').innerHTML = '';
        })

        mega_menu.addEventListener("mouseenter", (e) => {
            mega_menu.style.display='block'
            fetch_menu_content('test.html')

        })

        mega_menu.addEventListener("mouseleave", (e) => {
            mega_menu.style.display='none'
            document.getElementById('driver-submenu').innerHTML = '';
        })
        
    }else if( menu_child.text  === "HOME" ){
    
        menu_child.addEventListener("mouseenter", (e) => {
            mega_menu.style.display='block'

             fetch_menu_content('test.html')
          })

          menu.addEventListener("mouseleave", (e) => {
            mega_menu.style.display='none'
            document.getElementById('driver-submenu').innerHTML = '';
        })

        mega_menu.addEventListener("mouseenter", (e) => {
            mega_menu.style.display='block'
            fetch_menu_content('test.html')

        })

        mega_menu.addEventListener("mouseleave", (e) => {
            mega_menu.style.display='none'
            document.getElementById('driver-submenu').innerHTML = '';
        })
    }
});

function fetch_menu_content(menu_name){
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