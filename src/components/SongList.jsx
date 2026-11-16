export default function SongList({ songs }) {
    return (
        <section>
            <h2>Songs</h2>
            {songs.map(song => (
                <div key={song.title}>
                    <h3>{song.title}</h3>
                    <p>Artist: {song.artist}</p>
                    <p>Release Date: {song.releaseDate}</p>
                    <p>Genre: {song.genre}</p>
                    <p>Liked: {song.liked ? 'Yes' : 'No'}</p>
                </div>
            ))}
        </section>
    )
}