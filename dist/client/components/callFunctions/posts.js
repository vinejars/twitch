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
exports.getAllImages =
  exports.getPosts =
  exports.deletePost =
  exports.createPost =
    void 0;
const axios_1 = __importDefault(require("axios"));
//function to create a post
function createPost(userId, imageUrl, text) {
  return __awaiter(this, void 0, void 0, function* () {
    try {
      yield axios_1.default.post("/api/post", { userId, imageUrl, text });
    } catch (error) {
      console.log(error);
    }
  });
}
exports.createPost = createPost;
//function to delete a post
function deletePost(id) {
  return __awaiter(this, void 0, void 0, function* () {
    try {
      yield axios_1.default.delete(`/api/deletepost/${id}`);
    } catch (error) {
      console.log(error);
    }
  });
}
exports.deletePost = deletePost;
//function to get a specific user's posts
const getPosts = function (userId) {
  return __awaiter(this, void 0, void 0, function* () {
    try {
      let posts = [{}];
      yield axios_1.default.get(`/api/allposts/${userId}`).then((response) => {
        posts = response.data;
      });
      return posts;
    } catch (error) {
      console.log(error);
      return null;
    }
  });
};
exports.getPosts = getPosts;
//function to get all posts
const getAllImages = function () {
  return __awaiter(this, void 0, void 0, function* () {
    try {
      let images = [{}];
      yield axios_1.default.get("/api/gallery/").then((response) => {
        images = response.data;
      });
      return images;
      console.log("function Images: ", images);
    } catch (error) {
      console.log(error);
      return null;
    }
  });
};
exports.getAllImages = getAllImages;
