"use strict";
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function () {
            return m[k];
          },
        });
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }
    : function (o, v) {
        o["default"] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
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
const react_1 = __importStar(require("react"));
const firebase_1 = __importDefault(require("../../config/firebase"));
const posts_1 = require("./callFunctions/posts");
const MainNav_1 = __importDefault(require("./MainNav"));
const react_router_dom_1 = require("react-router-dom");
const CreatePost = (props) => {
  const [text, setText] = react_1.useState("");
  const [photoUrl, setPhotoUrl] = react_1.useState("");
  const [userId, setUserId] = react_1.useState("");
  const history = react_router_dom_1.useHistory();
  const handleClick = (e) =>
    __awaiter(void 0, void 0, void 0, function* () {
      e.preventDefault();
      posts_1.createPost(userId, photoUrl, text);
      history.push(`/gallery`);
    });
  const onChange = (e) =>
    __awaiter(void 0, void 0, void 0, function* () {
      const file = e.target.files[0];
      const storageRef = firebase_1.default.storage().ref();
      const fileRef = storageRef.child(file.name);
      yield fileRef.put(file).then(() => {});
      let id = firebase_1.default.auth().currentUser.uid;
      console.log("id: ", id);
      let url = yield fileRef.getDownloadURL();
      setPhotoUrl(url);
      setUserId(id);
    });
  return react_1.default.createElement(
    "div",
    null,
    react_1.default.createElement(MainNav_1.default, {
      user: props.user,
      setUser: props.setUser,
    }),
    react_1.default.createElement("input", {
      type: "file",
      onChange: onChange,
    }),
    react_1.default.createElement("textarea", {
      name: "postinfo",
      maxLength: "250",
      onChange: (event) => setText(event.target.value),
    }),
    react_1.default.createElement(
      "button",
      { onClick: (e) => handleClick(e) },
      " Upload "
    )
  );
};
exports.default = CreatePost;
