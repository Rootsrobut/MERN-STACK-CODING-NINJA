// Day 1

// Animate #box1
// gsap.to("#box1", {
//   x: 100,
//   duration: 2,
//   delay: 1
//});

// gsap.from("#box1", {
//   x: 100,
//   duration: 2,
//   delay: 1
// });

// Day 2

gsap.to("#box1", {
  x: 1000,
  duration: 2,
  delay: 1,
  rotate: 360,
  backgroundColor: "blue",
  borderRadius: "50%",
  scale: 0.5,
});
gsap.from("h1", {
  opacity: 0,
  y: 30,
  color: "green",
  duration: 2,
  delay: 1,
  stagger: 1,
});

// Animate #box2
gsap.to("#box2", {
  x: 300,
  y: 300,
  duration: 2.5,
  delay: 1,
});

//Day 3

const tl = gsap.timeline({ paused: true });

tl.to(".outer", {
  duration: 1,
  rotate: 360,
  backgroundColor: "#ff5722",
  scale: 1.2,
  ease: "power2.inOut",
})

  .to(
    ".middle",
    {
      duration: 1,
      x: 50,
      y: -50,
      backgroundColor: "#4caf50",
      borderRadius: "50%",
      ease: "bounce.out",
    },
    "-=0.5"
  ) // overlap previous by 0.5s

  .to(
    ".inner",
    {
      duration: 1,
      scale: 1.5,
      backgroundColor: "#03a9f4",
      rotate: 720,
      ease: "elastic.out(1, 0.3)",
    },
    "-=0.5"
  );

document.getElementById("animateBtn").addEventListener("click", () => {
  tl.restart();
});
