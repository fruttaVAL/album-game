"use strict";

// album list, move to a database SOON
const albums = [
  {
    title: "Folklore",
    artist: "Taylor Swift",
    imageUrl: "images/Folklore.jpg",
  },
  {
    title: "Madvillainy",
    artist: "MF DOOM",
    imageUrl: "images/madvillainy.jpg",
  },
  {
    title: "SOUR",
    artist: "Olivia Rodrigo",
    imageUrl: "images/sour.jpg",
  },
  {
    title: "Born To Die",
    artist: "Lana Del Rey",
    imageUrl: "images/born to die.jpg",
  },
  {
    title: "SOS",
    artist: "SZA",
    imageUrl: "images/sos.jpg",
  },
  {
    title: "Positions",
    artist: "Ariana Grande",
    imageUrl: "images/positions.jpg",
  },
  {
    title: "Yours Truly",
    artist: "Ariana Grande",
    imageUrl: "images/yours truly.jpg",
  },
  //fix red and fearless names/ jpg
  /*{
    title: "Red",
    artist: "Taylor Swift",
    imageUrl: "images/red.jpg",
  },
  {
    title: "Fearless",
    artist: "Taylor Swift",
    imageUrl: "images/fearless.jpg",
  }, */
  {
    title: "Ctrl",
    artist: "SZA",
    imageUrl: "images/ctrl.jpg",
  },
  {
    title: "IGOR",
    artist: "Tyler, The Creator",
    imageUrl: "images/igor.jpg",
    genre: "Hip Hop",
  },
  {
    title: "ASTROWORLD",
    artist: "Travis Scott",
    imageUrl: "images/astroworld.jpg",
  },
  {
    title: "RENAISSANCE",
    artist: "Beyonce",
    imageUrl: "images/renaissance.jpg",
  },
  {
    title: "channel ORANGE",
    artist: "Frank Ocean",
    imageUrl: "images/channel orange.jpg",
  },
  {
    title: "Blonde",
    artist: "Frank Ocean",
    imageUrl: "images/blonde.jpg",
  },
  {
    title: "The Divine Feminine",
    artist: "Mac Miller",
    imageUrl: "images/the divine feminine.jpg",
  },
  {
    title: "Over It",
    artist: "Summer Walker",
    imageUrl: "images/over it.jpg",
  },
  {
    title: "thank u, next",
    artist: "Ariana Grande",
    imageUrl: "images/thank u, next.jpg",
  },
  {
    title: "Beatopia",
    artist: "beabadoobee",
    imageUrl: "images/beatopia.jpg",
  },
  {
    title: "American Teen",
    artist: "Khalid",
    imageUrl: "images/american teen.jpg",
  },
  {
    title: "Happier Than Ever",
    artist: "Billie Eilish",
    imageUrl: "images/happier than ever.jpg",
  },
  {
    title: "Youngblood",
    artist: "5 Seconds of Summer",
    imageUrl: "images/youngblood.jpg",
  },
  {
    title: "Future Nostalgia",
    artist: "Dua Lipa",
    imageUrl: "images/future nostalgia.jpg",
  },
  {
    title: "Planet Her",
    artist: "Doja Cat",
    imageUrl: "images/planet her.jpg",
  },
  {
    title: "Doris",
    artist: "Earl Sweatshirt",
    imageUrl: "images/doris.jpg",
  },
  //fix taylors version
  /*
  {
    title: "Speak Now (Taylor's Version)",
    artist: "Taylor Swift",
    imageUrl: "",
  }, */
  {
    title: "Good Riddance",
    artist: "Gracie Abrams",
    imageUrl: "images/good riddance.jpg",
  },
  {
    title: "CALL ME IF YOU GET LOST",
    artist: "Tyler, The Creator",
    imageUrl: "images/call me if you get lost.jpg",
  },
  {
    title: "ANTI",
    artist: "Rihanna",
    imageUrl: "images/anti.jpg",
  },
  {
    title: "Starboy",
    artist: "The Weeknd",
    imageUrl: "images/starboy.jpg",
  },
  {
    title: "After Hours",
    artist: "The Weeknd",
    imageUrl: "images/after hours.jpg",
  },
  {
    title: "Heaven Or Hell",
    artist: "Don Toliver",
    imageUrl: "images/heaven or hell.jpg",
  },
  {
    title: "Pony",
    artist: "Rex Orange County",
    imageUrl: "images/pony.jpg",
  },
  {
    title: "The Life of Pablo",
    artist: "Kanye West",
    imageUrl: "images/the life of pablo.jpg",
  },
  {
    title: "Stranger in the Alps",
    artist: "Phoebe Bridgers",
    imageUrl: "images/stranger in the alps.jpg",
  },
  {
    title: "the record",
    artist: "boygenius",
    imageUrl: "images/the record.jpg",
  },
  {
    title: "Punisher",
    artist: "Phoebe Bridgers",
    imageUrl: "images/punisher.jpg",
  },
  {
    title: "Beauty Behind The Madness",
    artist: "The Weeknd",
    imageUrl: "images/beauty behind the madness.jpg",
  },
  {
    title: "emails i can't send",
    artist: "Sabrina Carpenter",
    imageUrl: "images/emails i can't send.jpg",
  },
  {
    title: "Wolf",
    artist: "Tyler, The Creator",
    imageUrl: "images/wolf.jpg",
  },
  {
    title: "Pure Heroine",
    artist: "Lorde",
    imageUrl: "images/pure heroine.jpg",
  },
  {
    title: "BALLADS 1",
    artist: "Joji",
    imageUrl: "images/ballads 1.jpg",
  },
  {
    title: "To Pimp A Butterfly",
    artist: "Kendrick Lamar",
    imageUrl: "images/to pimp a butterfly.jpg",
  },
  {
    title: "2014 Forest Hills Drive",
    artist: "J. Cole",
    imageUrl: "images/2014 forest hills drive.jpg",
  },
  {
    title: "Hoodie SZN",
    artist: "A Boogie Wit da Hoodie",
    imageUrl: "images/hoodie szn.jpg",
  },
  {
    title: "EVERYTHING IS LOVE",
    artist: "The Carters",
    imageUrl: "images/everything is love.jpg",
  },
  {
    title: "Die Lit",
    artist: "Playboi Carti",
    imageUrl: "images/die lit.jpg",
  },
  {
    title: "True to Self",
    artist: "Bryson Tiller",
    imageUrl: "images/true to self.jpg",
  },
  {
    title: "ONEPOINTFIVE",
    artist: "Amine",
    imageUrl: "images/onepointfive.jpg",
  },
  {
    title: "AM",
    artist: "Arctic Monkeys",
    imageUrl: "images/am.jpg",
  },
  {
    title: "Sweetener",
    artist: "Ariana Grande",
    imageUrl: "images/sweetener.jpg",
  },
  {
    title: "COSMIC",
    artist: "Bazzi",
    imageUrl: "images/cosmic.jpg",
  },
  {
    title: "Fake It Flowers",
    artist: "beabadoobee",
    imageUrl: "images/fake it flowers.jpg",
  },
  {
    title: "Lemonade",
    artist: "Beyonce",
    imageUrl: "images/lemonade.jpg",
  },
  {
    title: "Dark Sky Paradise",
    artist: "Big Sean",
    imageUrl: "images/dark sky paradise.jpg",
  },
  {
    title: "WASTELAND",
    artist: "Brent Faiyaz",
    imageUrl: "images/wasteland.jpg",
  },
  {
    title: "GINGER",
    artist: "BROCKHAMPTON",
    imageUrl: "images/ginger.jpg",
  },
  {
    title: "Unorthodox Jukebox",
    artist: "Bruno Mars",
    imageUrl: "images/unorthodox jukebox.jpg",
  },
  {
    title: "Coloring Book",
    artist: "Chance the Rapper",
    imageUrl: "images/coloring book.jpg",
  },
  {
    title: "Because the Internet",
    artist: "Childish Gambino",
    imageUrl: "images/because the internet.jpg",
  },
  {
    title: "Freudian",
    artist: "Daniel Caesar",
    imageUrl: "images/freudian.jpg",
  },
  {
    title: "Views",
    artist: "Drake",
    imageUrl: "images/views.jpg",
  },
];

