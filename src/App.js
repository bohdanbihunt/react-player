import React from 'react';

import Player from "./Containers/Player/Player"
import PlayerNav from "./Containers/PlayerNav/PlayerNav"

import "./styles/main.scss";

function App() {
  return (
    <div className="wrapper">
        <Player />
        <PlayerNav />
    </div>
  );
}

export default App;
