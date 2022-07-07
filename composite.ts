/**
 * 组合模式：它可以将对象组合成树状结构，并且能像使用独立对象一样使用它们
 */
abstract class Component {
	protected parent!: Component | null;
	public setParent(parent: Component | null): void {
		this.parent = parent;
	}
	public getParent(): Component | null {
		return this.parent;
	}
	public add(component: Component): void {}
	public remove(component: Component): void {}
	public isComposite(): boolean {
		return false;
	}
	public abstract operation(): string;
}

class Leaf extends Component {
	public operation(): string {
		return "leaf";
	}
}

class Composite extends Component {
	protected children: Component[] = [];

	public add(component: Component): void {
		this.children.push(component);
		component.setParent(this);
	}

	public remove(component: Component): void {
		const index = this.children.indexOf(component);
		this.children.splice(index, 1);
		component.setParent(null);
	}

	public isComposite(): boolean {
		return true;
	}

	public operation(): string {
		let results: string[] = [];
		for (const child of this.children) {
			results.push(child.operation());
		}
		return `Branch(${results.join("+")})`;
	}
}

export default {};

function clientCode(component: Component) {
	console.log(`RESULT: ${component.operation()}`);
}

const tree = new Composite();
const branch1 = new Composite();
branch1.add(new Leaf());
branch1.add(new Leaf());
const branch2 = new Composite();
branch2.add(new Leaf());
branch2.add(new Leaf());
tree.add(branch1);
tree.add(branch2);
clientCode(tree);
