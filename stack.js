//LILO
const createStack = () => {
	const arr = [];
	return {
		//add
		add(item) {
			arr.push(item);
			//push adds item to the end of the array
		},
		//remove
		remove() {
			return arr.pop();
			//remove the last element of the array
		},
		//peek
		peek() {
			return arr[arr.length - 1];
		},
		//length
		get length() {
			return arr.length;
		},
		//isEmpty
		isEmpty() {
			return arr.length === 0;
		}
	};
};
