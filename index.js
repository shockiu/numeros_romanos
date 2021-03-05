let multipleNumbers = [2900, 1700, 2490, 25];
let numbers = 3999;

const rules = [ 
		{ 'i': 'I', 'ii': 'V', 'iii': 'X' },
		{ 'i': 'X', 'ii': 'L', 'iii': 'C' },
		{ 'i': 'C', 'ii': 'D', 'iii': 'M' },
		{ 'i': 'M'}
];


function convertNumbersToRoman(number) {

	let result = '';
	let roman = [];
	
	if( number.length > 1 ) {

		let str = ''; 

		for ( let i = 0; i < number.length; i++  ) {

			str = number[i].toString();
			let index = str.length - 1;
			result = '';

			for ( let d = 0; d < str.length; d++ ) {
				
				result = `${result}${writeNumber( str[d], index )}`;
				index--;
			}

			roman.push(result);
		
		}	

	} else {
		
		number = number.toString();
		let index = number.length - 1;
		result = '';

		for ( let i = 0; i < number.length; i++  ) {
		
			result = `${result}${writeNumber( number[i], index )}`;

			index--;
		
		}	

		roman = result;
	}

	

	return roman;
}


function writeNumber( number, index ) {

	let search = 0;
	let figure = '';

	number = parseInt(number);

	if( number === 4 ) {
	
		search = rules[index];
		figure = `${search.i}${search.ii}`;

	} else if (number === 5) {

		search = rules[index];
		figure = `${search.ii}`;

	} else if (number === 9) {

		search = rules[index];
		figure = `${search.i}${search.iii}`;

	} else if( number > 5  && number < 9) {

		search = rules[index];
		figure = `${search.ii}`;

		for ( let c = 1; c <= number - 5; c++ ) {

			figure = `${figure}${search.i}`;
		}

	} else if( number !== 0) {

		search = rules[index];

		for ( let c = 1; c <= number; c++ ) {

			figure = `${figure}${search.i}`;
		}
	}

	return figure;

}

console.log(convertNumbersToRoman(numbers));
