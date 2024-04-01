type Article = {
  title: string;
  description: string;
  image?: string;
};

export function createCard(article: Article) {
  console.log("Creating a card")
  // Create elements
  const card = document.createElement("div");
  const title = document.createElement("h3");
  const description = document.createElement("p");

  // Add classes
  card.classList.add("card");
  title.classList.add("title");
  description.classList.add("description");

  // Content
  title.textContent = article.title;
  description.textContent = article.description;

  // Connections
  card.appendChild(title);
  card.appendChild(description);

  return card;
}
