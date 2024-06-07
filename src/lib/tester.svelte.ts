import { browser } from '$app/environment';

const localStorageValue = browser && window.localStorage.getItem('letters');

let letters = $state<string[]>(localStorageValue ? JSON.parse(localStorageValue) : []);
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
