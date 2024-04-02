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
  const wrapper = document.createElement("div");
  const card = document.createElement("div");
  const text = document.createElement("span");
  const title = document.createElement("h3");
  const description = document.createElement("p");
  const readMore = document.createElement("p");
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

  if (article.image) {
    image = document.createElement("img");
    image.src = article.image;
    image.classList.add("image");
    card.appendChild(image);
  }

  if (article.date) {
    date = document.createElement("p");
    date.classList.add("date");
    date.classList.add("fira-code-regular");
    date.textContent = article.date;
  }

  // Add classes
  wrapper.classList.add("card-wrapper");
  card.classList.add("card");
  text.classList.add("hero-text");
  title.classList.add("title");
  description.classList.add("description");
  title.classList.add("open-sans-bold");
  description.classList.add("roboto-regular");
  tag?.classList.add("fira-code-regular");
  readMore.classList.add("read-more");
  readMore.classList.add("fira-code-thin");
 if (image && date) {
   image.style.paddingTop = "46px";
 }

  // Content
  title.textContent = article.title;
  description.textContent = article.description;
  readMore.textContent = "Read more";

  // Connections
  if (date) text.appendChild(date);
  text.appendChild(title);
  text.appendChild(description);
  card.appendChild(wrapper);
  wrapper.appendChild(text);
  wrapper.appendChild(readMore);


  return card;
}
