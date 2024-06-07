import { browser } from '$app/environment';

let localStorageValue = browser && window.localStorage.getItem('letters');

if (!localStorageValue) {
	localStorageValue = '[]';
}

// -----------------
// tried this
// let letters = $state<string[]>(JSON.parse(localStorageValue));

// how about this?
let letters = $state<string[]>([]);
const parsedls = JSON.parse(localStorageValue);
console.log('ready for', parsedls);
letters = JSON.parse(localStorageValue);

// just skipping local storage initializing
// let letters = $state<string[]>([]);
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
