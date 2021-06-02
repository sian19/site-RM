/* Códigos javascript */

/* Abaixo os códigos do menu mobile */
let open = false;
function menuOpen(navMenu){
    if(open == false){
        let ul = document.getElementById("ul");
        let x = document.getElementsByClassName("x")[0];
        ul.style.top = "0";
        x.style.display = "block";
        navMenu.style.backgroundImage = "url()";
        open = true;
    }
}

function exitMenu(){
    if(open == true){
        let ul = document.getElementById("ul");
        let x = document.getElementsByClassName("x")[0];
        let navMenu = document.getElementsByClassName("menu-mobile")[0];
        ul.style.top = "-100%";
        x.style.display = "none";
        navMenu.style.backgroundImage = "url(images/menu.png)";
        open = false;
    }
}

