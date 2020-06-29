import React from 'react'

import "./PlayerMenu.scss";

export default function PlayerMenu ({ open }) {
    return (
        <div className={"playerMenu " + (open ? "show" : "hidden")}>

            <div className="songInfo">
                <div className="song">Self Conscious</div>
                <div className="artist">Kanye west</div>
            </div>

            <ul className="optionsList">
                <li className="optionsItem">Add to playlist</li>
                <li className="optionsItem">Show album</li>
                <li className="optionsItem">Share with friends</li>
            </ul>
        </div>
    )
}