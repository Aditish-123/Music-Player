const songs = [
    {
        title: "My Favorite Song",
        artist: "Demo Artist"
    },
    {
        title: "Summer Vibes",
        artist: "Demo Artist"
    },
    {
        title: "Night Drive",
        artist: "Demo Artist"
    }
];

let currentSong = 0;
let isPlaying = false;

const songTitle = document.getElementById("songTitle");
const artist = document.getElementById("artist");
const playBtn = document.getElementById("playBtn");
const status = document.getElementById("status");
const progress = document.getElementById("progress");
const volume = document.getElementById("volume");

function updateSong() {
    songTitle.innerText = songs[currentSong].title;
    artist.innerText = songs[currentSong].artist;
    progress.value = 0;
}

function togglePlay() {
    isPlaying = !isPlaying;

    if (isPlaying) {
        playBtn.innerText = "⏸️";
        status.innerText = "Playing";
    } else {
        playBtn.innerText = "▶️";
        status.innerText = "Paused";
    }
}

function nextSong() {
    currentSong++;

    if (currentSong >= songs.length) {
        currentSong = 0;
    }

    updateSong();
    isPlaying = true;
    playBtn.innerText = "⏸️";
    status.innerText = "Playing";
}

function previousSong() {
    currentSong--;

    if (currentSong < 0) {
        currentSong = songs.length - 1;
    }

    updateSong();
    isPlaying = true;
    playBtn.innerText = "⏸️";
    status.innerText = "Playing";
}

progress.addEventListener("input", function () {
    status.innerText = "Playing";
});

volume.addEventListener("input", function () {
    status.innerText = "Volume: " + volume.value + "%";
});
