const tape = require("tape");
const getData = require("../src/filterResults");
const { 
  getMovieUrl,
  getImageUrl
} = require("../public/js/fetch")

tape("testing filterResults", t => {
  t.deepEquals(
    getData({ searchInput: "the hunger" }),
    ["The Hunger Games: Mockingjay – Part 1"],
    "pass"
  );
  t.deepEquals(
    getData({ searchInput: "horrible" }),
    ["Horrible Bosses 2"],
    "pass"
  );
  t.deepEquals(
    getData({searchInput: "fa"}),
    [
      "Far from the Madding Crowd",
      "Father Figures",
      "Fahrenheit 11/9",
      "Fantastic Beasts: The Crimes of Grindelwald"
    ],
    "pass"
  );
  t.deepEquals(
    getData({ searchInput: "ali" }),
    ["Alice Through the Looking Glass", "Alien: Covenant"],
    "pass"
  );
  t.deepEquals(
    getData({ searchInput: "the s" }),
    [
      "The SpongeBob Movie: Sponge Out of Water",
      "The Second Best Exotic Marigold Hotel",
      "The Shallows",
      "The Secret Life of Pets",
      "The Space Between Us",
      "The Shack",
      "The Star",
      "The Shape of Water",
      "The Strange Ones",
      "The Strangers: Prey at Night",
      "The Seagull",
      "The Spy Who Dumped Me",
      "The Sisters Brothers",
      "The Silence"
    ],
    "pass"
  );
  t.deepEquals(
    getData({ searchInput: "be" }),
    [
      "Beyond the Reach",
      "Ben-Hur",
      "Between Us",
      "Before I Fall",
      "Beauty and the Beast",
      "Beatriz at Dinner",
      "Beach Rats",
      "Beyond Skyline",
      "Beirut",
      "Beautiful Boy",
      "Ben Is Back"
    ],
    "pass"
  );
  t.deepEquals(
    getData({ searchInput: "sa" }),
    ["San Andreas", "Sausage Party", "Same Kind of Different as Me", "Samson"],
    "pass"
  );
  t.end();
});

tape("testing getMovieUrl", t => {
  t.deepEquals(
    getMovieUrl('baby driver'),
    'https://api.themoviedb.org/3/search/movie?api_key=6b4029e64c1862a24fbb74c05d0aace8&language=en-US&query=baby%20driver',
    "pass"
  );
  t.end();
});
                