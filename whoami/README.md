# מִי אֲנִי? — a party game for one phone

A stand-alone game in the style of the "Imposter" party games: 3-8 players pass one phone
round the circle. Everyone is shown the same secret (an animal, a food, a job...) except one
player, who is told only that they are the guesser and must not let on. Each player says one
word about the secret, the group votes on who does not know, and the guesser gets one guess.
Points add up over the rounds.

- `index.html`: the whole game, one file, nothing to install and nothing from the network
  except the fonts (it plays offline with the phone's own fonts).

## Playing

Open `index.html` in the phone's browser, or serve the folder from any static host. On the
site it lives at `/whoami/`. "Add to Home Screen" gives it an icon and a full screen.

The phone remembers the last table (names, faces, subject) and the sound switch. Scores are
kept for the sitting; a new game starts them from zero.
