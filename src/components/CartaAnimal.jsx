

const CartaAnimal = ({ animal }) => {

  if (!animal) {
    return null;
  }

  return (
    <div className="animal-card">

      <span className="animal-image">
        {animal.imagen}
      </span>

      <h2>{animal.animal}</h2>

      <p>{animal.descripcion}</p>

    </div>
  );
};

export default CartaAnimal;