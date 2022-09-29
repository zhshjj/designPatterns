/**
 * 原型模式（能够复制已有对象， 而又无需使代码依赖它们所属的类。）
 *
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var ComponentWithBackReference = /** @class */ (function () {
    function ComponentWithBackReference(prototype) {
        this.prototype = prototype;
    }
    return ComponentWithBackReference;
}());
var Prototype = /** @class */ (function () {
    function Prototype() {
    }
    Prototype.prototype.clone = function () {
        var clone = Object.create(Prototype);
        clone.component = Object.create(this.component);
        clone.circularReference = __assign(__assign({}, this.circularReference), { prototype: __assign({}, this) });
        return clone;
    };
    return Prototype;
}());
var p1 = new Prototype();
p1.primitive = 200;
p1.component = new Date();
p1.circularReference = new ComponentWithBackReference(p1);
var p2 = p1.clone();
console.log(p1.primitive === p2.primitive);
console.log(p1.component === p2.component);
console.log(p1.circularReference === p2.circularReference);
