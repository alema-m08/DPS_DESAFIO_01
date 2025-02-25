import React from "react";

function Mesa({ id, disponible, capacidad, reservarMesa }) {
  let buttonClass = "btn w-100 p-4 transition-all ";
  if (disponible) {
    buttonClass += "btn-secondary shadow hover-scale"; // Efecto al pasar el mouse
  } else {
    buttonClass += "btn-dark text-muted opacity-75"; // Color opaco para mesas ocupadas
  }

  return (
    <div className="col-6 col-md-3 m-3 text-center">
      <button
        className={buttonClass}
        onClick={() => reservarMesa(id)} // Llamar a la función reservarMesa con el id de la mesa
        disabled={!disponible} // Deshabilitar el botón si la mesa no está disponible
      >
        <strong>Mesa {id}</strong> <br />
        <small>(Hasta {capacidad} personas)</small>
      </button>
    </div>
  );
}

export default Mesa;
