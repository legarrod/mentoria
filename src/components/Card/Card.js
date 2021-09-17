import React from 'react';

export default function Card({ item }) {
  return (
    <div className="w-56 border-2 rounded-md shadow m-3">
      <img src={item.image} />
      <h2 className="font-semibold text-base px-2 py-4">{item.name}</h2>
      <p className="text-xs px-2">
        <strong>Genero: </strong>
        {item.gender}
      </p>
      <p className="text-xs px-2 pb-2">
        <strong>Especie: </strong>
        {item.species}
      </p>
    </div>
  );
}
