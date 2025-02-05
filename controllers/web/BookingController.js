"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ResponseFormatter_1 = __importDefault(require("../../utils/ResponseFormatter"));
const BookingService_1 = __importDefault(require("../../services/web/BookingService"));
class BookingController {
    // =============Web================
    async showBooking(req, res) {
        try {
            const id = parseInt(req.params.id);
            const booking = await BookingService_1.default.showBooking(id);
            const response = ResponseFormatter_1.default.success(booking);
            res.status(200).json(response);
        }
        catch (error) {
            const response = ResponseFormatter_1.default.error({ message: `${error}` });
            res.status(400).json(response);
        }
    }
    async checkWaBooking(req, res) {
        const wa = req.query.wa;
        try {
            const booking = await BookingService_1.default.checkWaBooking(wa);
            const response = ResponseFormatter_1.default.success(booking);
            res.status(200).json(response);
        }
        catch (error) {
            const response = ResponseFormatter_1.default.error({ message: `${error}` });
            res.status(400).json(response);
        }
    }
    async deleteBooking(req, res) {
        try {
            const id = parseInt(req.params.id, 10);
            const booking = await BookingService_1.default.deleteBooking(id);
            const response = ResponseFormatter_1.default.success(booking);
            res.status(200).json(response);
        }
        catch (error) {
            const response = ResponseFormatter_1.default.error({ message: `${error}` });
            res.status(400).json(response);
        }
    }
    async createBooking(req, res) {
        const request = req.body;
        try {
            const isCreated = await BookingService_1.default.createBooking(request);
            const response = ResponseFormatter_1.default.success(isCreated);
            res.status(201).json(response);
        }
        catch (error) {
            const response = ResponseFormatter_1.default.error({ message: `${error}` });
            res.status(400).json(response);
        }
    }
    async getBookings(req, res) {
        const date = req.query.date;
        try {
            const orderItems = await BookingService_1.default.getBookings(date);
            const response = ResponseFormatter_1.default.success(orderItems);
            res.status(200).json(response);
        }
        catch (error) {
            const response = ResponseFormatter_1.default.error({ message: `${error}` });
            res.status(400).json(response);
        }
    }
}
exports.default = new BookingController;
