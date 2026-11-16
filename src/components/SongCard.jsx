export default function SongCard({ song, toggleLike }) {
    return (
        <div>
            <h3>{song.title}</h3>
            <p>Release Date: {song.releaseDate}</p>

            <button onClick={() => toggleLike(song.id)}>
                {song.liked ? 'Liked' : 'Like'}
            </button>
        </div>
    )
}
