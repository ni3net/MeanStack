'use strict';
import { Request, Response, NextFunction } from 'express';

// export const getAllUser = (request: Request, response: Response, next: NextFunction) => {
//     var test = ['nitin', 'rakesh', 'rakesh', 'gunnu', 'gunnu1'];
//     return response.send(test);
// };

module.exports.controller = function (app: any) {

    /**
     * a home page route
     */
    app.get('/getAllUser', (request: Request, response: Response, next: NextFunction) => {
        var test = ['nitin', 'rakesh', 'rakesh', 'gunnu', 'gunnu1', 'gunnu1'];
        return response.send(test);
    });
};