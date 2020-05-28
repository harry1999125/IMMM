let pHome = function(){
    let getHomePage = document.querySelector(".homepage");
    let getProjectsPage = document.querySelector(".projectspage");
    getProjectsPage.style.display = "none";
    getHomePage.style.display = "block";
}

let pProjects = function(){
    let getHomePage = document.querySelector(".homepage");
    let getProjectsPage = document.querySelector(".projectspage");
    getProjectsPage.style.display = "block";
    getHomePage.style.display = "none";
}