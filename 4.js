function arrNumbers(start, end) {
	let currentNumber = start;
   const intervalId = setInterval(function() {
		console.log(currentNumber);

		if (currentNumber === end) {
			clearInterval(intervalId);
		}
			currentNumber ++;
		}, 1000);
	}

	arrNumbers(5, 15);
