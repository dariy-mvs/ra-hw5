import React, { useState } from 'react';
import { nanoid } from 'nanoid';

export default function WatchInput(props) {
  const { changeWatch } = props
  let [ watchName, setWatchName ] = useState('');
  let [ watchTimezone, setWatchCorr ] = useState('');
  const getInputValue = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    if(name === 'name') {
      setWatchName(value);
    } else {

    }
    name === 'name' ? setWatchName(value) : setWatchCorr(value);
  }

  const changeWatchArr = () => {
    const id = nanoid(4);

    if (/^(?:Z|[+-](?:2[0-3]|[01][0-9]):[0-5][0-9])$/.test(watchTimezone)) {
      changeWatch(watchName, watchTimezone, id);
    } else {
      alert('проверьте правильность введённой таймзоны. Введите отклонение в формате "+/-00:00".');
    }
  }

  return (
    <div className="inputBox">
      <input className="name" name="name" onChange={getInputValue} placeholder="название"/>
      <input className="time" name="time" onChange={getInputValue} placeholder="временная зона"/>
      <button className="inputBtn" onClick={changeWatchArr}>добавить</button>
    </div>
  )
}
