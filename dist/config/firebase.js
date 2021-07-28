"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = exports.Providers = void 0;
const app_1 = __importDefault(require("firebase/app"));
require("firebase/auth");
require("firebase/firestore");
require("firebase/storage");
const config_1 = __importDefault(require("./config"));
const Firebase = app_1.default.initializeApp(config_1.default.firebase);
exports.Providers = {
  google: new app_1.default.auth.GoogleAuthProvider(),
};
exports.auth = app_1.default.auth();
exports.default = app_1.default;
