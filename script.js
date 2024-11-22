const words = ["Žopiček", "Žuček", "Popik", "Mišik", "Cicik", "Lasinka", "Malinka", "Maja"];
const textElement = document.getElementById("changing-text");
const beerMug = document.getElementById("beer-mug");
const playMusicButton = document.getElementById("play-music");
const audio = document.getElementById("sunset-audio");

let index = 0;

// Funkcia na cyklické striedanie slov
function changeWord() {
    textElement.textContent = words[index];
    index = (index + 1) % words.length;
}

// Zmena slov každé 2 sekundy
setInterval(changeWord, 2000);

// Kliknutie na emotikon piva
beerMug.addEventListener("click", () => {
    window.open("http://www.kamnapivo.sk/area/dobrepivo/", "_blank");
});

// Spustenie hudby pri kliknutí na tlačidlo
playMusicButton.addEventListener("click", () => {
    audio.play().catch(err => {
        console.error("Prehrávanie zablokované:", err);
    });
    playMusicButton.style.display = "none"; // Skryje tlačidlo
});
