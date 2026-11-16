import react, { useState } from 'react'
import ArtistInfo from './components/ArtistInfo'
import SongList from './components/SongList'

export default function App() {
    const [songs, setSongs] = useState([
        { title: 'Song 1', artist: 'Artist 1', releaseDate: '2022-01-01', genre: 'Pop', liked: true },
        { title: 'Song 2', artist: 'Artist 2', releaseDate: '2022-02-01', genre: 'Rock', liked: false },
        { title: 'Song 3', artist: 'Artist 3', releaseDate: '2022-03-01', genre: 'Jazz', liked: false }
    ])

    return (
        <div>
            <ArtistInfo />
            <SongList songs={songs} />
        </div>
    )
}