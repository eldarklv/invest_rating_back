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
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const userRouter_1 = __importDefault(require("./userRouter"));
const app = (0, express_1.default)();
const port = 3000;
const DB_URL = 'mongodb+srv://admin:admin@cluster0.6au3jzx.mongodb.net/invest-rating?retryWrites=true&w=majority';
app.use(express_1.default.json());
app.use('/users', userRouter_1.default);
function startApp() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield mongoose_1.default.connect(DB_URL);
            app.listen(port, () => {
                console.log(`Listen on ${port}`);
            });
        }
        catch (error) {
            console.log(error);
        }
    });
}
startApp();
