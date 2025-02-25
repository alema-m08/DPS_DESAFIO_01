import React from "react";

function ResumenReserva({ reserva }) {
  let contenido;
  //La condicion noos ayuda a verificar si hay una reserva
  if (reserva) {
    // Donde todo el contenido de la reserva es guardado en la variable "contenido"
    contenido = (
      // Tarjeta con animación utilizada con npm install animate.css
      <div className="card bg-dark text-white p-4 shadow animate__animated animate__fadeIn">
        <p>
          <strong>Mesa:</strong> {`Mesa ${reserva.mesa}`}
        </p>
        <p>
          <strong>Zona:</strong> {`Zona ${reserva.zona}`}
        </p>
        <p>
          <strong>Hora:</strong> {`Hora ${reserva.hora}`}
        </p>
        <p>
          <strong>Personas:</strong> {`Personas ${reserva.personas}`}
        </p>
      </div> //Utilizamos object destructurin para ingresar las propiedades del objeto reserva o los props
    );
  } else {
    // Si no hay contenido de reserva pasa al else y se crea un parrofo guardado en la variable contenido
    contenido = (
      // Clase que muestra el texto en color gris que simboliza no es muy importante
      <p className="text-muted">Aún no has reservado ninguna mesa.</p>
    );
  }

  return (
    // Aquí se podrá ver el resumen de la reserva que se solicitó
    <div className="my-5 w-75 mx-auto text-center">
      <h2 className="mb-3">Resumen de tu reserva</h2>
      {contenido}
    </div>
  );
}

export default ResumenReserva;
