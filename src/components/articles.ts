import { Card, createCard } from "./card";


export default function createArticles(articles: Card[]) {
  const content = document.createElement("div");
  content.id = "content";

  if (!articles.length) {
    const noArticles = document.createElement("p");
    noArticles.classList.add("no-articles");
    noArticles.textContent = "No articles found";
    content.appendChild(noArticles);
  }
  articles.forEach((article) => {
    const card = createCard(article);
    content.appendChild(card);
  });

  return content;
}
