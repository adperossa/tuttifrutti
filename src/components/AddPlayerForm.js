import React from 'react';

const AddPlayerForm = ({ addPlayer }) => {

  const playerInput = React.createRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    addPlayer(playerInput.current.value);
    e.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        minLength={1}
        required
        ref={playerInput}
        placeholder="Ingrese un nuevo jugador"
      />
      <input
        type="submit"
        value="Agregar"
      />
    </form>
  );

}

export default AddPlayerForm;