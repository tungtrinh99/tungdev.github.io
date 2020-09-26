document.addEventListener("DOMContentLoaded",function(){
    // const headerLink = document.querySelectorAll('.header__main-item');
    // const headerLinkIcon = document.querySelectorAll('.header__main-item > .header__main-item-icon ');
    // console.log(headerLinkIcon);
    // for(let i= 0;i < headerLink.length ; i ++)
    // {
    //     headerLink[i].onmouseover = function (){
    //         headerLinkIcon[i].classList.add('fa-chevron-up')
    //         headerLinkIcon[i].classList.remove('fa-chevron-down')
    //     }
    //     headerLink[i].onmouseout = function (){
    //         headerLinkIcon[i].classList.remove('fa-chevron-up')
    //         headerLinkIcon[i].classList.add('fa-chevron-down')
    //     }
    // }
    const headerNavbarTop = document.querySelector('.header__topbar');
    const headerMain = document.querySelector('.header__main');
    const headerCategory = document.querySelectorAll('.header__main-item > .header__main-category');
    const searchInput = document.querySelector('.search--input');
    console.log(headerCategory);
    var tt = 1;
    window.addEventListener('scroll', function(){
        console.log(window.pageYOffset);
        if(window.pageYOffset > 0){
            headerNavbarTop.classList.add('hide');
            headerMain.style.background = 'white';
            searchInput.style.background ='transparent';
            searchInput.style.borderColor = '#a7a7a7';
            headerMain.classList.add('header__main-height--small');
            for(let i = 0 ;i < headerCategory.length ; i++){
                headerCategory[i].classList.add('header__category--go-up');
                
            }
            tt=2;
        }
        else {
            headerMain.classList.remove('header__main-height--small');
            for(let i = 0 ;i < headerCategory.length ; i++){
                headerCategory[i].classList.remove('header__category--go-up');
                headerMain.style.background = 'transparent';
                searchInput.style.borderColor = 'transparent';
            }
            headerNavbarTop.classList.remove('hide');
            tt=1;
        }
    })

})