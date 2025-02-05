"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const BookingController_1 = __importDefault(require("../../controllers/web/BookingController"));
const router = (0, express_1.Router)();
/**
 * @swagger
 * /api/booking/all:
 *   get:
 *     summary: Retrieve a list of bookings
 *     tags:
 *       - Booking
 *     parameters:
 *       - in: query
 *         name: date
 *         schema:
 *           type: string
 *           format: date
 *         required: false
 *         description: The date to filter bookings
 *     responses:
 *       200:
 *         description: A list of bookings
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: The booking ID
 *                   date:
 *                     type: string
 *                     description: The date of the booking
 *                   time:
 *                     type: string
 *                     description: The time of the booking
 *                   user:
 *                     type: string
 *                     description: The user who made the booking
 */
router.get("/all", BookingController_1.default.getBookings);
/**
 * @swagger
 * /api/booking/create:
 *   post:
 *     summary: Create a new booking
 *     tags:
 *       - Booking
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the booking
 *               price:
 *                 type: number
 *                 description: The price of the booking
 *               wa:
 *                 type: string
 *                 description: The WhatsApp number of the user
 *               time:
 *                 type: number
 *                 description: The time of the booking
 *               date:
 *                 type: string
 *                 format: date
 *                 description: The date of the booking
 *               isBayar:
 *                 type: boolean
 *                 description: Payment status of the booking
 *     responses:
 *       201:
 *         description: Booking created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: The booking ID
 *                 name:
 *                   type: string
 *                   description: The name of the booking
 *                 price:
 *                   type: number
 *                   description: The price of the booking
 *                 wa:
 *                   type: string
 *                   description: The WhatsApp number of the user
 *                 time:
 *                   type: number
 *                   description: The time of the booking
 *                 date:
 *                   type: string
 *                   format: date
 *                   description: The date of the booking
 *                 isBayar:
 *                   type: boolean
 *                   description: Payment status of the booking
 *       400:
 *         description: Invalid input
 */
router.post("/create", BookingController_1.default.createBooking);
/**
 * @swagger
 * /api/booking/show/{id}:
 *   get:
 *     summary: Retrieve a single booking by ID
 *     tags:
 *       - Booking
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The booking ID
 *     responses:
 *       200:
 *         description: A single booking
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: The booking ID
 *                 name:
 *                   type: string
 *                   description: The name of the booking
 *                 price:
 *                   type: number
 *                   description: The price of the booking
 *                 wa:
 *                   type: string
 *                   description: The WhatsApp number of the user
 *                 time:
 *                   type: number
 *                   description: The time of the booking
 *                 date:
 *                   type: string
 *                   format: date
 *                   description: The date of the booking
 *                 isBayar:
 *                   type: boolean
 *                   description: Payment status of the booking
 *       404:
 *         description: Booking not found
 */
router.get("/show/:id", BookingController_1.default.showBooking);
/**
 * @swagger
 * /api/booking/check:
 *   get:
 *     summary: Check booking by WhatsApp number
 *     tags:
 *       - Booking
 *     parameters:
 *       - in: query
 *         name: wa
 *         schema:
 *           type: string
 *         required: true
 *         description: The WhatsApp number to check booking
 *     responses:
 *       200:
 *         description: Booking details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: The booking ID
 *                 name:
 *                   type: string
 *                   description: The name of the booking
 *                 price:
 *                   type: number
 *                   description: The price of the booking
 *                 wa:
 *                   type: string
 *                   description: The WhatsApp number of the user
 *                 time:
 *                   type: number
 *                   description: The time of the booking
 *                 date:
 *                   type: string
 *                   format: date
 *                   description: The date of the booking
 *                 isBayar:
 *                   type: boolean
 *                   description: Payment status of the booking
 *       404:
 *         description: Booking not found
 */
router.get("/check", BookingController_1.default.checkWaBooking);
/**
 * @swagger
 * /api/booking/delete/{id}:
 *   delete:
 *     summary: Delete a booking by ID
 *     tags:
 *       - Booking
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The booking ID
 *     responses:
 *       200:
 *         description: Booking deleted successfully
 *       404:
 *         description: Booking not found
 */
router.delete("/delete/:id", BookingController_1.default.deleteBooking);
exports.default = router;
