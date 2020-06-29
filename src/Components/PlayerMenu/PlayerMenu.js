import React from 'react'

export default function PlayerMenu ({ open }) {
    return (
        <div className={"PlayerMenu " + (open ? 'show' : 'hidden')}>
            <div>Self Conscious</div>
            <div>Kanye west</div>

            <ul>
                <li>Add to playlist</li>
                <li>Show album</li>
                <li>Share with friends</li>
            </ul>
        </div>
    )
}