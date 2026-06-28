Rock Paper Scissors - The Odin Project
This is my solution to the Rock Paper Scissors project for The Odin Project's Foundations course.

I originally built this to run entirely in the browser console using text prompts, but I've recently refactored the whole thing into a fully interactive web game. This was my first time really tying HTML, CSS, and JavaScript together, and it was a huge learning experience!


How It Works:

No more text prompts: You just click the Rock, Paper, or Scissors buttons to play.

Live UI: The game updates the text on the screen to show who won the round and keeps track of the score.

First to Five: Once a player hits 5 points, a gameOver function runs, announces the winner, and resets the scores behind the scenes so you can keep playing without refreshing the page.


Takeaways:

Tying It All Together: This was my very first live website! The biggest learning was figuring out how to make HTML, CSS, and JavaScript actually work together. I learned how to use Event Listeners to capture a button click, pass that value against a randomly generated computer choice, run the playRound function, and immediately update the DOM so the user sees the score update in real-time.

CSS is Fun (but picking colors is hard!): Deciding on a color palette looks easy until you actually try to do it—it can get super confusing. I had a lot of fun learning about CSS transitions to make the buttons physically lift and react when the cursor hovers over them.

Reset Everything: I figured out how to add a Play Again button that completely resets the global variables (scores) and UI text, letting the user restart instantly without ever having to hit the browser's refresh button.

Typo & Merge Conflict: I made a typo in my commit messages while building this. Instead of just leaving them, I learned how to use git rebase -i to fix it. I also had to deal with my first merge conflict after deleting a previously pushed commit. I had to pull the changes and carefully resolve the conflict. It was scary at first, but fixing it was a massive confidence booster.