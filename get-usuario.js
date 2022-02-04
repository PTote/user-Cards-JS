import { pintarCards } from "./pintar-cards.js";

const items = document.getElementById("items");
const templateCard = document.getElementById("template-card").content;
const fragment = document.createDocumentFragment();

const urlUser = "https://reqres.in/api/users";

const getUsuario = async (id) => {
  const resp = await fetch(`${urlUser}/${id}`);
  const { data } = await resp.json();
  pintarUser(data);
  return data;
};

const pintarUser = (datos) => {
  templateCard.querySelector(
    "h5"
  ).textContent = `${datos.first_name}, ${datos.last_name}`;
  templateCard.querySelector("p").textContent = datos.email;
  templateCard.querySelector("img").setAttribute("src", datos.avatar);

  const clone = templateCard.cloneNode(true);
  fragment.appendChild(clone);

  items.appendChild(fragment);
};

export { getUsuario };
