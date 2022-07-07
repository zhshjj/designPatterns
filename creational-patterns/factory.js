const dom = {
	create: function (type, url) {
		return new this.types[type]();
	},
	types: {
		text: function () {
			let text = "";
			this.setText = function (text) {
				this.text = text;
				return this;
			};
			this.getText = function () {
				console.log("text: " + this.text);
				return this;
			};
		},
		img: function () {
			let img = "";
			this.setText = function (img) {
				this.img = img;
				return this;
			};
			this.getText = function () {
				console.log("img: " + this.img);
				return this;
			};
		},
	},
};

dom.create("text").setText("this is a text").getText();
dom.create("img").setText("this is a img").getText();
