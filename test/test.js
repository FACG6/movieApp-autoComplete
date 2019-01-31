const tape = require("tape");
const getData = require("../src/filterResults");
const {
  getImageUrl,
  getMovieUrl
} = require('../public/js/fetch');


tape("testing filterResults", t => {
  t.deepEquals(
    getData({ theData: "the hunger" }),
    ["The Hunger Games: Mockingjay – Part 1"],
    "pass"
  );
  t.deepEquals(getData({ theData: "horrible" }), ["Horrible Bosses 2"], "pass");
  t.deepEquals(
    getData({ theData: "fa" }),
    [
      "Far from the Madding Crowd",
      "Father Figures",
      "Fahrenheit 11/9",
      "Fantastic Beasts: The Crimes of Grindelwald"
    ],
    "pass"
  );
  t.deepEquals(
    getData({ theData: "ali" }),
    ["Alice Through the Looking Glass", "Alien: Covenant"],
    "pass"
  );
  t.deepEquals(
    getData({ theData: "the s" }),
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
    getData({ theData: "be" }),
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
    getData({ theData: "sa" }),
    ["San Andreas", "Sausage Party", "Same Kind of Different as Me", "Samson"],
    "pass"
  );
  t.end();
});

tape("testing getImageUrl", t => {
  const actual = getImageUrl('baby driver');
  const expected = "https://image.tmdb.org/t/p/w600_and_h900_bestv2baby driver";
      t.deepEquals(actual, expected, "pass")
      t.end();
});
                
              