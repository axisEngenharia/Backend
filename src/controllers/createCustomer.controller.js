"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCustomer = void 0;
const createCustomer_service_1 = require("../services/createCustomer.service");
class createCustomer {
    handle(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, tel, message } = request.body;
            const customersService = new createCustomer_service_1.createCustomersService();
            const customer = yield customersService.execute({ name, email, tel, message });
            reply.send(customer);
        });
    }
}
exports.createCustomer = createCustomer;
