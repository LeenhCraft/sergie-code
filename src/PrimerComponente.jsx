import PropTypes from "prop-types";
export const PrimerComponente = ({ titulo, subtitulo, numero }) => {
  console.log(titulo);
  console.log(subtitulo);
  return (
    <>
      <h1>Props:</h1>
      <h2>{titulo}</h2>
      <h2>{numero + 1}</h2>
    </>
  );
};

// esto es obligar a requerir un tipo de dato
PrimerComponente.propTypes = {
  titulo: PropTypes.string.isRequired,
  subtitulo: PropTypes.string.isRequired,
  // numero: PropTypes.number.isRequired,
};
PrimerComponente.defaultProps = {
  subtitulo: "soy un subtitulo por defecto",
  titulo: "soy un titulo por defecto",
  numero: 0,
};
