import React from "react";
import Mesa from "./Mesa"; //importamos el componente Mesa para que nos pase la informacion a traves de los props

function PlanoRestaurante({ mesas, reservarMesa }) {
  return (
    // clase de css para crear las filas solicitadas en el desafio 01
    <div className="row justify-content-center my-5">
      {mesas.map(
        (
          mesa //Utilizamos una funcion flecha con el Arraymethod .map para renderizar sobre el array y devolviendo informacion correcta
        ) => (
          <Mesa
            key={mesa.id}
            id={mesa.id}
            disponible={mesa.disponible}
            capacidad={mesa.capacidad}
            reservarMesa={reservarMesa}
          />
        )
      )}
    </div>
  );
}

export default PlanoRestaurante;
