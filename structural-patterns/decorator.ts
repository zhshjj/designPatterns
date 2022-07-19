/**
 * 装饰模式：允许你通过将对象放入包含行为的特殊封装对象中来为原对象绑定新的行为
 */

interface Component {
	operation(): string;
}

class ConcreteComponent implements Component {
	public operation(): string {
		return "ConcreteComponent";
	}
}

class Decotator implements Component {
	protected component: Component;

	constructor(component: Component) {
		this.component = component;
	}

	public operation(): string {
		return this.component.operation();
	}
}

class ConcreteDecoratorA extends Decotator {
	public operation(): string {
		return `ConcreteDecoratorA(${super.operation()})`;
	}
}

class ConcreteDecoratorB extends Decotator {
	public operation(): string {
		return `ConcreteDecoratorB(${super.operation()})`;
	}
}

function clientCode(component: Component) {
	console.log(`RESULT: ${component.operation()}`);
}

const simple = new ConcreteComponent();
console.log("Client: I've got a simple component:");
clientCode(simple);
console.log("");

const decorator1 = new ConcreteDecoratorA(simple);
const decorator2 = new ConcreteDecoratorB(decorator1);
console.log("Client: Now I've got a decorated component:");
clientCode(decorator2);

export default {};
