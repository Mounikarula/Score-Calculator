function startGame() {
	
	let playerName: string | undefined = getInputValue('playername');
	logPlayer(playerName);

	postScore(80, playerName);
	postScore(-5, playerName);
	}

function logPlayer(name: string = "Mouni"): void {
	console.log(`New game starting for player: ${name}`);
}

function getInputValue(elementId: string): string | undefined {
	const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementId);

	if(inputElement.value === "") {
		return undefined;
	}
	else {
		return inputElement.value;
	}
}

function postScore(score: number, playerName: string = "Mouni"): void {
	let logger: (value: string) => void;
	if(score < 0) {
		logger = logError; 
	}
	else {
		logger = logMessages;
	}

	const scoreElement: HTMLElement | null = document.getElementById('postedScores');
	scoreElement!.innerText = `${score} - ${playerName}`;

	logger(`Score: ${score}`);
}

document.getElementById('startGame')!.addEventListener('click', startGame);
const logMessages = (messages: string) => console.log(messages);

const logError = (err: string): void => console.log(err);
