"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusEnum = exports.TypeEnum = void 0;
var TypeEnum;
(function (TypeEnum) {
    TypeEnum["ITEM"] = "Item";
    TypeEnum["KG"] = "Kg";
})(TypeEnum || (exports.TypeEnum = TypeEnum = {}));
var StatusEnum;
(function (StatusEnum) {
    StatusEnum["CREATED"] = "CREATED";
    StatusEnum["RECEIVED"] = "RECEIVED";
    StatusEnum["PICKEDUP"] = "PICKEDUP";
    StatusEnum["WAITING"] = "WAITING";
    StatusEnum["LAUNDRY"] = "LAUNDRY";
    StatusEnum["DRAYING"] = "DRYING";
    StatusEnum["IRON"] = "IRON";
    StatusEnum["TAKEN"] = "TAKEN";
    StatusEnum["DELIVERED"] = "DELIVERED";
    StatusEnum["COMPLETED"] = "COMPLETED";
    StatusEnum["CANCEL"] = "CANCEL";
})(StatusEnum || (exports.StatusEnum = StatusEnum = {}));
