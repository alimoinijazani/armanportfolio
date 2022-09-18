
const navMenu=document.getElementById('nav-menu'),
      navToggle=document.getElementById('nav-toggle'),
      navClose=document.getElementById('nav-close')

      
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}



if(navClose){
    navClose.addEventListener('click',()=>{
       navMenu.classList.remove('show-menu') 
    })
}

// remove menu mobile
const navLink=document.querySelectorAll('.nav__link')
function linkAction(){
    const navMenu=document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n=>n.addEventListener('click',linkAction))



// according skills

const skillsContent=document.getElementsByClassName('skills__content')
const skillsHeader=document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemClass=this.parentNode.className
    for(i=0;i<skillsContent.length;i++){
        skillsContent[i].className='skills__content skills__close'
        if(itemClass=='skills__content skills__close'){
            this.parentNode.className='skills__content skills__open'
        }
    }
}
skillsHeader.forEach((elm)=>{
    elm.addEventListener('click',toggleSkills)
})

// qualification tabs

const tabs=document.querySelectorAll('[data-target]')
const tabContents=document.querySelectorAll('[data-content]')
tabs.forEach(tab=>{
    tab.addEventListener('click',()=>{
         const target=document.querySelector(tab.dataset.target)
         tabContents.forEach(tabContent=>{
            tabContent.classList.remove('qualification__active')
         })
         target.classList.add('qualification__active')
         tabs.forEach(tab=>{
            tab.classList.remove('qualification__active')
         })
         tab.classList.add('qualification__active')
    })
})




// SWIPPER
var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });

  //READMORE
  const parent=document.querySelectorAll('.container')
  parent.forEach(elem=>{
    elem.addEventListener('click',event=>{
        const current=event.target
        const isBtn=current.className.includes('readmore-btn')
        if(!isBtn) return;
        const currentText=current.parentNode.querySelector('.readmore')
        currentText.classList.toggle('readmore-show')
        current.textContent =
        current.textContent === "read more" ? "read less" : "read more";
    })
  })
