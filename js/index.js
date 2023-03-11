function exit () {
  setTimeout(function() {
    alert('Exit successfully');
    window.location.href= "login.html"
  }, 1000);
  // let a = id -3
  // console.log(a);

}
const header_menu = document.querySelector('.header-menu');
const exit_menu = document.querySelector(".nav-exit p")
exit_menu.addEventListener('click', function () {
  console.log("Done");
  exit()

});

$('.owl-carousel').owlCarousel({
    items:3,
    loop: true,
    lazyLoad:true,
    autoplay: false,
    animateOut: 'fadeOut',
    margin:50,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });

  AOS.init();
  const header = document.querySelector('.header .header-menu');
  const navList = document.querySelector('.header .header-menu .nav-list');
  let lastScroll = 0;  //Khi mình scroll xuống 1 vị trí nào đó thì sẽ lưu cái giá đó vào lastscroll 
  // const main = document.querySelector(".wapper")
  // const header = document.querySelector('.header .header-menu');
  // const navList = header.querySelectorAll(':scope .nav-list')[0];

  window.addEventListener('scroll', function (event) {
    // console.log(document.body.scrollTop);
    // console.log(event);
    let currentScroll = event.target.scrollingElement.scrollTop;
    console.log("🚀 ~ file: index.js:33 ~ currentScroll:", Math.floor(currentScroll))
    let icon = document.querySelector('.nav-menu i');
    if (lastScroll < currentScroll) {
      header.classList.add('open');
      if (navList.classList.contains('open'))
        navList.classList.remove('open');
        icon.classList.remove("fa-xmark")
        icon.classList.add("fa-bars")
    } else        
    header.classList.remove('open');
    lastScroll = currentScroll;
    return lastScroll
  
  });  



  const menu_icon = document.querySelector('#menu-icon');
  menu_icon.addEventListener('click', function () {
    let icon = document.querySelector('.nav-menu i');
    let nav_list = document.querySelector('.nav-list');
    nav_list.classList.toggle("open")
    if(icon.classList.contains("fa-bars")){
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-xmark");
    }else if(icon.classList.contains("fa-xmark")){
      icon.classList.add("fa-bars");
      icon.classList.remove("fa-xmark");
    }
  });
const sroll_to = document.querySelectorAll(".scroll_to");
sroll_to.forEach((items)=>{
  items.addEventListener("click",()=>{
  const el =   document.getElementById(items.getAttribute("click-link"))
  el.scrollIntoView({
    behavior:"smooth",
    block:"center"
  })
  })
}) 

const wrapper = document.querySelector(".wapper")
const home = wrapper.querySelector("#section1")
const bars = wrapper.querySelector(".to-top")
bars.addEventListener('click', function () {
  home.scrollIntoView({
    behavior:"smooth",
    block:"start"
  });
  
});
const click_long_top = document.querySelector(".bars"); 
let lastScrolls = 30;  //Khi mình scroll xuống 1 vị trí nào đó thì sẽ lưu cái giá đó vào lastscroll 

window.addEventListener("scroll",(event)=>{
  let currentScroll = event.target.scrollingElement.scrollTop;
  // console.log("🚀 ~ file: index.js:74 ~ window.addEventListener ~ currentScroll:", currentScroll.toFixed(2))
  
  if(lastScrolls < currentScroll){
    // console.log("🚀 ~ file: index.js:77 ~ window.addEventListener ~ currentScroll:", currentScroll)
    click_long_top.classList.remove("opacity")
  }else
    click_long_top.classList.add("opacity")
    
  
})
// Typing Effect
let typed = new Typed(".auto",{
  strings:["FONT-END DEVELOPER ❤","UX/UIDESIGNER ❤","FREELANCER ❤"],
  typeSpeed :40,
  backSpeed:70,
  backDelay:2000,
  smartBackspace: true,
  loop:true,
})
const body = document.querySelector('body');
const loading =  body.querySelector('.loader');

window.addEventListener('load', function () {
  setTimeout(function() { 
    loading.classList.add("loader-hidden")
  }, 1500);
  loading.addEventListener('transitionend', function () {
    body.removeChild("loader-hidden")
    });
});
  

