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
const Signup = (props) => {
  const [signup, setSignup] = react_1.useState(false);
  const [email, setEmail] = react_1.useState("");
  const [username, setUsername] = react_1.useState("");
  const [password, setPassword] = react_1.useState("");
  const [confirm, setConfirm] = react_1.useState("");
  const [error, setError] = react_1.useState("");
  const [about, setAbout] = react_1.useState("");
  const [ring, setRing] = react_1.useState("");
  const [destination, setDestination] = react_1.useState("");
  const history = react_router_dom_1.useHistory();
  const signUpWithEmailAndPassword = (e) =>
    __awaiter(void 0, void 0, void 0, function* () {
      e.preventDefault();
      if (error !== "") setError("");
      if (password !== confirm) setError("Passwords do not match!");
      setSignup(true);
      yield firebase_1.auth
        .createUserWithEmailAndPassword(email, password)
        .then((result) =>
          __awaiter(void 0, void 0, void 0, function* () {
            singleUser_1.createUser(username, email, result.user.uid);
            const loggedUser = yield singleUser_1.getSingleUser(
              result.user.uid
            );
            props.setUser(loggedUser);
            singleUser_1.createAbout(result.user.uid, about, ring, destination);
            history.push(`/login`);
          })
        )
        .catch((error) => {
          console.log(error);
          if (error.code.includes("auth/weak-password")) {
            setError(
              `It is not the strength of the body, but the strength of the spirit. ...and also your password. Please make it stronger.`
            );
          } else if (error.code.includes("auth/email-already-in-use")) {
            setError("Email is already in use! You shall not pass!");
          } else {
            setError(
              "Unable to register. Please take off the ring and try again."
            );
          }
          setSignup(false);
        });
    });
  return react_1.default.createElement(
    "div",
    null,
    react_1.default.createElement("h1", null, "Sign Up!"),
    react_1.default.createElement(
      "form",
      { onSubmit: (e) => signUpWithEmailAndPassword(e) },
      react_1.default.createElement(
        "label",
        { htmlFor: "email" },
        "Sign up with your email:"
      ),
      react_1.default.createElement("input", {
        type: "email",
        name: "email",
        id: "email",
        value: email,
        onChange: (event) => setEmail(event.target.value),
      }),
      react_1.default.createElement("br", null),
      react_1.default.createElement(
        "label",
        { htmlFor: "username" },
        "Create a username:"
      ),
      react_1.default.createElement("input", {
        type: "username",
        name: "username",
        id: "username",
        value: username,
        onChange: (event) => setUsername(event.target.value),
      }),
      react_1.default.createElement("br", null),
      react_1.default.createElement(
        "label",
        { htmlFor: "password" },
        "Choose your password:"
      ),
      react_1.default.createElement("input", {
        autoComplete: "new-password",
        type: "password",
        name: "password",
        id: "password",
        value: password,
        onChange: (event) => setPassword(event.target.value),
      }),
      react_1.default.createElement("br", null),
      react_1.default.createElement(
        "label",
        { htmlFor: "confirm" },
        "Make sure it's strong! (Confirm:)"
      ),
      react_1.default.createElement("input", {
        autoComplete: "new-password",
        type: "password",
        name: "confirm",
        id: "confirm",
        value: confirm,
        onChange: (event) => setConfirm(event.target.value),
      }),
      react_1.default.createElement("br", null),
      react_1.default.createElement(
        "label",
        { htmlFor: "aboutme" },
        "About Me: "
      ),
      react_1.default.createElement("input", {
        type: "text",
        name: "aboutme",
        id: "aboutme",
        value: about,
        onChange: (event) => setAbout(event.target.value),
      }),
      react_1.default.createElement(
        "label",
        { htmlFor: "ring" },
        "My Ring, aka what I'm bringing with me on this journey:",
        " "
      ),
      react_1.default.createElement("input", {
        type: "text",
        name: "ring",
        id: "ring",
        value: ring,
        onChange: (event) => setRing(event.target.value),
      }),
      react_1.default.createElement(
        "label",
        { htmlFor: "destination" },
        "My Destination: "
      ),
      react_1.default.createElement("input", {
        type: "text",
        name: "destination",
        id: "destination",
        value: destination,
        onChange: (event) => setDestination(event.target.value),
      }),
      react_1.default.createElement("button", null, "Sign Up!"),
      react_1.default.createElement(
        "p",
        null,
        "If you've already spoken friend, enter here:",
        " ",
        react_1.default.createElement(
          react_router_dom_1.Link,
          { to: "/login" },
          "Login"
        )
      )
    ),
    react_1.default.createElement(Fail_1.default, { error: error })
  );
};
exports.default = Signup;
