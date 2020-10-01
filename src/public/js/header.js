document.addEventListener("DOMContentLoaded",function(){
    const app = document.querySelector('.app');
    const headerNavbarTop = document.querySelector('.header__topbar');
    const headerMain = document.querySelector('.header__main');
    const headerCategory = document.querySelectorAll('.header__main-item > .header__main-category');
    const searchInput = document.querySelector('.search--input');
    const navTablet = document.querySelector('.nav-tablet');
    const buttonBar = document.querySelector('.header-bar-icon');
    const body = document.querySelector('body');
    const overLay = document.querySelector('.modal');
    const closeNavMobile = document.querySelector('.close');
    const buttonBarMobile = document.querySelector('.header-bar-mobile-icon');
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
            // navTablet.style.top = 'var(--header-height-scroll)';
        }
        else {
            headerMain.classList.remove('header__main-height--small');
            for(let i = 0 ;i < headerCategory.length ; i++){
                headerCategory[i].classList.remove('header__category--go-up');
                headerMain.style.background = 'transparent';
                searchInput.style.borderColor = 'transparent';
            }
            headerNavbarTop.classList.remove('hide');
            // navTablet.style.top = 'var(--header-height)';
            tt=1;
        }
    })
    
    buttonBar.addEventListener('click',()=>{
        
        navTablet.classList.toggle('move-left');
        overLay.classList.toggle('show');
    })
    closeNavMobile.addEventListener('click',()=>{
        navTablet.classList.remove('move-left');
        overLay.classList.remove('show');      
    })
    overLay.addEventListener('click',()=>{
        navTablet.classList.remove('move-left');
        overLay.classList.remove('show');     
    })
    // buttonBarMobile.addEventListener('click',()=>{
    //     navTablet.classList.toggle('move-left');
    //     overLay.classList.toggle('show');
    // })
    
})