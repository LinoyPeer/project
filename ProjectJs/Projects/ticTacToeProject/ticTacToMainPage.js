
// כפתור ניווט למשחק עם שחקן אחד
onePlayerButton = document.querySelector('#onePlayerButton').addEventListener('click', () => {
    window.open('ticTacToeOnePlayer.html');
})

// כפתור ניווט למשחק עם שני שחקנים
twoPlayersButton = document.getElementById('twoPlayersButton').addEventListener('click', () => {
    window.open('ticTacToeTwoPlayers.html');
});

// כפתור ניווט לנתוני המחשקים
scoreTableButton = document.getElementById('scoreTableButton').addEventListener('click', () => {
    window.open('scoreTable.html');
});






