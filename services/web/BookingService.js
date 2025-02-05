"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Booking_1 = require("../../models/Booking");
const database_1 = require("../../config/database");
const bookingRepository = database_1.AppDataSource.getRepository(Booking_1.Booking);
class BookingService {
    // =================WEB====================
    async getBookings(date) {
        let whereClause = {};
        if (date) {
            const dateConvert = new Date(date).toISOString().split("T")[0];
            whereClause = { date: dateConvert };
        }
        const bookings = await bookingRepository.find({
            where: whereClause,
            order: { createdAt: "DESC" },
        });
        const response = bookings.map((booking) => ({
            id: booking.id,
            name: booking.name,
            time: booking.time,
            wa: booking.wa,
            date: booking.date,
            isBayar: booking.isBayar,
            price: booking.price,
            createdAt: booking.createdAt,
            updatedAt: booking.updatedAt,
        }));
        return response;
    }
    async showBooking(id) {
        const booking = await bookingRepository.findOne({
            where: { id: id },
        });
        if (!booking) {
            throw new Error("Booking nod found");
        }
        const response = {
            id: booking.id,
            name: booking.name,
            time: booking.time,
            wa: booking.wa,
            date: booking.date,
            isBayar: booking.isBayar,
            price: booking.price,
            createdAt: booking.createdAt,
            updatedAt: booking.updatedAt,
        };
        return response;
    }
    async checkWaBooking(wa) {
        const booking = await bookingRepository.findOne({
            where: { wa: wa },
        });
        if (!booking) {
            throw new Error("Booking nod found");
        }
        const response = {
            id: booking.id,
            name: booking.name,
            time: booking.time,
            wa: booking.wa,
            date: booking.date,
            isBayar: booking.isBayar,
            price: booking.price,
            createdAt: booking.createdAt,
            updatedAt: booking.updatedAt,
        };
        return response;
    }
    async deleteBooking(id) {
        const booking = await bookingRepository.findOne({
            where: { id: id },
        });
        if (!booking) {
            throw new Error("Booking nod found");
        }
        try {
            const isDelete = await bookingRepository.delete(id);
            return isDelete.affected ? true : false;
        }
        catch (error) {
            throw error;
        }
    }
    async createBooking(request) {
        try {
            const currentDate = new Date().toISOString().split("T")[0];
            if (request.date < currentDate) {
                throw new Error("Booking date cannot be before the current date");
            }
            const createBooking = bookingRepository.create({
                name: request.name,
                time: request.time,
                wa: request.wa,
                date: request.date,
                isBayar: request.isBayar,
                price: request.price,
            });
            await bookingRepository.save(createBooking);
            return true;
        }
        catch (error) {
            throw error;
        }
    }
}
exports.default = new BookingService();
