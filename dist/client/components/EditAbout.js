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
const singleUser_1 = require("./callFunctions/singleUser");
const MainNav_1 = __importDefault(require("./MainNav"));
const react_router_dom_1 = require("react-router-dom");
const EditAbout = (props) => {
  const [about, setAbout] = react_1.useState("");
  const [ring, setRing] = react_1.useState("");
  const [destination, setDestination] = react_1.useState("");
  const [info, setInfo] = react_1.useState(null);
  const history = react_router_dom_1.useHistory();
  function grabInfo() {
    return __awaiter(this, void 0, void 0, function* () {
      const oldInfo = yield singleUser_1.getInfo(props.user.id);
      yield setInfo(oldInfo);
      console.log("info: ", info);
      // setRing(info.ring)
      // setDestination(info.destination)
      // setAbout(info.aboutMe)
      console.log("ring: ", ring, "about: ", about, "destination", destination);
    });
  }
  react_1.useEffect(() => {
    if (!info && props.user) {
      grabInfo();
    }
  });
  function handleSubmit() {
    return __awaiter(this, void 0, void 0, function* () {
      let obj = {
        id: props.user.id,
        aboutMe: about,
        ring: ring,
        destination: destination,
        userId: props.user.id,
      };
      singleUser_1.editAbout(obj);
      history.push(`/gallery`);
    });
  }
  return react_1.default.createElement(
    "div",
    null,
    react_1.default.createElement(MainNav_1.default, {
      user: props.user,
      setUser: props.setUser,
    }),
    info
      ? react_1.default.createElement(
          "div",
          null,
          react_1.default.createElement(
            "form",
            { onSubmit: handleSubmit },
            react_1.default.createElement(
              "label",
              { htmlFor: "aboutme" },
              "About Me: "
            ),
            react_1.default.createElement("input", {
              type: "text",
              name: "aboutme",
              id: "aboutme",
              defaultValue: info.aboutMe,
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
              defaultValue: info.ring,
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
              defaultValue: info.destination,
              onChange: (event) => setDestination(event.target.value),
            }),
            react_1.default.createElement(
              "button",
              { type: "submit" },
              " Submit "
            )
          )
        )
      : null
  );
};
exports.default = EditAbout;
