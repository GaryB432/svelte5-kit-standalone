let letters = $state<string[]>([]);
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
		}
	};
}
