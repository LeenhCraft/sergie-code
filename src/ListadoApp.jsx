import React, { useState } from "react";
import { FaCheck, FaMinusCircle } from "react-icons/fa";
import { Formulario } from "./components/Formulario";

const Items = ({ nombre, visto, id }) => {
  return (
    <li data-id={id}>
      {nombre}
      {visto ? (
        <span>
          <FaCheck className="icon success"></FaCheck>
        </span>
      ) : (
        <FaMinusCircle className="icon danger"></FaMinusCircle>
      )}
      {/* en lugar de usar ?? se usa && */}
      {/* {visto && <FaCheck className="icon success" />} */}
    </li>
  );
};

export const ListadoApp = () => {
  let listadoSecciones = [
    { id: 1, nombre: "Instalación", visto: true },
    { id: 2, nombre: "uso de vite", visto: true },
    { id: 3, nombre: "Componentes", visto: true },
    { id: 4, nombre: "Variables", visto: true },
    { id: 5, nombre: "useState", visto: true },
    { id: 6, nombre: "Redux", visto: false },
    { id: 10, nombre: "custonHoko", visto: false },
  ];

  const [arreglo, setArreglo] = useState(listadoSecciones);

  // funcion de escucha
  const onAgregarTarea = (valor) => {
    // console.log(valor);
    valor = valor.trim(); // elimina los espacios en blanco
    if (valor.length < 1) return; // si el valor es menor a 1 no hace nada
    const envio = {
      // id: arreglo.length + 1, // esto toma el tamaño del arreglo y le suma 1
      id: arreglo[arreglo.length - 1].id + 1, // esto toma el ultimo id del arreglo y le suma 1
      nombre: valor,
      visto: false,
    };
    // setArreglo((tareas) => [...tareas, envio]);
    setArreglo([...arreglo, envio]);
  };

  return (
    <>
      <h1>Listado de Temas del Curso</h1>
      <Formulario agregarTarea={onAgregarTarea} />
      <ol>
        {arreglo.map((row, index) => (
          // version corta
          <Items id={row.id} key={row.id} {...row} />
          //   version larga
          //   <Items id={index} key={index} nombre={row.nombre} visto={row.visto} />
        ))}
      </ol>

      <button onClick={() => agregarNuevaTarea()}>Agregar Nuevo</button>
    </>
  );
};
