"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOrUpdateBookingRequest = void 0;
class CreateOrUpdateBookingRequest {
    constructor(name, price, wa, time, date, isBayar) {
        this.name = name;
        this.price = price;
        this.wa = wa;
        this.time = time;
        this.date = date;
        this.isBayar = isBayar;
    }
    toMap() {
        return {
            name: this.name,
            price: this.price,
            wa: this.wa,
            time: this.time,
            date: this.date,
            isBayar: this.isBayar,
        };
    }
}
exports.CreateOrUpdateBookingRequest = CreateOrUpdateBookingRequest;
