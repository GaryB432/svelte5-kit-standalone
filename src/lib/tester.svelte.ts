import { browser } from '$app/environment';

const localStorageValue = browser && window.localStorage.getItem('letters');

// -----------------
// seems to cause empty hyrdate_nodes array
let letters = $state<string[]>(localStorageValue ? JSON.parse(localStorageValue) : []);

// A L S O   T R I E D   T H I S
// let letters = $state<string[]>([]);
// const parsedls = JSON.parse(localStorageValue);
// console.log('ready for', parsedls);
// letters = JSON.parse(localStorageValue);
// console.log('made it this far', letters);

// just skipping local storage initializing    s e e m s   t o  w o r k !
// let letters = $state<string[]>(['A', 'B']);
// -----------------

let counter = 65;

export function createLetters() {
	return {
		get letters() {
			return letters;
		},
		addNext: () => {
			if (counter > 65 + 25) {
				throw new Error('too much');
			}
			letters = [...letters, String.fromCharCode(counter++)];
		},
		reverse: () => {
			letters = letters.slice().reverse();
		},
		save: () => {
			window.localStorage.setItem('letters', JSON.stringify(letters));
		}
	};
}
