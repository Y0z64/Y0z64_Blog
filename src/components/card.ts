export type Card = {
  title: string;
  description: string;
  tag?: string;
  image?: string;
  date?: string;
};

export function createCard(article: Card) {
  console.log("Creating a card");
  // Create elements
  const text = document.createElement("span");
  const card = document.createElement("div");
  const title = document.createElement("h3");
  const description = document.createElement("p");
  let tag;
  let image;
  let date;

  if (article.tag) {
    tag = document.createElement("span");
    tag.classList.add("tag");
    tag.textContent = article.tag;
    card.appendChild(tag);
    card.style.paddingBottom = "26.5px";
  }

  if (article.date) {
    date = document.createElement("p");
    date.classList.add("date");
    date.classList.add("fira-code-regular");
    date.textContent = article.date;
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
  title.classList.add("open-sans-bold");
  description.classList.add("roboto-regular");
  tag?.classList.add("fira-code-regular");

  // Content
  title.textContent = article.title;
  description.textContent = article.description;

  // Connections
  if (date) text.appendChild(date);
  text.appendChild(title);
  text.appendChild(description);
  card.appendChild(text);

  return card;
}
