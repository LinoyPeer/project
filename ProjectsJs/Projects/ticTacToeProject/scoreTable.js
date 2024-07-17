
document.addEventListener('DOMContentLoaded', () => {
    let dataLocal1 = JSON.parse(localStorage.getItem('data')) || [];
    let dataLocal2 = JSON.parse(localStorage.getItem('dataOfTwoPlayers')) || [];
    let tableBody = document.getElementById('scoreTableBody');

    dataLocal1.forEach(game => {
        let row = document.createElement('tr');

        let dateCell = document.createElement('td');
        dateCell.textContent = game.DateTime;
        row.appendChild(dateCell);

        let timeCell = document.createElement('td');
        timeCell.textContent = game.Time;
        row.appendChild(timeCell);

        let gameTimeCell = document.createElement('td');
        gameTimeCell.textContent = game.GameTime;
        row.appendChild(gameTimeCell);

        let winnerCell = document.createElement('td');
        winnerCell.textContent = game.TheWinner;
        row.appendChild(winnerCell);

        tableBody.appendChild(row);
    });
});
dataLocal2.forEach(game => {
    let row = document.createElement('tr');

    let dateCell = document.createElement('td');
    dateCell.textContent = game.DateTime;
    row.appendChild(dateCell);

    let timeCell = document.createElement('td');
    timeCell.textContent = game.Time;
    row.appendChild(timeCell);

    let gameTimeCell = document.createElement('td');
    gameTimeCell.textContent = game.GameTime;
    row.appendChild(gameTimeCell);

    let winnerCell = document.createElement('td');
    winnerCell.textContent = game.TheWinner;
    row.appendChild(winnerCell);

    tableBody.appendChild(row);
});
