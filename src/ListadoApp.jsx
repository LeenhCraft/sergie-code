import React, { useState } from "react";
import { FaCheck, FaMinusCircle } from "react-icons/fa";
import { Formulario } from "./components/Formulario";

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

  return (
    <>
      <h1>Listado de Temas del Curso</h1>
      <Formulario agregarTarea={setArreglo}/>
      <ol>
        {arreglo.map((row, index) => (
          // version corta
          <Items id={index} key={index} {...row} />
          //   version larga
          //   <Items id={index} key={index} nombre={row.nombre} visto={row.visto} />
        ))}
      </ol>

      <button onClick={() => agregarNuevaTarea()}>Agregar Nuevo</button>
    </>
  );
};
