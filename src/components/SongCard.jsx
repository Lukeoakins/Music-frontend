import React, { useState, useEffect } from 'react';

export default function SongCard({ song, toggleLike }) {
    const [lyrics, setLyrics] = useState('');
    const [showLyrics, setShowLyrics] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!showLyrics) return

        async function fetchLyrics() {
            setLoading(true)

            try {
                const response = await fetch(`https://api.lyrics.ovh/v1/${encodeURIComponent(song.artist)}/${encodeURIComponent(song.title)}`)

                if (!response.ok) {
                    throw new Error('Lyrics not found')
                }
                
                const data = await response.json()
                setLyrics(data.lyrics)
            } catch (error) {
                setLyrics('Lyrics not found')
            }
            setLoading(false)
        }
        fetchLyrics()
    }, [showLyrics, song.artist, song.title]);

    return (
        <div>
            <h3>{song.title}</h3>
            <p>Release Date: {song.releaseDate}</p>
            <p>Artist: {song.artist}</p>
            <p>Genre: {song.genre}</p>

            <button onClick={() => toggleLike(song.id)}>
                {song.liked ? '❤️ Liked' : '♡ Like'}
            </button>

            <button onClick={() => setShowLyrics(!showLyrics)}>
                {showLyrics ? 'Hide Lyrics' : 'Show Lyrics'}
            </button>

            {showLyrics && (
                <div className="lyrics">
                    {loading ? <p>Loading lyrics...</p> : <p>{lyrics}</p>}
                </div>
            )}
        </div>
    )
}
