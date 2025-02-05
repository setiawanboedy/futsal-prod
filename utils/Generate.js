"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Generate {
    constructor() {
        this.generateCode = () => {
            const now = new Date();
            // Format tanggal menjadi YYYYMMDD
            const formattedDate = now.getFullYear().toString() +
                (now.getMonth() + 1).toString().padStart(2, "0") +
                now.getDate().toString().padStart(2, "0");
            // Format waktu menjadi HHMMSS
            const formattedTime = now.getHours().toString().padStart(2, "0") +
                now.getMinutes().toString().padStart(2, "0") +
                now.getSeconds().toString().padStart(2, "0");
            const code = `${formattedDate}${formattedTime}`;
            return code;
        };
    }
}
exports.default = new Generate();
