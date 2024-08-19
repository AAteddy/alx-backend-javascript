console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('readable', () => {
	const input_data = process.stdin.read();
	if (input_data !== null) {
		process.stdout.write(`Your name is: ${input_data}`);
	}
});

process.stdin.on('end', () => {
	console.log('This important software is now closing');
});
