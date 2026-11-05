

const Mensaje = ({ mensaje, correcta }) => {

  if (!mensaje) return null;

  const claseMensaje = correcta
    ? "feedback feedback-correct"
    : "feedback feedback-incorrect";

  return (
    <div className={claseMensaje}>
      {mensaje}
    </div>
  );
};

export default Mensaje;