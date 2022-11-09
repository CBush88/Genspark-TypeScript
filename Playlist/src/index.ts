import Playlist from "./Playlist";

const songs: string[] = ["Song 1", "Song 2", "Song 3", "Song 4"];
const playlist: Playlist = new Playlist(songs);

console.log(Playlist.description);
console.log("Playlist as initialized: " + playlist.playlist);

playlist.addSong("Song 5");
console.log("Playlist after adding a song: " + playlist.playlist);

Playlist.shuffle(playlist);
console.log("Playlist shuffled:");

console.log("Playing songs:");
playlist.play();