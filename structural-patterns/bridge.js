/**
 * 桥接模式
 */
function Toast(node, animation) {
	this.node = node;
	this.animation = animation;
}

Toast.prototype.show = function () {
	this.animation.show(this.node);
};

Toast.prototype.hide = function () {
	this.animation.hide(this.node);
};

function Message(node, animation) {
	this.node = node;
	this.animation = animation;
}

Message.prototype.show = function () {
	this.animation.show(this.node);
};

Message.prototype.hide = function () {
	this.animation.hide(this.node);
};

const Animations = {
	bounce: {
		show: function (node) {
			console.log(node + "弹跳出现");
		},
		hide: function (node) {
			console.log(node + "弹跳隐藏");
		},
	},
	slide: {
		show: function (node) {
			console.log(node + "滑动出现");
		},
		hide: function (node) {
			console.log(node + "滑动隐藏");
		},
	},
};

const toast1 = new Toast("元素a", Animations.slide);
toast.show();
toast.hide();
const toast2 = new Toast("元素a", Animations.slide);
toast.show();
toast.hide();
const message = new Message("元素b", Animations.bounce);
message.show();
message.hide();
