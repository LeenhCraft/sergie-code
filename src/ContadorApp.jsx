import { useState } from "react";

export const ContadorApp = ({ value }) => {
  const [contador, setContador] = useState(value);

  const manejarClick = () => {
    setContador(contador + 1);
  };

  return (
    <>
      <h1>Contador: </h1>
      <p>{contador}</p>
      <button onClick={manejarClick}>Soy un boton</button>
    </>
  );
};
