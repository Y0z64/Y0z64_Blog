import "./style.css";
import gsap from "gsap";
import { createCard } from "./components/article";

const articles = [
  { title: "Article 1", description: "This is article 1" },
  { title: "Article 2", description: "This is article 2" },
  // Add more articles here...
];

// HTML structure
const appDiv = document.getElementById("app");
const nameWrapper = document.getElementById("hero-name");
const content = document.createElement("div");
const username = document.createElement("h1");
const name = document.createElement("h3");

const icon = document.querySelector("#icon");
const bubble = document.querySelector("#bubble");


// Content
username.innerText = "Y0z64";
name.innerText = "//Yair Salvador";

// Connections
appDiv?.appendChild(content);
nameWrapper?.appendChild(username);
nameWrapper?.appendChild(name);

content.id = "content";


username.classList.add("username");
username.classList.add("open-sans-bold");

name.classList.add("name");
name.classList.add("fira-code-regular");

articles.forEach((article) => {
  const card = createCard(article);
  content.appendChild(card);
});

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
