import { FaCheck, FaMinusCircle } from "react-icons/fa";

const Items = ({ nombre, visto }) => {
  return (
    <li>
      {nombre}
      {/* {visto ? (
        <span>
          <FaCheck className="icon success"></FaCheck>
        </span>
      ) : (
        <FaMinusCircle className="icon danger"></FaMinusCircle>
      )} */
      /* en lugar de suar ?? se usa && */}
      {visto && <FaCheck className="icon success" />}
    </li>
  );
};

export const ListadoApp = () => {
  return (
    <>
      <h1>Listado de Temas del Curso</h1>
      <ol>
        <Items nombre="Instalación" visto={true}></Items>
        <Items nombre="uso de vite" visto={true}></Items>
        <Items nombre="Componentes" visto={true}></Items>
        <Items nombre="Variables" visto={true}></Items>
        <Items nombre="useState" visto={true}></Items>
        <Items nombre="Redux" visto={false}></Items>
        <Items nombre="custonHoko" visto={false}></Items>
      </ol>
    </>
  );
};
