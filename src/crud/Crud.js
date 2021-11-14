import React, { useState, useEffect } from 'react';
import CrudCard from './CrudCard.js';
import CrudForm from './CrudForm.js';
import RefreshCards from './RefreshCards.js';
import './Crud.css';


export default function Crud() {
  let [ arrCards, setArrCards ] = useState([]);

  const server = ' https://t2hw5-ra.herokuapp.com/notes';

  const getCards = () => {
    fetch(server, {
      method: 'GET',
    }).then((response) => response.json()).then(response => {
      setArrCards([...response]);
   });
  }

  const deleteCard = (id) => {
    fetch(`${server}/${id}`, {
      method: 'DELETE',
    }).then(response => {
      if (response.ok) {
        getCards();
      } else {
        alert('Что-то пошло не так.');
      }
   });
  }

  useEffect(() => {
    getCards();
  }, []);

  let cardsList = arrCards.map(el => {
    return <CrudCard text={el.text} deleteCard={deleteCard.bind(this, el.id)} key={el.id}></CrudCard>
  });

  return (
    <div className="crud">
      <RefreshCards />
      <CrudForm 
        server={server}
        setCards={setArrCards}
        getCards={getCards}/>
        {cardsList}
    </div>
  )
}
