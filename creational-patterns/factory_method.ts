/**
 * 工厂模式
 */

interface Product {
	operation(): string;
}

abstract class Creator {
	public abstract factoryMethod(): Product;

	public someOperation(): string {
		const product = this.factoryMethod();
		return product.operation();
	}
}

class ConcreteProduct1 implements Product {
	public operation(): string {
		return "ConcreteProduct1";
	}
}

class ConcreteProduct2 implements Product {
	public operation(): string {
		return "ConcreteProduct2";
	}
}

class ConcreteCreator1 extends Creator {
	public factoryMethod(): Product {
		return new ConcreteProduct1();
	}
}

class ConcreteCreator2 extends Creator {
	public factoryMethod(): Product {
		return new ConcreteProduct2();
	}
}

const clientCode = (creator: Creator) => {
	console.log(creator.someOperation());
};
clientCode(new ConcreteCreator1());
clientCode(new ConcreteCreator2());
