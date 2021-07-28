"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.editAbout =
  exports.createAbout =
  exports.createUser =
  exports.getInfo =
  exports.getSingleUser =
    void 0;
const axios_1 = __importDefault(require("axios"));
//function to retrieve a single user from database
const getSingleUser = function (id) {
  return __awaiter(this, void 0, void 0, function* () {
    try {
      const { data } = yield axios_1.default.get(`/api/user/${id}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  });
};
exports.getSingleUser = getSingleUser;
//function to retrieve a user's profile info
const getInfo = function (id) {
  return __awaiter(this, void 0, void 0, function* () {
    try {
      const { data } = yield axios_1.default.get(`/api/user/post/${id}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  });
};
exports.getInfo = getInfo;
//function to create a user in the database
function createUser(username, email, firebase) {
  return __awaiter(this, void 0, void 0, function* () {
    try {
      yield axios_1.default.post("/api/create", { username, email, firebase });
    } catch (error) {
      console.log(error);
    }
  });
}
exports.createUser = createUser;
//function to create About Section in profile
function createAbout(id, about, ring, destination) {
  return __awaiter(this, void 0, void 0, function* () {
    try {
      const info = yield axios_1.default.post("/api/createabout", {
        id,
        about,
        ring,
        destination,
      });
      return info;
    } catch (error) {
      console.log(error);
      return null;
    }
  });
}
exports.createAbout = createAbout;
//function to edit AboutMe section
function editAbout(info) {
  return __awaiter(this, void 0, void 0, function* () {
    try {
      const { data } = yield axios_1.default.put(`/api/editAbout`, info);
      return data;
    } catch (error) {
      console.log(error);
    }
  });
}
exports.editAbout = editAbout;
