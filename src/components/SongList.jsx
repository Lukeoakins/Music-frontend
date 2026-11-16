import SongCard from './SongCard'

export default function SongList({ songs, toggleLike }) {
    return (
        <section>
            <h2>Songs</h2>
            {songs.map(song => (
                <SongCard key={song.id} song={song} toggleLike={toggleLike} />
            ))}
        </section>
    )
}