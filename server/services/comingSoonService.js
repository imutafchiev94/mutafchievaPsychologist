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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mailConfig_1 = __importDefault(require("../config/mailConfig"));
require("dotenv/config");
function sendEmail(request) {
    return __awaiter(this, void 0, void 0, function* () {
        const expression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const validate = expression.test(request.email);
        if (!validate) {
            return { Message: 'Моля дайте валиден email.' };
        }
        if (!request.security) {
            const info = yield mailConfig_1.default.sendMail({
                from: `${request.firstName} ${request.lastName} ${process.env.MAIL_USERNAME}`,
                to: 'ivet_mutafchieva@mutafchievapsychologist.bg',
                subject: `Съобщение от ${request.firstName} ${request.lastName}`,
                text: `${request.message}


            Можете да ме откриете на emeil: ${request.email}`
            });
            return { Message: 'Съобщението Ви е изпратено успешно!' };
        }
        else {
            return { Message: 'No spam bots!' };
        }
    });
}
exports.default = sendEmail;
