function sidemenu() {
    let menu = document.getElementById("sidemenu");
    menu.classList.toggle("sidemenu");
  } 

// <------------Parralax Scrolling------------->
let frame_behind = document.getElementById('frame_behind');
let frame_front = document.getElementById('frame_front');
let moon = document.getElementById('moon');
let h1text = document.getElementById('h1text');
let ptext = document.getElementById('ptext');

let ticking = false;

function updatePositions() {
    let value = window.scrollY;
    frame_behind.style.top = value * 0.35 + 'px';
    frame_behind.style.left = value * 0.5 + 'px';
    frame_front.style.top = value * 0.5 + 'px';
    moon.style.top = value * 0.35 + 'px';
    h1text.style.right = value * 0.35 + 'px';
    ptext.style.right = value * 1 + 'px';
}

window.addEventListener('scroll', function() {
    if (!ticking) {
        window.requestAnimationFrame(function() {
            updatePositions();
            ticking = false;
        });
        ticking = true;
    }
});



// <------------Tabs - About me------------->
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link"); 
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// <------------CMD - Slider------------->
var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);


// <------------Dropdown My Skills------------->
function learnmore(x) {
    var menu = document.querySelector(".menu");
    menu.classList.toggle("activemenu");

    x.querySelector("i").classList.toggle("fa-caret-left");
    x.querySelector("i").classList.toggle("fa-caret-down");
}

function learnmore2(x) {
    var menu = document.querySelector(".menu2");
    menu.classList.toggle("activemenu");

    x.querySelector("i").classList.toggle("fa-caret-left");
    x.querySelector("i").classList.toggle("fa-caret-down");
}

function learnmore3(x) {
    var menu = document.querySelector(".menu3");
    menu.classList.toggle("activemenu");

    x.querySelector("i").classList.toggle("fa-caret-left");
    x.querySelector("i").classList.toggle("fa-caret-down");
}



// <------------Typewriter------------->
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};

var sidemenu1 = document.getElementById("casestudy");
var sidemenu2 = document.getElementById("casestudy2");
var sidemenu3 = document.getElementById("casestudy3");

function worklinkopen(){
    sidemenu1.style.right = "0";
}
function worklinkopen2(){
    sidemenu2.style.right = "0";
}
function worklinkopen3(){
    sidemenu3.style.right = "0";
}
function worklinkclose(){
    sidemenu1.style.right = "-140rem";
}
function worklinkclose2(){
    sidemenu2.style.right = "-140rem";
}
function worklinkclose3(){
    sidemenu3.style.right = "-140rem";
}


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n, workList) {
    showSlides(slideIndex += n, workList);
}

function currentSlide(n, workList) {
    showSlides(slideIndex = n, workList);
}

function showSlides(n, workList) {
    let i;
    let slides = document.getElementById(workList).getElementsByClassName("mySlides");
    let dots = document.getElementById(workList).getElementsByClassName("dot");
    

    if (n > slides.length) {
        slideIndex = 1;
    }    
    if (n < 1) {
        slideIndex = slides.length;
    }
    
   
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
   
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}


window.onload = function() {

    showSlides(1, 'work-list-1');
    showSlides(1, 'work-list-2');
    showSlides(1, 'work-list-3');
};

