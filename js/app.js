window.addEventListener('DOMContentLoaded' , function(){

let faBars = document.querySelector('.fa-bars'),
      mobileNav = document.querySelector('.mobile_nav'),
      faXing = document.querySelector('.fa-xing');



 faBars.addEventListener('click' , function(){
     mobileNav.style.display = 'flex';
     faBars.style.display = 'none'
 })     

 faXing.addEventListener('click' , function(){
     mobileNav.style.display="none";
     faBars.style.display = "block"
 })



})