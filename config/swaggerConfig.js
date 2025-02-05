"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const isDevelopment = process.env.NODE_ENV !== 'production';
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Futsal API',
            version: '1.0.0',
            description: 'API documentation for Futsal project',
        },
        servers: [
            {
                url: isDevelopment ? 'http://localhost:8080' : 'https://futsal.authenticrinjani.com',
            },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
        },
        security: [
            {
                bearerAuth: [],
            },
        ],
    },
    apis: [isDevelopment ? './src/routes/**/*.ts' : './routes/**/*.js'], // Path ke file routes
};
const swaggerSpec = (0, swagger_jsdoc_1.default)(options);
const outputPath = path_1.default.resolve(__dirname, '../../swagger-output.json');
fs_1.default.writeFileSync(outputPath, JSON.stringify(swaggerSpec, null, 2), 'utf-8');
console.log(`Swagger JSON file generated at: ${outputPath}`);
exports.default = swaggerSpec;
