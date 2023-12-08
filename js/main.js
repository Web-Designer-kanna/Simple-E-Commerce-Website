document.addEventListener("DOMContentLoaded",function(){
let navBtn=document.querySelector("#navBtn");
let nav=document.querySelector("nav");
let header=document.querySelector(".header");

navBtn.addEventListener("click",()=>{
    nav.classList.toggle("active");
    header.classList.toggle("active");
});


let navPages=document.querySelectorAll(".nav-page div");

navPages[0].addEventListener("click",()=>{
    window.location.href="Compare.html";
});
navPages[1].addEventListener("click",()=>{
    window.location.href="Favorite.html";
});
navPages[2].addEventListener("click",()=>{
    let navchild=navPages[2].lastElementChild;
    navchild.classList.toggle("active");
    navchild.addEventListener('click',()=>{
        window.location.href="Login.html";
    })
});

let cartPart=document.querySelector(".product-cart");
let cartIcons=document.querySelector(".cart-icons");
cartIcons.addEventListener("click",()=>{
    cartPart.style.right="0";
});
cartPart.addEventListener("click",()=>{
    cartPart.style.right="-100%";
});



});















