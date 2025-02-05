"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingResponse = void 0;
class BookingResponse {
    constructor(id, name, price, wa, time, date, isBayar, createdAt, updatedAt) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.wa = wa;
        this.time = time;
        this.date = date;
        this.isBayar = isBayar;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}
exports.BookingResponse = BookingResponse;
