const myTest = [1, 2, 4, 6, 7, 9, null, NaN, 'mum', 15];
function countZeroEvenOdd (test) {
	let evenCount = 0;
	let oddCount = 0;
	let zeroCount = 0;

	for ( let i = 0; i < test.length; i++ ) {
		if (typeof test[i] === 'number' && !isNaN(test[i])) {
			if (test[i] === 0) {
				zeroCount ++;
			}
			else if (test[i] % 2 === 0) {
				evenCount ++;
			} else {
				oddCount ++;
			}
			} 
		}
		console.log('количество четных элементов: ' + evenCount);
		console.log('количество нечетных элементов: ' + oddCount);
		console.log("количество нуливых элементов: " + zeroCount);
	}



countZeroEvenOdd(myTest);
