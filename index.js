import { obtenerUsuario } from "/http-request.js";
import { getUsuario } from "./get-usuario.js";

document.addEventListener("DOMContentLoaded", () => {
  obtenerUsuario();
});

const estado = false;

const element = document.getElementById("searchUser");

const buscar = () => {
  //INPUT
  const formSearch = document.getElementById("formSearch");

  formSearch.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const searchUser = document.getElementById("searchUser").value;

    if (searchUser.length != 0) {
      getUsuario(searchUser);
    }
  });
  console.log("click");
};

const mostrarLista = () => {
  obtenerUsuario();
};

element.addEventListener("click", buscar);
