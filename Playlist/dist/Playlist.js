"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Playlist {
    constructor(songs) {
        this.playlist = [];
        this.length = 0;
        if (songs instanceof Array) {
            for (let i = 0; i < songs.length; i++) {
                this.playlist[i] = songs[i];
            }
            this.length = this.playlist.length;
        }
    }
    addSong(song) {
        this.playlist.push(song);
        this.length++;
    }
    removeSong(song) {
        this.playlist = this.playlist.filter(item => item !== song);
        this.length = this.playlist.length;
    }
    static shuffle(playlist) {
        for (let i = playlist.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [playlist.playlist[i], playlist.playlist[j]] = [playlist.playlist[j], playlist.playlist[i]];
        }
    }
    play() {
        this.playlist.forEach(song => {
            console.log(song);
        });
    }
}
exports.default = Playlist;
Playlist.description = "This class will hold a playlist of songs";
//# sourceMappingURL=Playlist.js.map