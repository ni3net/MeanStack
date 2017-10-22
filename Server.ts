import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as path from 'path';
import { NextFunction, RequestHandler } from 'express-serve-static-core';
import * as fs from 'fs';

import * as TestController from './Controllers/TestController';
class Server {
    static logger: any = function (req: Request, res: Response, next: NextFunction): void {
        console.log('Loggin ...');
        next();
    };
    static SetMiddleWare(app: any): void {
        // app.use(this.logger);
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: false }));
    }

    static RunServer(): void {
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
Server.RunServer();