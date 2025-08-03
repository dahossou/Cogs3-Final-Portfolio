# lab6b-javascript-dice
Starter files and images for Lab6b - Javascript Dice project

# 🎲 JavaScript Dice Lab (Lab 6b)

Welcome to the **Dice Game** coding challenge! This lab introduces JavaScript programming with interactive elements, loops, conditionals, and DOM manipulation.

## 🔧 Objective

You will build a dice game that:
- Allows users to input how many times they want to roll the dice
- Simulates two dice rolls each round
- Displays who won (Player 1 or Player 2)
- Tracks the user’s virtual balance (+$5 for a win, -$5 for a loss)
- Uses a `for` loop to repeat the game based on the user’s input

## 📁 Starter Files

Your starter code includes:
```
dice-lab/
├── index.html # Basic structure of the webpage
├── index.js # JavaScript logic (you will write your game here)
├── styles.css # CSS styling for your webpage
└── images/ # Folder containing dice images and background
  ├── dice1.png
  ├── dice2.png
  ├── dice3.png
  ├── dice4.png
  ├── dice5.png
  ├── dice6.png
  └── newbackground.png
```

## ✅ Tasks

1. Prompt the user for how many times they want to roll the dice
2. Use a `for` loop to run the game that many times
3. Update and display a balance (+$5 win / -$5 loss)
4. Modify at least 4 CSS styles (customize layout, colors, typography, etc.)
   - You may use Bootstrap classes or write your own CSS
5. Use `document.querySelector`, `textContent`, `innerHTML`, and image updating methods


## 🧪 Submission Instructions

- **Do not rename the HTML, CSS, or JS files**
- Commit and push all your code changes to GitHub
- We will test your game on GitHub - so make sure that we 

## 💡 Pro Tips

- Use `Math.floor(Math.random() * 6) + 1` to simulate a dice roll
- Display dice images using `<img src="images/diceX.png">`
- 6. Make sure your JavaScript sets the `src` of each image using this relative path:
```js
"images/dice" + randomNumber + ".png"
```
- Balance can be shown with a running total in an HTML element

Happy coding! 🎉

## 🌐You will need to publish your finished dice game with GitHub Pages:

### 1. Commit and Push Your Work
Make sure all your files are saved, committed, and pushed to your GitHub repository.

Your repo should include:
- `index.html`
- `index.js`
- `styles.css`
- `images/` folder with dice images

### 2. Enable GitHub Pages
1. Go to your repository on GitHub.
2. Click on the **Settings** tab.
3. Scroll down to **Pages** in the left sidebar (or scroll to the bottom if it's in the main section).
4. Under **Source**, choose the branch:
   - Select `main` as the branch
   - Set the folder to `/ (root)`
5. Click **Save**.

### 3. Find Your Website Link
After a few seconds, GitHub will give you a link to your published site. It will look like:

```
https://<your-username>.github.io/<repo-name>/
```

### 4. Test Your Site
Visit the link to see your dice game in action! If images don’t show, double-check:
- Your `images/` folder is correctly pushed
- Image `src` paths are relative (e.g., `"images/dice1.png"`)
