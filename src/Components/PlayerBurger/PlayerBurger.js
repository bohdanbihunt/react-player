import React, { useState } from 'react'
import PlayerMenu from './PlayerMenu'
import playerBurger from '../../images/more_ico.svg'

export default function PlayerBurger () {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="PlayerBurger" onClick={()=> setOpen(!open)}>
                <img src={playerBurger} alt="info menu" />
            </div>

            <PlayerMenu open={open} />
        </>
    )
}