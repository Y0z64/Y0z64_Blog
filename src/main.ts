import "./style.css";
import gsap from "gsap";
import createArticles from "./components/articles";

const articles = [
  { date: "20/20/20", title: "Nulla eu in quis reprehenderit laborum veniam quis duis cupidatat veniam. Occaecat enim laboris in duis cupidatat ad. Commodo consequat et Lorem pariatur do non sint consectetur laboris irure irure aute.", description: "Id velit laboris commodo adipisicing nisi. Cillum sint veniam minim laborum tempor nisi adipisicing deserunt. Sint elit in eiusmod culpa eu aliqua labore qui non. Occaecat mollit pariatur aute elit nisi sunt dolor qui consectetur cillum Lorem quis eu. Magna in enim duis id commodo. Ut proident nostrud cupidatat ex adipisicing veniam in ut consequat dolor. Nisi ipsum cillum anim enim sint anim sunt est magna do amet non sit." },
  { title: "Article 2", description: "Incididunt eu esse id velit incididunt sunt eiusmod tempor dolor veniam. Ad aliqua Lorem eiusmod sint mollit sit nulla amet ea eiusmod. Deserunt dolor mollit consequat non ipsum voluptate cillum ipsum dolore amet do sunt.", tag: "Javascript" },
  // Add more articles here...
];

// HTML structure
const appDiv = document.getElementById("app");
const nameWrapper = document.getElementById("hero-name");
const username = document.createElement("h1");
const name = document.createElement("h3");
const content = createArticles(articles);

const icon = document.querySelector("#icon");
const bubble = document.querySelector("#bubble");

// Content
username.innerText = "Y0z64";
name.innerText = "//Yair Salvador";

// Connections
appDiv?.appendChild(content);
nameWrapper?.appendChild(username);
nameWrapper?.appendChild(name);

username.classList.add("username");
username.classList.add("open-sans-bold");

name.classList.add("name");
name.classList.add("fira-code-regular");


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
