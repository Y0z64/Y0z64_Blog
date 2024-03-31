import "./style.css";

import { setupCounter } from "./counter.ts";
import gsap from "gsap";

// HTML structure
const appDiv = document.getElementById("app");
const content = document.createElement("div");
const name = document.createElement("h1");

const icon = document.querySelector("#icon");

// Content
name.innerText = "Y0z64";
name.classList.add("name");

// Append
appDiv?.appendChild(content);
content.appendChild(name);

document.addEventListener("mousemove", function (e) {
  if (icon === null) return;

  const iconRect = icon.getBoundingClientRect();
  const iconX = iconRect.left + iconRect.width / 2;
  const iconY = iconRect.top + iconRect.height / 2;

  const dx = iconX - e.pageX;
  const dy = iconY - e.pageY;
  const distance = Math.sqrt(dx * dx + dy * dy);

  if (distance < 100) {
    gsap.to(icon, {
      duration: 0.05,
      y: dy / 5, // Increase the amount of movement
      x: dx / 5, // Increase the amount of movement
      scale: 1.2,
      ease: "power2.out",
    });
  }
});

// Reset the icon when the mouse leaves
icon?.addEventListener("mouseleave", () => {
  gsap.to(icon, {
    duration: 0,
    y: 0,
    x: 0,
    scale: 1,
    ease: "power2.out",
  });
});

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
