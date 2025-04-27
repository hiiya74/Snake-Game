# 🐍 Classic Snake Game in JavaScript

A simple and engaging implementation of the classic Snake game built using HTML, CSS, and JavaScript. Navigate the snake to eat the food, grow longer, and avoid colliding with the walls or its own tail!

---

## 🕹️ How to Play

1.  Clone or download the repository.
2.  Open the `snake_game.html` file in your web browser.
3.  Use the **arrow keys** on your keyboard to control the snake's direction:
    * **Up Arrow:** Move Up
    * **Down Arrow:** Move Down
    * **Left Arrow:** Move Left
    * **Right Arrow:** Move Right
4.  Eat the red food (initially) to increase your score and make the snake longer.
5.  The game speed increases periodically as you score.
6.  Be careful! The game ends if the snake hits the edges of the game board or collides with its own body.
7.  If you reach a score of 30, you win!
8.  After a "Game Over", you'll be prompted to play again. Your highest score is saved in your browser's local storage.

---

## ⚙️ Tech Stack

* **HTML:** Provides the basic structure for the game elements.
* **CSS:** Styles the game board, score display, and overall appearance.
* **JavaScript:** Implements the core game logic, including snake movement, food generation, collision detection, and scorekeeping.

---

## ✨ Key Features

* **Intuitive Controls:** Simple arrow key controls for easy gameplay.
* **Dynamic Gameplay:** The snake grows as it eats food, and the game speed increases with your score, adding a challenge.
* **Score Tracking:** Displays the current score and the highest score achieved.
* **Local High Score:** The highest score is saved in your browser's local storage, allowing you to compete against your own records.
* **Game Over and Reset:** Clear "Game Over" message with an option to play again.
* **Win Condition:** A specific score (30) triggers a "You Won!" message.
* **Visual Distinction:** The snake's head is visually different (yellow) from its body (green).
* **Special Food:** Every 5 points, the food briefly turns green. At a score of 30, the food turns white.

---

## 💻 Project Structure
Snake-game/
├── snake_game.html    # The main HTML file to run the game
├── s.css         # Stylesheet for the game's appearance
└── s.js          # JavaScript file containing the game logic
