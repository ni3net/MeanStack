'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
// export const getAllUser = (request: Request, response: Response, next: NextFunction) => {
//     var test = ['nitin', 'rakesh', 'rakesh', 'gunnu', 'gunnu1'];
//     return response.send(test);
// };
module.exports.controller = function (app) {
    /**
     * a home page route
     */
    app.get('/getAllUser', (request, response, next) => {
        var test = ['nitin', 'rakesh', 'rakesh', 'gunnu', 'gunnu1', 'gunnu1'];
        return response.send(test);
    });
};
//# sourceMappingURL=TestController.js.map