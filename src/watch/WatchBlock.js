import React, { useState, useEffect } from 'react';
import WatchInput from './WatchInput.js';
import moment from 'moment';
import './Watchblock.css';

export default function WatchBlock() {
  let [ watchArr, setWatch ] = useState([]);

  const changeWatchArr = (name, zone, id) => {
    const watch = {
      name: name,
      zone: zone,
      id: id,
      moment: moment.utc().utcOffset(zone).format('HH:mm:ss')
    }
    setWatch(prev => ([...prev, watch]));
  }

  const deleteWatch = (name, id) => {
    setWatch(prev => {
      let newWatchArr = [];
      prev.forEach(el => {
        if (el.name === name && el.id === id) {
          return;
        }
        newWatchArr.push(el);
      });
      return newWatchArr;
    });
  }

  useEffect(() => {
    let timeout;
    if (watchArr.length !== 0) {
    timeout = setTimeout(() => {
      setWatch(prev => {
        let newState = [];
        prev.forEach(el => {
          let newEl = {...el};
          newEl.moment = moment.utc().utcOffset(el.zone).format('HH:mm:ss');
          newState.push(newEl);
        });
        return newState;
      });
    }, 1000);
    }
    return () => {
      clearTimeout(timeout);
    }
  }, [watchArr]);
  console.log(watchArr);
  let watchList = watchArr.map((el) => {
    const {name, id, zone} = el;
    return <li data-timezone={zone} key={id}>
      <span className="name">{name}</span>
      <span className="time">{moment.utc().utcOffset(zone).format('HH:mm:ss')}</span>
      <button onClick={deleteWatch.bind(this, name, id)}>X</button>
    </li>
  });
  
  return (
    <div className="container">
      <WatchInput changeWatch={changeWatchArr} />
      <ul className="watchList">
        {watchList}
      </ul>
    </div>
  )
}
