"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ResponseFormatter_1 = __importDefault(require("../utils/ResponseFormatter"));
const UserService_1 = __importDefault(require("../services/UserService"));
class UserController {
    async currentUser(req, res) {
        try {
            const userId = res.locals.user?.id;
            const user = await UserService_1.default.currentUser(userId);
            const response = ResponseFormatter_1.default.success(user);
            res.status(200).json(response);
        }
        catch (error) {
            const response = ResponseFormatter_1.default.error({ message: `${error}` });
            res.status(400).json(response);
        }
    }
    async getUsers(req, res) {
        try {
            const user = await UserService_1.default.getUsers();
            const response = ResponseFormatter_1.default.success(user);
            res.status(200).json(response);
        }
        catch (error) {
            const response = ResponseFormatter_1.default.error({ message: `${error}` });
            res.status(400).json(response);
        }
    }
}
exports.default = new UserController;
