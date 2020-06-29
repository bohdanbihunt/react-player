import React, { useState } from 'react'

import PlayerMenu from '../PlayerMenu/PlayerMenu'

import playerBurger from '../../images/more_ico.svg'

import './PlayerBurger.scss';

export default function PlayerBurger () {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <div className="playerBurger" onClick={()=> setOpen(!open)}>
                <img src={playerBurger} alt="info menu" />
            </div>

            <PlayerMenu open={open} />
        </div>
    )
}