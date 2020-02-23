let navStatus = false;

let menu = function(){
    let getSidebar = document.querySelector(".main-nav");
    let input = document.querySelector(".input")
    if (navStatus === false){
        getSidebar.style.display = "block";
        input.style.left = "380px";
        input.style.width = "calc(100vw - 380px)";
        navStatus = true
    }
    else if (navStatus === true){
        getSidebar.style.display = "none";
        input.style.left = "0";
        input.style.width = "100%";
        navStatus = false
    }
}