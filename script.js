function super() {
    let canvas = document.getElementById('field')
    let context = canvas.getContext('2d')
    const canvasWidth = 300
    const cellWidth = canvasWidth / 3
    let firstWin = 0
    let secondWin = 0
    let roundPlayer = ['первый', 'второй']
    let xPos = 0
    let yPos = 0
    let winner = 'первый'
    document.getElementById('first').innerText = 'Первый игрок: ' + firstWin
    document.getElementById('second').innerText = 'Второй игрок: ' + secondWin
