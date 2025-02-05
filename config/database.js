"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const path_1 = __importDefault(require("path"));
const typeorm_1 = require("typeorm");
const isDevelopment = process.env.NODE_ENV !== 'production';
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'mysql',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 3306,
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'futsal',
    synchronize: true,
    logging: false,
    timezone: '+08:00',
    entities: [
        path_1.default.join(__dirname, '../models/*.js'),
        path_1.default.join(__dirname, '..//models/*.ts')
    ],
    migrations: [
        isDevelopment
            ? path_1.default.join(__dirname, '../migrations/*.ts')
            : path_1.default.join(__dirname, '../migrations/*.js')
    ],
    subscribers: [],
});
