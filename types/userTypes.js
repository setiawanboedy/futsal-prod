"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertRoleToEnum = exports.UserRole = void 0;
var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "ADMIN";
    UserRole["TENANT"] = "TENANT";
    UserRole["USER"] = "USER";
})(UserRole || (exports.UserRole = UserRole = {}));
const convertRoleToEnum = (role) => {
    switch (role.toUpperCase()) {
        case 'USER':
            return UserRole.USER;
        case 'TENANT':
            return UserRole.TENANT;
        case 'ADMIN':
            return UserRole.ADMIN;
        default:
            return UserRole.USER;
    }
};
exports.convertRoleToEnum = convertRoleToEnum;
