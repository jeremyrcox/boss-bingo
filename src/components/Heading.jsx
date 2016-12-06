import React from 'react';

export function Heading(props) {
  const title = props.title || 'Boss Bingo';
  const players = parseInt(props.players, 10) - 1;

  return (
    <div className="heading">
      <h1>
        {title}
      </h1>
      {players >= 0 ?
        <div className="player-count">{players} other player{players === 1 ? '' : 's'}</div> : <div></div>
      }
    </div>
  );
}

Heading.propTypes = {
  title: React.PropTypes.string,
  players: React.PropTypes.number
};
