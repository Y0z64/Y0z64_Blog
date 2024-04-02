type Card = {
  title: string;
  description: string;
  tag?: string;
  image?: string;
};

export function createCard(article: Card) {
  console.log("Creating a card");
  // Create elements
  const text = document.createElement("span");
  const card = document.createElement("div");
  const title = document.createElement("h3");
  const description = document.createElement("p");
  let tag = document.createElement("span");
  let image = document.createElement("img");

  if (article.tag) {
    tag = document.createElement("span");
    tag.classList.add("tag");
    tag.textContent = article.tag;
    card.appendChild(tag);
    card.style.paddingBottom = "26.5px"
  }

  // Add an image if it exists
  if (article.image) {
    image = document.createElement("img");
    image.src = article.image;
    card.appendChild(image);
  }


  // Add classes
  card.classList.add("card");
  text.classList.add("hero-text");
  title.classList.add("title");
  description.classList.add("description");

  // Content
  title.textContent = article.title;
  description.textContent = article.description;

  // Connections
  text.appendChild(title);
  text.appendChild(description);

  card.appendChild(text);

  return card;
}

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
