import React, { Component } from 'react';

const AddPlayerForm = ({ addPlayer }) => {

  const playerInput = React.createRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    //TODO: agregar validación de longitud de nombre para que no rompa
    addPlayer(playerInput.current.value);
    e.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
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