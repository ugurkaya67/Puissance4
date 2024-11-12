<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Puissance 4</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Puissance 4</h1>
    <div id="puissance4-container">
        <div id="game-frame">
            <div id="game">
                <!-- Les cellules seront générées par JavaScript -->
            </div>
        </div>
        <div id="base-left"></div>
        <div id="base-right"></div>
    </div>
    <div id="scoreboard">
        Joueur 1 : <span id="score1">0</span> | Joueur 2 : <span id="score2">0</span>
    </div>
    <button id="restart">Recommencer</button>
    <div id="status">
        Joueur <span id="currentPlayer">1</span>, c'est votre tour !
    </div>
    <script src="game.js"></script>
</body>
</html>
