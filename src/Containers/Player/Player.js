import React from 'react'
import PlayerBurger from "./PlayerBurger"

export default function Player () {
    return (
        <div className="PlayerWrapper">
            <div className="PlayerBackground"></div>

            <PlayerBurger />

            <div className="PlayerElements">
                <div className="PlayerMenu">
                    <div>Self Conscious</div>
                    <div>Kanye west</div>
                </div>

                <div className="PlayerSongsItems">
                    <button>Play</button>
                </div>

                <div className="PlayerSongName"></div>
                <div className="PlayerSongControls"></div>
                <div className="SongDuration"></div>
            </div>
        </div>
    )
}