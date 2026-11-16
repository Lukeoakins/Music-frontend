import React, { useState } from "react";
import ArtistInfo from "./components/ArtistInfo";
import SongList from "./components/SongList";

export default function App() {
  const [inputText, setInputText] = useState("");

  function handleText(e) {
    setInputText(e.target.value);
  }

  const [songs, setSongs] = useState([
    {
      id: 1,
      title: "Song 1",
      artist: "Artist 1",
      releaseDate: "2022-01-01",
      genre: "Pop",
      liked: true,
    },
    {
      id: 2,
      title: "Song 2",
      artist: "Artist 2",
      releaseDate: "2022-02-01",
      genre: "Rock",
      liked: false,
    },
    {
      id: 3,
      title: "Song 3",
      artist: "Artist 3",
      releaseDate: "2022-03-01",
      genre: "Jazz",
      liked: false,
    },
  ])

  function toggleLike(id) {
    setSongs(
      songs.map((song) =>
        song.id === id ? { ...song, liked: !song.liked } : song,
      ),
    )
  }

  return (
    <>
      <div>
        <ArtistInfo />
        <SongList songs={songs} toggleLike={toggleLike} />
      </div>

      <div>
        <header>Music</header>
        <form>
          <input onChange={handleText} type="text" />
          <button type="submit">Add</button>
        </form>
      </div>
    </>
  )
}
