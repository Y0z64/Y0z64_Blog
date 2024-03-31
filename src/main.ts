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

    // Move the bubble
    if (bubble !== null) {
      (bubble as HTMLElement).style.visibility = "visible";
      gsap.to(bubble, {
        duration: 0.05,
        x: e.pageX + 20, // Position the bubble to the right of the mouse
        y: e.pageY - (bubble as HTMLElement).offsetHeight - 20, // Position the bubble above the mouse
        ease: "power2.out",
      });
    }
  }
});

// Reset the icon and bubble when the mouse leaves
icon?.addEventListener("mouseleave", () => {
  gsap.to(icon, {
    duration: 0,
    y: 0,
    x: 0,
    scale: 1,
    ease: "power2.out",
  });

  // Reset the bubble
  if (bubble !== null) {
    (bubble as HTMLElement).style.visibility = "hidden";
    gsap.to(bubble, {
      duration: 0,
      x: 0,
      y: 0,
      ease: "power2.out",
    });
  }
});

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
