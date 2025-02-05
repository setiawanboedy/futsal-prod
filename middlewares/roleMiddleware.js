"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roleMiddleware = void 0;
const roleMiddleware = (requireRole) => {
    return (req, res, next) => {
        const user = res.locals.user;
        if (!user) {
            res.status(401).json({ message: "Unauthorized" });
            return;
        }
        if (user.role !== requireRole.toUpperCase()) {
            res.status(403).json({ message: "Forbidden: Insufficient role" });
            return;
        }
        next();
    };
};
exports.roleMiddleware = roleMiddleware;
