

const BotonOpcion = ({
  opcion,
  onClick,
  disabled,
  seleccionada,
  correcta,
  mostrarCorrecta
}) => {

  let clase = "option-button";

  if (mostrarCorrecta) {
    clase += " option-correct";
  }
  else if (seleccionada) {
    clase += correcta
      ? " option-correct"
      : " option-incorrect";
  }

  return (
    <button
      className={clase}
      onClick={onClick}
      disabled={disabled}
    >
      {opcion}
    </button>
  );
};

export default BotonOpcion;