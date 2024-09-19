This is a simple Number Guessing Game implemented in JavaScript. The game randomly generates a secret number between a defined range, and the user has a limited number of tries to guess it correctly. After each guess, the game provides hints if the number is higher or lower than the guess. The game keeps track of the user's high score based on the number of remaining tries.

How to Play: 
A secret number between 1 and 100 is generated randomly.
You have 7 tries to guess the secret number.
Enter a guess in the input field and press the Check button or hit Enter on your keyboard.
The game will display whether the guess is too high, too low, or correct.
If you guess correctly, the game congratulates you and tracks your high score.
If you run out of tries, you lose the game and will need to start over.

Features: 
Randomly generated secret number between 1 and 100.
7 tries to guess the correct number.
Hint system to tell if the guess is higher or lower than the secret number.
A high score system that records the highest number of tries left when winning.
Responsive input: Allows checking guesses via button click or by pressing Enter.
Color changes to the background when you win or lose.

DOM Elements: 
Message Display: Provides feedback messages (e.g., correct guess, too high, too low, or invalid input).
Tries Display: Displays the number of tries left.
Number Display: Displays the secret number when the game is won.
Guess Input: Text input field where the player enters their guess.
Check Button: Button to submit a guess.
Again Button: Button to reset and start a new game.
Highscore Display: Displays the highest number of tries remaining when the game is won.

Functions Overview: 
1. generateSecretNumber()
Generates a random secret number between the minimum and maximum guess range (1 and 100).
2. updateMessage(message)
Updates the message displayed to the user with feedback after each guess.
3. updateTriesDisplay()
Updates the display of the number of tries left.
4. checkGuess()
Checks the validity of the user's guess and provides hints or handles winning/losing scenarios.
5. handleWin(guess)
Called when the user guesses the correct number. Updates the UI, displays a winning message, and tracks the high score.
6. handleLoss()
Called when the user runs out of tries. Displays a losing message and updates the UI.
7. resetGame()
Resets the game to its initial state: new secret number, reset tries, UI reset, etc.

Controls
Check Button: Submits the guess.
Enter Key: Can also be used to submit the guess.
Again Button: Resets the game when you win or lose.
