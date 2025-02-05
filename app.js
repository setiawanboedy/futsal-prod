"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const database_1 = require("./config/database");
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const bookingWebRoutes_1 = __importDefault(require("./routes/web/bookingWebRoutes"));
const indexWebRoutes_1 = __importDefault(require("./routes/web/indexWebRoutes"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swaggerConfig_1 = __importDefault(require("./config/swaggerConfig"));
const app = (0, express_1.default)();
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerConfig_1.default));
const corsOptions = {
    origin: ['http://localhost:3000', 'http://localhost:3001'],
    methods: ['*'],
    allowedHeaders: ['*'],
};
app.use((0, cors_1.default)());
// app.options('*', cors(corsOptions));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// init koneksi database
database_1.AppDataSource.initialize().then(() => {
    console.log('Database connection estabilished');
}).catch((error) => {
    console.log('Database connection error: ', error);
});
app.use("/", indexWebRoutes_1.default);
// Auth
app.use("/api/auth", authRoutes_1.default);
app.use("/api/user", userRoutes_1.default);
// WEB
app.use("/api/booking", bookingWebRoutes_1.default);
// image static url
app.use('/uploads', express_1.default.static(path_1.default.join(__dirname, '../uploads')));
exports.default = app;
