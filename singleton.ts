/**
 * 单例模式（同时解决了两个问题，所以违反了单一职责原则）
 * 1.保证一个类只有一个实例
 * 2.为该实例提供一个全局访问节点
 */
class Singleton {
	private static instance: Singleton;
	public static getInstance() {
		if (!Singleton.instance) {
			this.instance = new Singleton();
		}

		return this.instance;
	}
}

const s1 = Singleton.getInstance();
const s2 = Singleton.getInstance();

console.log(s1 === s2); // true
