const menuBtn = document.querySelector('#menu');
const menuList = document.querySelector('.menu-list');

menuBtn.addEventListener('click', () =>{
    menuList.classList.toggle('show');
    menuBtn.classList.toggle('show');                                                                                                                             
})