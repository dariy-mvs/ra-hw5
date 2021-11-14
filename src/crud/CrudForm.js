import React, { useState } from 'react';

export default function CrudForm(props) {
  const { server, setCards, getCards } = props; 
  let [ textMessage, setMessage ] = useState('');
  const changeMessage = (e) => {
    const message = e.target.value;
    setMessage(message);
  };



  const sendCard = (e) => {
  e.preventDefault();
  const formElem = e.target.closest('form');
  const form = new FormData(formElem);
  return fetch(server, {
      method: 'POST',
      body: form,
    }).then((response) => {
      if (response.ok) {
        getCards();
      }
      });
  }

  return (
    <div className="formBox">
      <form>
        <textarea name="text" onChange={changeMessage} placeholder="введите текст"></textarea>
        <button type="submit" onClick={sendCard}>submit</button>
      </form>
    </div>
  )
}
