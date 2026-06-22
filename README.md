The Odin Project - Rock Paper Scissors

This is my solution to the Rock Paper Scissors project in the Foundations course! It was a tough but rewarding challenge that helped me transition from basic JavaScript syntax to actually structuring a working game.

Features:

1. Randomly selects Rock, Paper, or Scissors from an array.
2. Prompts the user for their choice each round.
3. Plays exactly 5 rounds, dynamically tracking and incrementing the score based on the win/loss conditions.
4. Displays the round winner and the current score at the end of each iteration.

Learning:

The hardest part of this build was definitely writing the playGame function. I had to do a lot of Googling to get the exact output and scope I wanted.

However, I was able to bring in some of my past experience with Python! I decided to store the game options in an array, and I used a loop to run the game 5 times instead of manually writing out the function calls. I also learned how to combine Math.random() with Math.floor() to round down decimals to whole integers, which let me cleanly pull a random string from my array.