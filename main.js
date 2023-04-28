import { seriesData } from "./data.js";
var cuerpotabla = document.getElementById("cuerpo");
var temporadasTxt = document.getElementById("seasons");
function llenartabla() {
    var temporadas = 0;
    var filas = "";
    seriesData.forEach(function (serie) {
        var fila = "<tr>\n  <td>".concat(serie.num, "</td>\n  <td>").concat(serie.name, "</td>\n  <td>").concat(serie.producer, "</td>\n  <td>").concat(serie.seasons, "</td>\n  </tr>");
        filas += fila;
        temporadas += serie.seasons;
    });
    cuerpotabla.innerHTML = filas;
    temporadasTxt.innerHTML = "Seasons average: " + (temporadas / seriesData.length).toString();
}
llenartabla();
