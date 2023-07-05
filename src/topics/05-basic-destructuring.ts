
/** INTERFACE */

interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: 'Ed Sheeran',
        year: 2015
    }
}

const song = 'New Song';

const { song: anotherSong, songDuration: duration, details } = audioPlayer;

const { author } = details;

// console.log('Song: ', song);
// console.log('Song: ', anotherSong);
// console.log('Duration: ', duration);
//console.log('author: ', audioPlayer.details.author);
// console.log('author: ', author);


const [ p1, p2, trunks = 'Not found']: string = ['Goku', 'Vegeta' /*, 'Trunks'*/];

//const trunks = dbz[3] || 'No hay personaje';

console.log('Personaje 3: ', trunks);



export {}