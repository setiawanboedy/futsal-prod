"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AuthService_1 = __importDefault(require("../services/AuthService"));
const ResponseFormatter_1 = __importDefault(require("../utils/ResponseFormatter"));
class AuthController {
    async register(req, res) {
        const request = req.body;
        try {
            const user = await AuthService_1.default.createUser(request);
            const response = ResponseFormatter_1.default.success(user);
            res.status(201).json(response);
        }
        catch (error) {
            const response = ResponseFormatter_1.default.error({ message: `${error}` });
            res.status(400).json(response);
        }
    }
    async login(req, res) {
        const request = req.body;
        try {
            const token = await AuthService_1.default.login(request);
            const response = ResponseFormatter_1.default.success(token);
            res.status(200).json(response);
        }
        catch (error) {
            const response = ResponseFormatter_1.default.error({ message: `${error}` });
            res.status(400).json(response);
        }
    }
}
exports.default = new AuthController;
