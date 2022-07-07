const singleton = (function () {
	let instance;
	function createInstance() {
		console.log("instance");
	}

	const getInstance = () => {
		if (!instance) {
			return new createInstance();
		}
		return instance;
	};

	return {
		getInstance,
	};
})();

const s = singleton.getInstance();
