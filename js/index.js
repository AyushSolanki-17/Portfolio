let navbarNav;
let navLink;
window.onload = ()=>{
    navbarNav = document.getElementById("#Navbar");
    navLink = document.getElementsByClassName("nav-link");
    let dt = new Date();
    let greeting = document.getElementById("greeting");
    if(dt.getHours()<12){
        greeting.innerText = "Good Morning!";
    }
    else if(dt.getHours()>12 && dt.getHours()<16){
        greeting.innerText = "Good Afternoon!";
    }
    else{
        greeting.innerText = "Good Evening!";
    }
}
window.onscroll = ()=>{
    
    if(window.scrollY===0){
        // Removing the classes set to change color to white of navbar.
        try{
            navbarNav.classList.remove("bg-white");
        }
        catch{}
    }
    else{
        // Changing the navbar color on scroll.
        try{
            navbarNav.classList.add("bg-white");
        }
        catch{}
    }
};