/* THE GAME STARTS HERE
FIRST BEGIN WITH GENRE CHOOSING */

// album initialize randomizer and image, display album
let albumRandom = albums[Math.floor(Math.random() * albums.length)];
document.getElementById("album-cover").src = albumRandom.imageUrl;

// functions here
// function to randomize albums again
function randAlbum() {
  albumRandom = albums[Math.floor(Math.random() * albums.length)];
  document.getElementById("album-cover").src = albumRandom.imageUrl;
  document.getElementById("guess-input").value = "";
}

function gameReset() {
  tries = 3;
  highscore = Math.max(highscore, score);
  score = 0;
  randAlbum();
  document.getElementById("tries").textContent = tries;
  document.getElementById("score").textContent = score;
  document.getElementById("submit-button").textContent = "Submit Guess";
  document.getElementById("message").textContent = "Start guessing...";
  document.getElementById("album-details").textContent = undefined;
}

// game logic
//   curr score, tries
let score = 0;
let highscore = 0;
let tries = 3;

// correct input on button press, otherwise incorrect
const submitGuess = document.getElementById("submit-button");
submitGuess.addEventListener("click", function () {
  // restarts game if tries is 0
  if (tries === 0) {
    gameReset();
  } else {
    //user input, lowercase
    const userGuess = String(
      document.getElementById("guess-input").value.toLowerCase()
    );
    console.log("hi");
    // correct guess
    if (userGuess === albumRandom.title.toLowerCase()) {
      score++;
      highscore = Math.max(highscore, score);
      tries = 3;
      document.getElementById("highscore").textContent = highscore;
      document.getElementById("score").textContent = score;
      document.getElementById("tries").textContent = tries;
      document.getElementById("message").textContent = "Nice!";
      randAlbum();
      // incorrect guess
    } else {
      document.getElementById("tries").textContent = --tries;
      // if two tries
      if (tries === 2) {
        document.getElementById("message").textContent = "Wrong!";
      }
      // if one try
      if (tries === 1) {
        document.getElementById("message").textContent = "Last Chance!";
      }
      // if no more tries
      if (tries === 0) {
        // template literal
        document.getElementById(
          "album-details"
        ).textContent = `Title: ${albumRandom.title}
        Artist: ${albumRandom.artist}`;
        document.getElementById("message").textContent = "You lost!";
        document.getElementById("submit-button").textContent = "Restart!";
      }
    }
  }
});

// enter via enter key press
document
  .getElementById("guess-input")
  .addEventListener("keydown", function (e) {
    if (
      e.key === "Enter" &&
      document.getElementById("guess-input").value.trim() !== ""
    ) {
      submitGuess.click();
    }
  });

// WEBSITE FUNCTIONALITIES
// Dark mode SOON
