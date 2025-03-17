/* let selection = Splitting()
gsap.registerPlugin(ScrollTrigger)

gsap.from(selection[0].chars, {
  y : 100,
  scaleY: 0,
  rotation: 90,
  opacity: 0,
  color: "transparent",
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".text-reveal",
    start: "top 50%",
    end: "bottom 50%",
    scrub: true,
  }
})

let tl = gsap.timeline({
    ScrollTrigger: {
      trigger: ".animated-element",
      start: "top center",
      end: "bottom center",
      scrub: true,
      markers: true
    }
})
tl.to('.animated-element', {
    x: 800
})

const lenis = new Lenis();

// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
lenis.on('scroll', ScrollTrigger.update);


// This ensures Lenis's smooth scroll animation updates on each GSAP tick
gsap.ticker.add((time) => {
  lenis.raf(time * 600); // Convert time from seconds to milliseconds
});

gsap.ticker.lagSmoothing(0); */