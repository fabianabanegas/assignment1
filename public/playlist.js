const songs = [
  "Insolar – NTS Radio Show",
  "Afro Cuban Funky Grooves",
  "Havana Sunrise Vinyl Set",
  "Caribbean Night Ride",
  "Tropical Disco Echoes",
];

const listEl = document.getElementById("playlist-list");
const formEl = document.getElementById("playlist-form");
const inputEl = document.getElementById("song-input");
const shuffleBtn = document.getElementById("shuffle-btn");

function renderList() {
  listEl.innerHTML = "";
  songs.forEach((title) => {
    const li = document.createElement("li");
    li.textContent = title;
    listEl.appendChild(li);
  });
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffleBtn.addEventListener("click", () => {
  shuffle(songs);
  renderList();
});

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = inputEl.value.trim();
  if (!value) return;

  songs.push(value);
  inputEl.value = "";
  renderList();
});

renderList();
