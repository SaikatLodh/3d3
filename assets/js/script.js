function init() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
  });






  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();

}

init() //locomotiv js end




var cursor = document.querySelector(".cursor")

var main = document.querySelector(".main")

document.addEventListener("mousemove", function (dets) {

  cursor.style.left = dets.x + 20 + "px"

  cursor.style.top = dets.y + 20 + "px"

}) //cursercend




var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",

    start: "top 27%",
    end: "top 0%",
    scrub: 3
  }

})
tl.to(".page1 h1", {
  x: -100,
}, "anim")

tl.to(".page1 h2", {
  x: 100,



}, "anim")
tl.to(".page1-video", {
  width: "90%"

}, "anim")

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",

    start: "top -80%",
    end: "top -130%",
    scrub: 3
  }

})

tl2.to(".main", {
  backgroundColor: "white"

})

var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",

    start: "top -495%",
    end: "top -0%",
    scrub: 3
  }

})

tl3.to(".main", {
  backgroundColor: "#0F0D0D",



}) // scrolltrigger end



var boxes = document.querySelectorAll(".box")
boxes.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    var att = elem.getAttribute("data-image")
    cursor.style.width = "470px"
    cursor.style.height = "370px"
    cursor.style.borderRadius = "0"
    cursor.style.backgroundImage = `url(${att})`
  })
  elem.addEventListener("mouseleave", function () {
    elem.style.backgroundColor = "transparent"
    cursor.style.width = "20px"
    cursor.style.height = "20px"
    cursor.style.borderRadius = "50%"
    cursor.style.backgroundImage = `none`
  })
}) // mouse enter leave





var animation = document.querySelector(".circle")

var animation2 = document.querySelector(".animation")

var checking = 0

animation.addEventListener("click", function () {

  if (checking == 0) {
    gsap.to(animation2, {
      right: "0%",
    })

    checking = 1


  } else {
    gsap.to(animation2, {
      right: "-100%",

    })
    checking = 0

  }

})

var show = document.querySelector(".menu")
var hide = document.querySelector(".cross")
var tops = document.querySelector(".show-and-hide")

show.addEventListener("click", function () {
  gsap.to(tops, {
    top: "0%",
    display: "block"
  })

})


hide.addEventListener("click", function () {
  gsap.to(tops, {
    top: "100%",
    display: "none",
  })
})






