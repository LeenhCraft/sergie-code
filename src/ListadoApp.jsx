import React, { useState } from "react";
import { FaCheck, FaMinusCircle } from "react-icons/fa";

const Items = ({ nombre, visto, id }) => {
  return (
    <li data-id={id}>
      {nombre}
      {/* {visto ? (
        <span>
          <FaCheck className="icon success"></FaCheck>
        </span>
      ) : (
        <FaMinusCircle className="icon danger"></FaMinusCircle>
      )} */
      /* en lugar de usar ?? se usa && */}
      {visto && <FaCheck className="icon success" />}
    </li>
  );
};

export const ListadoApp = () => {
  let listadoSecciones = [
    { nombre: "Instalación", visto: true },
    { nombre: "uso de vite", visto: true },
    { nombre: "Componentes", visto: true },
    { nombre: "Variables", visto: true },
    { nombre: "useState", visto: true },
    { nombre: "Redux", visto: false },
    { nombre: "custonHoko", visto: false },
  ];

  const [arreglo, setArreglo] = useState(listadoSecciones);

  const agregarNuevaTarea = () => {
    let tarea = document.getElementById("tarea").value;
    let visto = document.getElementById("visto").checked;
    console.log({ nombre: tarea, visto: visto });
    setArreglo([...arreglo, { nombre: tarea, visto: visto }]);
  };

  return (
    <>
      <h1>Listado de Temas del Curso</h1>
      <ol>
        {arreglo.map((row, index) => (
          // version corta
          <Items id={index} key={index} {...row} />
          //   version larga
          //   <Items id={index} key={index} nombre={row.nombre} visto={row.visto} />
        ))}
      </ol>
      <input type="text" id="tarea" />
      <input type="checkbox" id="visto" />
      <button onClick={() => agregarNuevaTarea()}>Agregar Nuevo</button>
    </>
  );
};
