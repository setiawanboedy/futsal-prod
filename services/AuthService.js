"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../models/User");
const database_1 = require("../config/database");
const Token_dto_1 = __importDefault(require("../dto/Token.dto"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
const Profile_1 = require("../models/Profile");
dotenv_1.default.config();
const JWT_SECRET = process.env.JWT_SECRET || 'palestina_merdeka';
const userRepository = database_1.AppDataSource.getRepository(User_1.User);
const profileRepository = database_1.AppDataSource.getRepository(Profile_1.Profile);
class AuthService {
    async login(request) {
        const user = await userRepository.findOneBy({ email: request.email });
        if (!user) {
            throw new Error("Invalid email or password");
        }
        const isValidPassword = await bcrypt_1.default.compare(request.password, user.password);
        if (!isValidPassword) {
            throw new Error("Invalid email or password");
        }
        const expreToken = new Date(Date.now() + (60 * 60 * 1000 * 24) * 3).toISOString();
        const token = jsonwebtoken_1.default.sign({ id: user.id, email: user.email, role: user.role }, JWT_SECRET, { expiresIn: '12h' });
        return new Token_dto_1.default(token, expreToken, user.role);
    }
    async createUser(request) {
        const user = await userRepository.findOneBy({ email: request.email });
        if (user) {
            throw new Error("User already exists");
        }
        try {
            const hashedPassword = await bcrypt_1.default.hash(request.password, 10);
            const newProfile = profileRepository.create({ address: null, hp: null, lat: null, lng: null });
            const newUser = userRepository.create({ name: request.name, email: request.email, password: hashedPassword });
            await userRepository.save(newUser);
            return true;
        }
        catch (error) {
            throw new Error(`${error}`);
        }
    }
}
exports.default = new AuthService;
