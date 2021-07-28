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
require("dotenv").config();
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const index_1 = require("./server/db/index");
const PORT = process.env.PORT || 8409;
const app = express_1.default();
exports.default = app;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static(path_1.default.join(__dirname, "..", "public")));
app.use("/api", require("./server/api"));
app.use((req, res, next) => {
    if (path_1.default.extname(req.path).length > 0) {
        res.status(404).end();
    }
    else {
        next();
    }
});
app.get("*", (req, res, next) => {
    res.sendFile(path_1.default.join(__dirname, "..", "public", "index.html"));
});
const init = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //console.log('db: ', db)
        yield index_1.db.sync();
        app.listen(PORT, () => console.log(` Twitchin' around on port ${PORT}`));
    }
    catch (err) {
        console.log(`There was an error starting up :/ `, err);
    }
});
init();
app.use((err, req, res, next) => {
    console.error(err, typeof next);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || "Internal server error.");
});
