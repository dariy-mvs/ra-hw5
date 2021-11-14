import React from 'react';

export default function CrudCard(props) {
  const { text, deleteCard } = props;
  
  return (
    <div className="card">
      <button onClick={deleteCard}>x</button>
      <p>{text}</p>
    </div>
  )
}
