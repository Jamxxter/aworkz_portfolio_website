const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("#right-nav-menu");


hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

})
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    
}))




























const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntesecting){
            entry.target.classList.add("show");
        }else{
            entry.target.classList.remove("show");
        }
    });

});

const hiddenElements= document.querySelectorAll("#hidden")
hiddenElements.forEach((el) => observer.observe(el));



