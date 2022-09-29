"use strict";
exports.__esModule = true;
var Product1 = /** @class */ (function () {
    function Product1() {
        this.parts = [];
    }
    Product1.prototype.listParts = function () {
        console.log("Product parts: " + this.parts.join(", ") + "\n");
    };
    return Product1;
}());
var ConcreteBuilder1 = /** @class */ (function () {
    function ConcreteBuilder1() {
        this.reset();
    }
    ConcreteBuilder1.prototype.reset = function () {
        this.product = new Product1();
    };
    ConcreteBuilder1.prototype.producePartA = function () {
        this.product.parts.push("PartA1");
    };
    ConcreteBuilder1.prototype.producePartB = function () {
        this.product.parts.push("PartB1");
    };
    ConcreteBuilder1.prototype.producePartC = function () {
        this.product.parts.push("PartC1");
    };
    ConcreteBuilder1.prototype.getProduct = function () {
        var result = this.product;
        this.reset();
        return result;
    };
    return ConcreteBuilder1;
}());
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.setBuilder = function (builder) {
        this.builder = builder;
    };
    Director.prototype.buildMinimalViableProduct = function () {
        this.builder.producePartA();
    };
    Director.prototype.buildFullFeaturedProduct = function () {
        this.builder.producePartA();
        this.builder.producePartB();
        this.builder.producePartC();
    };
    return Director;
}());
var clientCode = function (director) {
    var builder = new ConcreteBuilder1();
    director.setBuilder(builder);
    director.buildMinimalViableProduct();
    builder.getProduct().listParts();
    director.buildFullFeaturedProduct();
    builder.getProduct().listParts();
    console.log("Custom product:");
    builder.producePartA();
    builder.producePartC();
    builder.getProduct().listParts();
};
var director = new Director();
clientCode(director);
exports["default"] = {};
