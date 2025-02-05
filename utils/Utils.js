"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Utils {
    convertMonthToIndonesian(month) {
        const [year, monthNumber] = month.split("-");
        const date = new Date(parseInt(year), parseInt(monthNumber) - 1);
        return new Intl.DateTimeFormat("id-ID", { month: "long" }).format(date);
    }
    generateFullYearMonths(year) {
        const months = [];
        for (let i = 0; i < 12; i++) {
            const month = (i + 1).toString().padStart(2, '0');
            months.push(`${year}-${month}`);
        }
        return months;
    }
}
exports.default = new Utils();
