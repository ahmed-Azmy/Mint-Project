//Global variables
const links = document.getElementsByClassName('nav-scroll'),
      topBtn = document.getElementById('topBtn'),
      sendBtn = document.getElementById('sendBtn'),
      showMeBtn = document.getElementById('showMeBtn'),
      colOnes = document.getElementsByClassName('col-one'),
      colTwos = document.getElementsByClassName('col-two'),
      colThrees = document.getElementsByClassName('col-three');

//change navbar backgroung
window.addEventListener('scroll' , ()=>{
    let windowScroll = window.scrollY;
    if(windowScroll > 10){
        let navber = document.getElementById('nav');
        navber.classList.replace('bg-transparent' , 'bg-light')
    }
})

//Scroll
for (const link of links) {
    link.addEventListener('click' , topScroll)
}
function topScroll(e){
    e.preventDefault();
    let href=this.getAttribute('href');
    let offsetTop = document.querySelector(href).offsetTop;
    scroll({
        top: offsetTop - 50,
        behavior: 'smooth',

    })
}

//scrollTop
topBtn.addEventListener('click' , (e)=>{
    e.preventDefault();
    let topZero = document.getElementById('loading').offsetTop;
    scroll({
        top:topZero -50,
        behavior:'smooth'
    })
})

//Send Message Btn
sendBtn.addEventListener('click' , (e)=>{
    e.preventDefault();
    let contactOffset = document.getElementById('contact').offsetTop;
    scroll({
        top:contactOffset -50,
        behavior:'smooth'
    })
})

//to display more image
showMeBtn.addEventListener('click' , ()=>{
    if(showMeBtn.innerText == 'SHOW ME MORE'){
        for (const colOne of colOnes) {
           colOne.classList.replace('d-none' , 'd-block');    
        }
        for (const colTwo of colTwos) {
           colTwo.classList.replace('d-none' , 'd-block'); 
        }
        for (const colThree of colThrees) {
           colThree.classList.replace('d-none' , 'd-block');    
        }
        showMeBtn.innerText = "SHOW ME LESS"
    }
    else{
        for (const colOne of colOnes) {
           colOne.classList.replace('d-block' , 'd-none');    
        }
        for (const colTwo of colTwos) {
           colTwo.classList.replace('d-block' , 'd-none'); 
        }
        for (const colThree of colThrees) {
           colThree.classList.replace('d-block' , 'd-none');    
        }
        showMeBtn.innerText = "SHOW ME MORE"
    }
})