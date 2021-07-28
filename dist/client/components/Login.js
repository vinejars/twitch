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
const react_router_dom_1 = require("react-router-dom");
const firebase_1 = require("../../config/firebase");
const Fail_1 = __importDefault(require("./Fail"));
const singleUser_1 = require("./callFunctions/singleUser");
const Login = (props) => {
  const [loggingIn, setLoggingIn] = react_1.useState(false);
  const [email, setEmail] = react_1.useState("");
  const [password, setPassword] = react_1.useState("");
  const [error, setError] = react_1.useState("");
  const history = react_router_dom_1.useHistory();
  const signInWithEmailAndPassword = (e) =>
    __awaiter(void 0, void 0, void 0, function* () {
      e.preventDefault();
      if (error !== "") setError("");
      setLoggingIn(true);
      yield firebase_1.auth
        .signInWithEmailAndPassword(email, password)
        .then((result) =>
          __awaiter(void 0, void 0, void 0, function* () {
            const loggedUser = yield singleUser_1.getSingleUser(
              result.user.uid
            );
            props.setUser(loggedUser);
            window.localStorage.setItem("id", `${result.user.uid}`);
            history.push(`/user/${result.user.uid}`);
          })
        )
        .catch((error) => {
          console.log(error);
          setLoggingIn(false);
          setError("Not able to sign in! Please try again!");
        });
    });
  return react_1.default.createElement(
    "div",
    null,
    react_1.default.createElement("h1", null, "Log In!"),
    react_1.default.createElement(
      "form",
      { onSubmit: (e) => signInWithEmailAndPassword(e) },
      react_1.default.createElement(
        "label",
        { htmlFor: "email" },
        "Enter Your Email"
      ),
      react_1.default.createElement("input", {
        type: "email",
        name: "email",
        id: "email",
        value: email,
        onChange: (event) => setEmail(event.target.value),
      }),
      react_1.default.createElement(
        "label",
        { htmlFor: "password" },
        "Enter Your Password"
      ),
      react_1.default.createElement("input", {
        autoComplete: "new-password",
        type: "password",
        name: "password",
        id: "password",
        value: password,
        onChange: (event) => setPassword(event.target.value),
      }),
      react_1.default.createElement("button", null, "Log In!"),
      react_1.default.createElement(
        "p",
        null,
        "If you'd like to join the party go to:",
        " ",
        react_1.default.createElement(
          react_router_dom_1.Link,
          { to: "/signup" },
          "Sign Up"
        )
      )
    ),
    react_1.default.createElement(Fail_1.default, { error: error })
  );
};
exports.default = Login;
