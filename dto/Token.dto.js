"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Token {
    constructor(token, expiresIn, role) {
        this.token = token;
        this.expiresIn = expiresIn;
        this.role = role;
    }
}
exports.default = Token;
