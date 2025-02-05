"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const upload = (path_folder) => {
    const storage = multer_1.default.diskStorage({
        destination: (req, file, cb) => {
            const folder = path_folder || 'uploads';
            if (!fs_1.default.existsSync(folder)) {
                fs_1.default.mkdirSync(folder, { recursive: true });
            }
            cb(null, folder);
        },
        filename: (req, file, cb) => {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
            cb(null, uniqueSuffix + path_1.default.extname(file.originalname));
        }
    });
    return (0, multer_1.default)({ storage });
};
exports.upload = upload;
