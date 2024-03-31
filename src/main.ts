import "./style.css";
import { setupCounter } from "./counter.ts";
import gsap from "gsap";

// HTML structure
const appDiv = document.getElementById("app");
const content = document.createElement("div");
const name = document.createElement("h1");

const icon = document.querySelector("#icon");
const bubble = document.querySelector("#bubble"); // Select the bubble

// Content
name.innerText = "Y0z64";

// Connections
appDiv?.appendChild(content);
content.appendChild(name);

name.classList.add("name");
name.classList.add("open-sans-bold");


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
      duration: 0.1,
      y: dy / 6, // Increase the amount of movement
      x: dx / 6, // Increase the amount of movement
      scale: 1.2,
      ease: "power2.out",
    });

    // Show the bubble instantly
    if (bubble !== null) {
      (bubble as HTMLElement).style.visibility = "visible";
      (bubble as HTMLElement).style.opacity = "1"; // Show instantly
      (bubble as HTMLElement).style.left = e.pageX + "px"; // Position the bubble relative to the mouse
      (bubble as HTMLElement).style.top =
        e.pageY - (bubble as HTMLElement).offsetHeight - 20 + "px"; // Position the bubble above the mouse
    }
  }
});

// Fade out the bubble when the mouse leaves
icon?.addEventListener("mouseleave", () => {
  if (bubble !== null) {
    gsap.to(bubble, {
      duration: 0.2,
      opacity: 0, // Fade out
      ease: "power2.out",
    });
  }
});


setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
