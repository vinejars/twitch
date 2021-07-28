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
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Main_1 = __importDefault(require("./Main"));
const Signup_1 = __importDefault(require("./Signup"));
const Login_1 = __importDefault(require("./Login"));
const ProfilePage_1 = __importDefault(require("./ProfilePage"));
const CreatePost_1 = __importDefault(require("./CreatePost"));
const AllPosts_1 = __importDefault(require("./AllPosts"));
const EditAbout_1 = __importDefault(require("./EditAbout"));
require("../styles.css");
const Routes = (props) => {
  const [user, setUser] = react_1.useState({});
  return react_1.default.createElement(
    "div",
    null,
    react_1.default.createElement(
      react_router_dom_1.Switch,
      null,
      react_1.default.createElement(
        react_router_dom_1.Route,
        { exact: true, path: "/" },
        react_1.default.createElement(Main_1.default, null)
      ),
      react_1.default.createElement(
        react_router_dom_1.Route,
        { exact: true, path: "/login" },
        react_1.default.createElement(Login_1.default, {
          user: user,
          setUser: setUser,
        })
      ),
      react_1.default.createElement(
        react_router_dom_1.Route,
        { exact: true, path: "/signup" },
        react_1.default.createElement(Signup_1.default, {
          user: user,
          setUser: setUser,
        })
      ),
      react_1.default.createElement(
        react_router_dom_1.Route,
        { exact: true, path: "/user/:id" },
        react_1.default.createElement(ProfilePage_1.default, {
          user: user,
          setUser: setUser,
        })
      ),
      react_1.default.createElement(
        react_router_dom_1.Route,
        { exact: true, path: "/edit" },
        react_1.default.createElement(EditAbout_1.default, {
          user: user,
          setUser: setUser,
        })
      ),
      react_1.default.createElement(
        react_router_dom_1.Route,
        { exact: true, path: "/add" },
        react_1.default.createElement(CreatePost_1.default, {
          user: user,
          setUser: setUser,
        })
      ),
      react_1.default.createElement(
        react_router_dom_1.Route,
        { exact: true, path: "/gallery" },
        react_1.default.createElement(AllPosts_1.default, {
          user: user,
          setUser: setUser,
        })
      )
    )
  );
};
exports.default = Routes;
