/**
 * 原型模式（能够复制已有对象， 而又无需使代码依赖它们所属的类。）
 *
 */

class ComponentWithBackReference {
	public prototype;

	constructor(prototype: Prototype) {
		this.prototype = prototype;
	}
}

class Prototype {
	public primitive: any;
	public component: Object;
	public circularReference: ComponentWithBackReference;

	public clone(): Prototype {
		const clone = Object.create(Prototype);
		clone.component = Object.create(this.component);
		clone.circularReference = {
			...this.circularReference,
			prototype: { ...this },
		};
		return clone;
	}
}

const p1 = new Prototype();
p1.primitive = 200;
p1.component = new Date();
p1.circularReference = new ComponentWithBackReference(p1);

const p2 = p1.clone();

console.log(p1.primitive === p2.primitive);
console.log(p1.component === p2.component);
console.log(p1.circularReference === p2.circularReference);
