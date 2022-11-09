"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Playlist_1 = __importDefault(require("./Playlist"));
const songs = ["Song 1", "Song 2", "Song 3", "Song 4"];
const playlist = new Playlist_1.default(songs);
console.log(Playlist_1.default.description);
console.log("Playlist as initialized: " + playlist.playlist);
playlist.addSong("Song 5");
console.log("Playlist after adding a song: " + playlist.playlist);
Playlist_1.default.shuffle(playlist);
console.log("Playlist shuffled:");
console.log("Playing songs:");
playlist.play();
//# sourceMappingURL=index.js.map