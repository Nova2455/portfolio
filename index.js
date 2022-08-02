var sideMenu = document.querySelector('.side-button');
var expandedMenu = document.querySelector('.category');
var menuItems = document.querySelector('.content-list')


sideMenu.addEventListener('click', clickFunction);


function clickFunction(){
    expandedMenu.classList.toggle('category-expand');
    sideMenu.classList.toggle('side-button-active');
    menuItems.classList.toggle('content-list-active');
};


  
  