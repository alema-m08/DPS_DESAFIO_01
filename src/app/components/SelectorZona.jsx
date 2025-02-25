import React from "react";

function SelectorZona({ zona, setZona }) {
  // Declaramos una variable que tendrá las zonas solicitadas en nuestra evaluación
  const zonas = ["Terraza", "Interior", "VIP"];

  return (
    // Selector con espacio vertical y botones grandes
    <div className="my-5 text-center">
      <h4 className="mb-3">Elige una zona</h4>
      <div className="btn-group">
        {zonas.map((z) => {
          // Ocupamos .map para poder asignar una llave a cada sector
          let buttonClass = "btn btn-lg transition-all ";
          //Aplicamos una condicion para validar si las zonas coinciden desde la z de .map
          //Nos ayudara a tener una mejor visualizacion al momento de escoger el lugar o la zona
          if (zona === z) {
            buttonClass += "btn-outline-light shadow";
          } else {
            buttonClass += "btn-dark hover-scale";
          }

          return (
            <button
              key={z}
              className={buttonClass} // clase de botones para interactividad
              onClick={() => setZona(z)}
            >
              {z}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default SelectorZona;
