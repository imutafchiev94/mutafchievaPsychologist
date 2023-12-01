"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const comingSoonController_1 = __importDefault(require("./controllers/comingSoonController"));
const router = (0, express_1.Router)();
router.use('/comingsoon', comingSoonController_1.default);
exports.default = router;
