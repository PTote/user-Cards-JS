const items = document.getElementById("items");
const templateCard = document.getElementById("template-card").content;
const fragment = document.createDocumentFragment();

const pintarCards = (datos) => {
  datos.forEach((usuario) => {
    templateCard.querySelector(
      "h5"
    ).textContent = `${usuario.first_name}, ${usuario.last_name}`;
    templateCard.querySelector("p").textContent = usuario.email;
    templateCard.querySelector("img").setAttribute("src", usuario.avatar);

    const clone = templateCard.cloneNode(true);
    fragment.appendChild(clone);
  });
  items.appendChild(fragment);
};

export { pintarCards };
