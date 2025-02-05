"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../models/User");
const database_1 = require("../config/database");
const UserResponse_dto_1 = require("../dto/response/UserResponse.dto");
const userRepository = database_1.AppDataSource.getRepository(User_1.User);
class UserService {
    async currentUser(id) {
        const user = await userRepository.findOne({ where: { id: id } });
        if (!user) {
            throw new Error("User not found");
        }
        const userRes = new UserResponse_dto_1.UserResponse(user.id, user.name, user.email, user.role);
        return userRes;
    }
    async getUsers() {
        const users = await userRepository.find();
        const responses = users.map((user) => new UserResponse_dto_1.UserResponse(user.id, user.name, user.email, user.role));
        return responses;
    }
}
exports.default = new UserService;
