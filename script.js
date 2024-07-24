const menuBtn = document.querySelector("#menu-btn");
const slideMenu = document.querySelector("aside");
const closeBtn = document.querySelector("#closeBtn"); 
const themeSwitcher = document.querySelector('.swicth-theme');



// show side bar
menuBtn.addEventListener("click", () => {
  slideMenu.style.display = "block";
});

// close sidebar
closeBtn.addEventListener("click", () => {
  slideMenu.style.display = "none";
}); 
// switch//////////////////
themeSwitcher.addEventListener("click", ()=>{
    document.body.classList.toggle("dark-theme-details")

    themeSwitcher.querySelector("span:nth-child(1)").classList.toggle("active");
    themeSwitcher.querySelector("span:nth-child(2)").classList.toggle("active");
})