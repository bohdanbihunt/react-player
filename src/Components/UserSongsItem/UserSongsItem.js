import React from 'react'

export default function UserSongsItem({song, index}) {
    return (
        <li><strong>{index + 1} </strong>{song.artist}</li>
    )
}