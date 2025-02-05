"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringToBoolean = void 0;
const stringToBoolean = (value) => {
    if (value === undefined) {
        return undefined;
    }
    else if (value === "true") {
        return value.toLowerCase() === "true";
    }
    else {
        return false;
    }
};
exports.stringToBoolean = stringToBoolean;
