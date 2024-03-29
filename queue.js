//FIFO

const createQueue = () => {
	const queue = [];
	return {
		//Add
		add(item) {
			queue.unshift(item);
			//add item to the beginning of an array.
		},
		//remove
		remove() {
			return queue.pop();
		},
		//peek
		peek() {
			return queue[queue.length - 1];
		},
		//length
		get length() {
			return queue.length;
		},
		//isEmpty
		isEmpty() {
			return queue.length === 0;
		}
	};
};

const taskQueue = createQueue();

taskQueue.add('hello barbra');
taskQueue.add('test test');

console.log(taskQueue.peek());
taskQueue.remove();
console.log(taskQueue.peek());

module.export = createQueue;
