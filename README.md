# Sparta-tictactoe

### Description
The purpose of the project is to make a tic tac toe game which should allow users to reset the game and also a alert a player they they have met the win conditions of the game

### Languages used
* Javascript


### How to download
1. Search on Github for the user AhmedHamouda407
2. Find the repository named sparta-grid-maker
3. Clone the repository
4. cd into the repository


### Challenges (you can include images and code block here)
1. The first challenge was viewing the console.log('working') in the browser with the developer tools. The initial index.html document included a modified script which should be removed in order to allow the console.log to be viewed.
2. The second challenge was being able to target the correct elements using the DOM and addEventListener command. In many cases either no value would be returned when a click is made or undefined would be the returned result on the console.
3. The third challenge was enabling a coloured box to appear before accessing the css so that either an x or o appears on a box when clicked.
4. The fourth challenge was implementing a for loop with the correct switch cases. Initially the true condition (tic.playerturn)was placed within the loop. This true condition must be placed and defined outside the loop in order for clicks to alternate between x and o on screen.



5.tic.playerX.push(/* e.target.attributes[i]...into an array which stores the o box and x box filled)

if (x attribute [0] = [0] && x attribute [0] = [1] && x attribute [0] = [2]){alert('x wins')}
            // else if (o attribute [0] = [0] && o attribute [0] = [1] && o attribute [0] = [2]){alert(o wins)}
            // applies to array [0 1 2] having the same attributes

tic.playerX.push(/* e.target.attributes[i]...into an array which stores the o or x box filled*/)

An attempt at implementing a win condition with arrays [0 1 2] and the above code initially was made but was unsuccessfull as any box clicked would result in a coloured black box. The approach was to satisfy the win condition for just the [0 1 2] elements, using an if statement to prompt x or o wins. The remaining win conditions would then be implemented in a similar way with else if conditions and ideally once all win conditions have been met, a for loop would be used. 


### Learning points
1. Better approach at breaking down tasks to achieve the necessary results. For example rather than being able to access the css x and o classes and enable these attributes to appear on screen, the initial approach was to just enable a red box to appear when clicked on one sqaure specified in an array. After which, any sqaure clicked should turn red and this was first hard coded before implementing a for loop
2. Improved use of addEventListener to obtain outputs from the log.console and then using the addEventListener combined withe the  setAttributes functions to output classes defined within the css on the browser.