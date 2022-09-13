
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



// modal

// const modalViews=document.querySelectorAll('.services__modal')
// const modalBtns=document.querySelectorAll('.services__button')
// const modalCloses=document.querySelectorAll('.services__modal-close')

// let modal=function(modalClick){
//     modalViews[modalClick].classList.add('active-modal')
// }
// modalBtns.forEach((modalBtn,i)=>{
//     modalBtn.addEventListener('click',()=>{
//         modal(i)
//     })
// })

// modalCloses.forEach((modalClose)=>{
//    modalClose.addEventListener('click',()=>{
//     modalViews.forEach((modalView)=>{
//         modalView.classList.remove('active-modal')
//     })
//    })
// })


// More

function readMore() {
    const dots = document.getElementById("dots");
    const more = document.getElementById("more");
    const myBtn = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      myBtn.innerHTML = "Read more";
      more.style.display = "none";
    } else {
      dots.style.display = "none";
      myBtn.innerHTML = "Read less";
      more.style.display = "inline";
    }
  } 



myBtn.addEventListener('click',readMore)

// scroll section active link
const sections=document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY=window.pageYOffset

    sections.forEach(current=>{
        const sectionHeight=currentoffsetHeight
        const sectionTop=current.offsetTop-50
        let sectionId=current.getAttribute('id')
    
        if(scrollY>sectionTop && scrollY<=sectionTop+sectionHeight){
            document.querySelector('.nav__menu a[href*='+sectionId+']').classList.add('active-link')
        }
        else{
            document.querySelector('.nav__menu a[href*='+sectionId+']').classList.remove('active-link')
        }

    })
}

window.addEventListener('scroll',scrollActive)

// CHANGE BACKGROUND HEADER
