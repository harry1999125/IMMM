let navStatus = false;

let menu = function(){
    let getSidebar = document.querySelector(".main-nav");
    if (navStatus === false){
        getSidebar.style.display = "block";
        navStatus = true
    }
    else if (navStatus === true){
        getSidebar.style.display = "none";
        navStatus = false
    }
}