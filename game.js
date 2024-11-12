document.addEventListener("DOMContentLoaded", () => {
    const ROWS = 6;
    const COLS = 7;
    const game = document.getElementById("game");
    const currentPlayerSpan = document.getElementById("currentPlayer");

    let board = Array(ROWS).fill(null).map(() => Array(COLS).fill(0));
    let currentPlayer = 1;
    let gameOver = false;
    let score1 = 0, score2 = 0;

    // Génération de la grille
    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.dataset.row = row;
            cell.dataset.col = col;
            cell.addEventListener("click", handleClick);
            game.appendChild(cell);
        }
    }

    function handleClick(e) {
        if (gameOver) return;

        const col = parseInt(e.target.dataset.col);

        // Trouver la première ligne vide dans cette colonne
        for (let row = ROWS - 1; row >= 0; row--) {
            if (board[row][col] === 0) {
                board[row][col] = currentPlayer;

                const cell = document.querySelector(`.cell[data-row="${row}"][data-col="${col}"]`);
                cell.classList.add(`player${currentPlayer}`);
                cell.classList.add("taken");

                if (checkWin(row, col)) {
                    document.getElementById("status").innerText = `Joueur ${currentPlayer} a gagné !`;
                    updateScore();
                    gameOver = true;
                } else {
                    currentPlayer = currentPlayer === 1 ? 2 : 1;
                    currentPlayerSpan.innerText = currentPlayer;
                }
                return;
            }
        }
        alert("Colonne pleine !");
    }

    function checkWin(row, col) {
        // Vérification horizontale, verticale et diagonales
        return (
            checkDirection(row, col, 0, 1) + checkDirection(row, col, 0, -1) >= 3 || // Horizontal
            checkDirection(row, col, 1, 0) >= 3 || // Vertical
            checkDirection(row, col, 1, 1) + checkDirection(row, col, -1, -1) >= 3 || // Diagonale /
            checkDirection(row, col, 1, -1) + checkDirection(row, col, -1, 1) >= 3 // Diagonale \
        );
    }

    function checkDirection(row, col, rowDir, colDir) {
        let count = 0;
        let r = row + rowDir;
        let c = col + colDir;

        while (r >= 0 && r < ROWS && c >= 0 && c < COLS && board[r][c] === currentPlayer) {
            count++;
            r += rowDir;
            c += colDir;
        }
        return count;
    }

    function updateScore() {
        if (currentPlayer === 1) score1++;
        else score2++;
        document.getElementById("score1").innerText = score1;
        document.getElementById("score2").innerText = score2;
    }

    // Bouton Restart 
    document.getElementById("restart").addEventListener("click", () => {
        board = Array(ROWS).fill(null).map(() => Array(COLS).fill(0));
        document.querySelectorAll(".cell").forEach(cell => {
            cell.className = "cell"; // Réinitialise les styles
        });
        currentPlayer = 1;
        currentPlayerSpan.innerText = currentPlayer;
        gameOver = false;
        document.getElementById("status").innerText = "Joueur 1, c'est votre tour !";
    });
});
