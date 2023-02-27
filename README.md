# Number-Guessing-Game
PIAIC
This code creates a readline interface using createInterface function from the readline module. 
The rl.question method is used to prompt the user for input and get their guess. Once the user inputs a guess, 
the answer is parsed into an integer using parseInt, and then compared to the randomly generated number. 
The score is updated accordingly, and the number of rounds is incremented. If the number of rounds is greater than 3, the game is over, and 
the final score is displayed along with the message "Game over!". The readline interface is then closed using the rl.close() method. 
If the number of rounds is less than or equal to 3, the playRound function is called again to start another round of the game.
