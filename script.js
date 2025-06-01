const cells = document.querySelectorAll('.cell');
let currentPlayer = "X";
let board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];


document.getElementById("player-info").textContent = "Tour du Joueur : " + currentPlayer;

///////////////////////////////////////////////////////////////////////////////////////////
cells.forEach((cell, index) => {
    console.log(index);
    console.log(cell);
    cell.addEventListener("click", function () {

        if (cell.textContent === "") {
            cell.textContent = currentPlayer;

            cell.classList.add(currentPlayer.toLowerCase());

            
            const ligne = Math.floor(index / 3);
            const colonne = index % 3;
            board[ligne][colonne] = currentPlayer;


            if (checkWin(board, currentPlayer)) {
                    document.getElementById("winDialogText").textContent = "Le joueur " + currentPlayer + " a gagné !";
                    document.getElementById("winDialog").showModal();
                return;
            }
            

            if (checkDraw(board, currentPlayer)) {
                    document.getElementById("drawDialogText").textContent = "Match Nul";
                    document.getElementById("drawDialog").showModal();    
            }

            currentPlayer = (currentPlayer === "X") ? "O" : "X";


            document.getElementById("player-info").textContent = "Tour du Joueur : " + currentPlayer;
        }
    });
});

/////////////////////////////////////////////////////////////////////////////////////////////
function checkWin(board, player) {
    for (let i = 0; i < 3; i++) {
        
        if (
            (board[i][0] === player && board[i][1] === player && board[i][2] === player) ||
            (board[0][i] === player && board[1][i] === player && board[2][i] === player)
        ) {
            return true;
        }
    }

    if (
        (board[0][0] === player && board[1][1] === player && board[2][2] === player) ||
        (board[0][2] === player && board[1][1] === player && board[2][0] === player)
    ) {
        return true;
    }

    return false;
}
/////////////////////////////////////////////////////////////////////////////////////////////
function checkDraw(board) {
    return board.flat().every(cell => cell !== "");
}
////////////////////////////////////////////////////////////////////////////////////////////
document.getElementById("restart-btn").onclick = () => { 
    board = [
    ["","",""],
    ["","",""],
    ["","",""]
]; 
    
document.querySelectorAll('.cell').forEach(cell => {
    cell.textContent = "";
    cell.classList.remove("x", "o");
});  
document.getElementById("player-info").textContent = "Tour du Joueur : X"; };
/////////////////////////////////////////////////////////////////////////////////////////////
