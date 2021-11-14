import React from 'react';

export default function RefreshCards(props) {
  const {getCards} = props;
  return (
    <div className="refresh" onClick={getCards}>
      
    </div>
  )
}
