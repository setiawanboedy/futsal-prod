"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ResponseFormatter {
    constructor(status, code, message, data) {
        this.status = status;
        this.code = code;
        this.message = message;
        this.data = data;
    }
    static success(data = null, message = 'Operation successful', code = 200) {
        return {
            status: 'success',
            code,
            message,
            data,
        };
    }
    static error({ data = null, message = 'Operation failed', code = 400 }) {
        return {
            status: 'Error',
            code,
            message,
            data,
        };
    }
}
exports.default = ResponseFormatter;
