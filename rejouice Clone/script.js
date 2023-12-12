function cursorAnimation1() {
    var page = document.querySelector(".page1");
    var cursor = document.querySelector(".play-reel");

    page.addEventListener("mousemove", function(dets){
        gsap.to(cursor, {
            x: dets.x,
            y: dets.y,
            ease: 'power2.out'  
        });
    });
    page.addEventListener("mouseenter", function(){
        gsap.to(cursor, {
            scale: 1
        });
    });
    page.addEventListener("mouseleave", function(){
        gsap.to(cursor, {
            scale: 0
        });
    });
}
cursorAnimation1();
function cursorAnimation2(){
  var page4 = document.querySelector(".page4");
    var crsr = document.querySelector(".take-it");

    page4.addEventListener("mousemove", function(dets){
        crsr.style.left = dets.clientX + "px";
        crsr.style.top = dets.clientY + "px";
    });
    page4.addEventListener("mouseenter", function(){
        gsap.to(crsr, {
            scale: 1,
            opacity:1
        });
    });
    page4.addEventListener("mouseleave", function(){
        gsap.to(crsr, {
            scale: 0,
            opacity:0
        });
    });
}
cursorAnimation2();

// line animation------------------------
// let hasScrolled = false;

// function lineAnimation() {
  gsap.set("#line", { opacity: 0, y: 20 });
  gsap.to("#line", {
    duration: 0.5,
    opacity: 1,
    y: 0,
    // delay: 0.5,
    stagger: 0.3,
    onComplete: animateLines()
  });
  function animateLines() {
    const lines = document.querySelectorAll("#line");
    lines.forEach((line, index) => {
      const lineBefore = line.querySelector(":before");
      gsap.to(lineBefore, {
        duration: 0.2,
        scaleX: 1,
        ease: "power6.inOut",
        // delay: 0.5 + (index * 0.5)
      });
    });
  }
// }

// function onScroll() {
//   if (!hasScrolled) {
//     const scrollPosition = window.scrollY || window.pageYOffset;
//     if (scrollPosition > 100) { 
//       hasScrolled = true;
//       lineAnimation();
//       window.removeEventListener('scroll', onScroll());
//     }
//   }
// }
// onScroll();

function scrollTrigger(){
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}
scrollTrigger();
function ImgSlide() {
  let currentSlide = 0;
  const slides = document.querySelectorAll('.images img');
  const totalSlides = slides.length;
  
  function showSlide(index) {
    slides.forEach((slide) => {
      slide.style.transform = `translateX(-${index * 100}%)`;
    });
  }
  
  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
  }
setInterval(nextSlide, 3000);
}
ImgSlide();
function Loader(){
  var tl = gsap.timeline();
tl.from(".loader h3", {
  x:50,
  opacity:0,
  duration:1,
  stagger:0.1
})
tl.to(".loader h3", {
  opacity: 0,
  x:-30,
  duration:1,
  stagger:0.1
})
tl.to(".loader", {
  opacity: 0,
  duration:1.5
})
tl.from(".heading span", {
  y:100,
  opacity:0,
  stagger:0.1,
  duration:0.5,
  delay:-0.5
})
tl.to(".loader", {
  display:"none"
})
}
Loader();
function footerAnim(){
  gsap.timeline().from(".footer h1 span", {
    y:-100,
    opacity:0,
    stagger:0.1,
    duration:0.5,
    delay: 5
  })
}
footerAnim();

gsap.set('.page4 .middle-elem span:not(:last-child)', { y: '220%' });

gsap.to('.page4 .middle-elem span:not(:last-child)', {
  duration: 0.3,
  y: '0%',
  delay: 5,
  stagger: 0.5,
  ease: 'power1.out',
});

gsap.set('.page4 .middle-elem span:last-child', { y: '220%' });
gsap.to('.page4 .middle-elem span:last-child', {
  duration: 0.3,
  y: '100%',
  delay: 7,
  ease: 'power1.out',
});