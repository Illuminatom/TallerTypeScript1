import { Serie } from "./serie.js";
import { seriesData } from "./data.js";


const cuerpotabla = document.getElementById("cuerpo")!;
const temporadasTxt = document.getElementById("seasons")!;

function llenartabla(): void {
  let temporadas = 0
  let filas = "";
  seriesData.forEach((serie: Serie) => {
  const fila = `<tr>
  <td>${serie.num}</td>
  <td>${serie.name}</td>
  <td>${serie.producer}</td>
  <td>${serie.seasons}</td>
  </tr>`;
  filas += fila;
  temporadas += serie.seasons;
});
  cuerpotabla.innerHTML = filas;
  temporadasTxt.innerHTML = "Seasons average: " + (temporadas/seriesData.length).toString();
}

llenartabla();