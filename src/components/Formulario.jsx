import { useState } from "react";

export const Formulario = ({ agregarTarea }) => {
  const [inputValue, setinputValue] = useState("");
  const onInputChange = (e) => {
    // console.log(e.target.value);
    setinputValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    agregarTarea(inputValue);
  };

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <input
        type="text"
        id="tarea"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
