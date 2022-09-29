"use strict";
/**
 * 代理模式：让你能提供真实服务对象的替代品给客户端使用。 代理接收客户端的请求并进行一些处理 （访问控制和缓存等）， 然后再将请求传递给服务对象
 */
exports.__esModule = true;
var RealSubject = /** @class */ (function () {
    function RealSubject() {
    }
    RealSubject.prototype.request = function () {
        console.log("RealSubject: Handling request.");
    };
    return RealSubject;
}());
var Proxy = /** @class */ (function () {
    function Proxy(realSubject) {
        this.realSubject = realSubject;
    }
    Proxy.prototype.request = function () {
        if (this.checkAccess()) {
            this.realSubject.request();
            this.logAccess();
        }
    };
    Proxy.prototype.checkAccess = function () {
        console.log("Proxy: Checking access prior to firing a real request.");
        return true;
    };
    Proxy.prototype.logAccess = function () {
        console.log("Proxy: Logging the time of request.");
    };
    return Proxy;
}());
function clientCode(subject) {
    subject.request();
}
console.log("Client: Executing the client code with a real subject:");
var realSubject = new RealSubject();
clientCode(realSubject);
console.log("");
console.log("Client: Executing the same client code with a proxy:");
var proxy = new Proxy(realSubject);
clientCode(proxy);
exports["default"] = {};
