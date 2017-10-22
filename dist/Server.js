"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
class Server {
    static SetMiddleWare(app) {
        // app.use(this.logger);
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: false }));
    }
    static RunServer() {
        const app = express();
        this.SetMiddleWare(app);
        fs.readdirSync('./dist/Controllers').forEach(function (file) {
            if (file.substr(-3) === '.js') {
                let route = require('./Controllers/' + file);
                route.controller(app);
            }
        });
        // app.get('/', TestController.getAllUser);
        app.listen(3000, () => {
            console.log('Server Started on port 3000 ... ');
        });
    }
}
Server.logger = function (req, res, next) {
    console.log('Loggin ...');
    next();
};
Server.RunServer();
//# sourceMappingURL=Server.js.map