"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserController_1 = __importDefault(require("./UserController"));
const userRouter = express_1.default.Router();
userRouter.post('/create', UserController_1.default.create);
userRouter.get('/', UserController_1.default.getAll);
userRouter.get('/:id', UserController_1.default.getById);
userRouter.put('/edit', UserController_1.default.edit);
userRouter.delete('/delete/:id', UserController_1.default.delete);
exports.default = userRouter;
