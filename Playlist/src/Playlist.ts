export default class Playlist {
    playlist: string[] = [];
    private length: number = 0;
    static description: string = "This class will hold a playlist of songs";

    constructor(songs?: string[]){
        if(songs instanceof Array){
        for(let i: number = 0; i < songs.length; i++){
            this.playlist[i] = songs[i];
        }
        this.length = this.playlist.length;
        }
    }

    addSong(song: string){
        this.playlist.push(song);
        this.length++;
    }
    removeSong(song:string){
        this.playlist = this.playlist.filter(item => item !== song);
        this.length = this.playlist.length;
    }
    static shuffle(playlist: Playlist){
        for(let i: number = playlist.length - 1; i > 0; i--){
            let j = Math.floor(Math.random()*(i+1));
            
            [playlist.playlist[i], playlist.playlist[j]] = [playlist.playlist[j], playlist.playlist[i]];
        }
    }
    play(){
        this.playlist.forEach(song => {
            console.log(song)
        });
    }
}