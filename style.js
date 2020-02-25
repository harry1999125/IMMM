let getSidebar = document.querySelector(".main-nav");
let input = document.querySelector(".input");
let output = document.querySelector(".output");

let navStatus = false;

let menu = function(){

    if (navStatus === false){
        getSidebar.style.display = "block";
        input.style.left = "260px";
        input.style.width = "calc(100vw - 260px)";
        output.style.left = "260px";
        output.style.width = "calc(100vw - 260px)";
        navStatus = true;
    }
    else if (navStatus === true){
        getSidebar.style.display = "none";
        input.style.left = "0";
        input.style.width = "100%";
        output.style.left = "0";
        output.style.width = "100%";
        navStatus = false;
    }
}

let submit = function(){
    input.style.display = "none";
    output.style.display = "block";
}
let backToInput = function(){
    input.style.display = "block";
    output.style.display = "none";
}