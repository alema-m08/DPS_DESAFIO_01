"use client";
//Importamos todos los componentes creados en la carpeta components
import React, { useState } from "react";
import PlanoRestaurante from "./components/PlanoRestaurante";
import ResumenReserva from "./components/ResumenReserva";
import SelectorZona from "./components/SelectorZona";

function App() {
  const [zona, setZona] = useState("Terraza");
  const [reserva, setReserva] = useState(null);
  const [personas, setPersonas] = useState(1);
  const [mensaje, setMensaje] = useState("");

  // Declaracion de las mesas con informacion basica
  const [mesasPorZona, setMesasPorZona] = useState({
    Terraza: [
      { id: 1, disponible: true, capacidad: 4 },
      { id: 2, disponible: false, capacidad: 2 },
      { id: 3, disponible: true, capacidad: 6 },
    ],
    Interior: [
      { id: 4, disponible: true, capacidad: 4 },
      { id: 5, disponible: true, capacidad: 2 },
      { id: 6, disponible: false, capacidad: 6 },
    ],
    VIP: [
      { id: 7, disponible: true, capacidad: 8 },
      { id: 8, disponible: false, capacidad: 4 },
    ],
  });

  // Función para la seleccion de mesas
  const reservarMesa = (mesaId) => {
    //declaramos una constante que tendra las zonas donde [zona] es el state actual y utilizamos .find para verificar el id
    const mesa = mesasPorZona[zona].find((m) => m.id === mesaId);
    //Aca verificamos la disponibilidad de una mesa
    if (!mesa.disponible) {
      setMensaje("Error: Esa mesa ya está ocupada.");
      setTimeout(() => setMensaje(""), 3000); //utilizamos setTimeout para que la alerta dure solamente 3 segundos
      return;
    }
    //Aca verificamos la capacidad de una mesa donde usamos una concatenacion para que el usuario pueda leer atraves del ID que mesa selecciono y capacidad de personas
    if (personas > mesa.capacidad) {
      setMensaje(
        `No puedes reservar la mesa ${mesaId} porque solo tiene capacidad para ${mesa.capacidad} personas.`
      );
      setTimeout(() => setMensaje(""), 3000);
      return;
    }
    //despues de las condiciones si las cumplio pasa a reservar la mesa
    //llamamos la funcion y el objeto mesa que contiene la informacion de la reserva
    setReserva({ mesa: mesaId, zona, hora: "7:00 PM", personas });
    setMensaje(
      `¡Mesa ${mesaId} reservada con éxito para ${personas} persona(s)!`
    );
    setTimeout(() => setMensaje(""), 3000);

    // Actualizar la disponibilidad de la mesa
    setMesasPorZona((prevMesasPorZona) => ({
      ...prevMesasPorZona,
      [zona]: prevMesasPorZona[zona].map((m) =>
        m.id === mesaId ? { ...m, disponible: false } : m
      ),
    }));
  };

  return (
    <div className="d-flex flex-column min-vh-100 bg-dark text-white">
      <header className="text-center py-4">
        <h1>Reserva de Mesas</h1>
      </header>
      <main className="flex-grow-1 d-flex flex-column justify-content-center align-items-center p-4">
        <div className="w-100" style={{ maxWidth: "900px" }}>
          <SelectorZona zona={zona} setZona={setZona} />
          <div className="d-flex justify-content-center align-items-center my-4">
            {/*Input de personas que tomara cuantas personas intentan reservar mesas*/}
            <label htmlFor="personas" className="me-3">
              Personas:
            </label>
            <input
              type="number"
              id="personas"
              min="1"
              value={personas}
              onChange={(e) => {
                const value = e.target.value;
                //Condicion que evalua si el usario escribio algo por medio del e.target.value
                if (value === "") {
                  setPersonas("");
                } else {
                  const parsedValue = parseInt(value, 10);
                  setPersonas(isNaN(parsedValue) ? 1 : parsedValue);
                }
              }}
              className="form-control w-auto bg-secondary text-dark border-0 shadow-sm transition-all"
            />
          </div>
          {mensaje && (
            <div
              className={`alert ${
                mensaje.includes("Error") ? "alert-danger" : "alert-success"
              } w-75 mx-auto text-center animate__animated animate__fadeIn`}
            >
              {mensaje}
            </div>
          )}
          <PlanoRestaurante
            mesas={mesasPorZona[zona]}
            reservarMesa={reservarMesa}
          />
          <ResumenReserva reserva={reserva} />
        </div>
      </main>
    </div>
  );
}

export default App;
