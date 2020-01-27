function startGame() {
	
	let playerName: string = "Mouni";
	logPlayer(playerName);

	var messagesElement = document.getElementById('messages');
	messagesElement!.innerText = "Welcome to a new game.....";
}

function logPlayer(name) {
	console.log(`New game starting for player: ${name}`);
}

document.getElementById('startGame')!.addEventListener('click', startGame);