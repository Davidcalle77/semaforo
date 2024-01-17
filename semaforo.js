
  // Ejemplo de uso
let luzActual = "amarillo";
let siguienteColor = cambiarColor(luzActual);
document.write(siguienteColor);

function cambiarColor(luzActual) {
    if (luzActual === "rojo") {
    return "Verde: vehiculo en marcha";
    } else if (luzActual === "verde") {
    return "Amarillo: vehiculo con poca velocidad";
    } else if (luzActual === "amarillo") {
    return "Rojo: vehiculo sin movimiento";
    }
}