"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var App = /** @class */ (function () {
    function App() {
        this.app = express_1.default();
        this.initialise();
    }
    App.prototype.initialise = function () {
        this.ports = process.env.PORT || 3000;
        this.app.get('/', function (req, res) {
            res.send('its working');
        });
    };
    App.prototype.listen = function () {
        var _this = this;
        this.app.listen(this.ports, function () { return console.log('server run at port ' + _this.ports); });
    };
    return App;
}());
exports.App = App;
