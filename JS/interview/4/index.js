// Event Bubbling and (Capturing also know as Trickling) in Javascript

// Select elements
const grandparent = document.querySelector("#grandparent");
const parent = document.querySelector("#parent");
const child = document.querySelector("#child");

function logEvent(phase, elementId, event) {
  console.log(
    `Phase: ${phase}\n, Element: ${elementId}\n, Event Target: ${event.target.id}\n`
  );
}

// Add event listeners - capturing or Trickling phase (third param true)

grandparent.addEventListener(
  "click",
  (e) => logEvent("capturing", "grandparent", e),
  true
);
parent.addEventListener(
  "click",
  (e) => logEvent("capturing", "parent", e),
  true
);
child.addEventListener("click", (e) => logEvent("capturing", "child", e), true);

// Add event listeners - bubbling phase (third param false or omitted)

grandparent.addEventListener(
  "click",
  (e) => logEvent("bubbling", "grandparent", e),
  false
);
parent.addEventListener(
  "click",
  (e) => logEvent("bubbling", "parent", e),
  false
);
child.addEventListener("click", (e) => logEvent("bubbling", "child", e), false);

// e.stopPropagation()
