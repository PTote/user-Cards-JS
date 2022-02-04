import { pintarCards } from "./pintar-cards.js";

const url = "https://reqres.in/api/users?page=2";

const obtenerUsuario = async () => {
  const respuesta = await fetch(url);
  const { data } = await respuesta.json();
  pintarCards(data);
  return data;
};

export { obtenerUsuario };
