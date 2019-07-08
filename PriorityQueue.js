const createQueue = require('./queue');

const createPriorityQueue = () => {
	const highPriorityQueue = createQueue();
	const lowPriorityQueue = createQueue();

	return {
		add(item, isHighPriority = false) {
			isHighPriority ? highPriorityQueue.add(item) : lowPriorityQueue.add(item);
		},
		remove() {
			if (highPriorityQueue.isEmpty()) {
				return highPriorityQueue.remove();
			}
			return lowPriorityQueue.remove();
		},
		peek() {
			if (highPriorityQueue.isEmpty()) {
				return highPriorityQueue[highPriorityQueue.length - 1];
			}
			return lowPriorityQueue[lowPriorityQueue.length - 1];
		},
		length() {
			return highPriorityQueue.length + lowPriorityQueue.length;
		},
		isEmpty() {
			return highPriorityQueue.isEmpty() && lowPriorityQueue.isEmpty();
		}
	};
};
