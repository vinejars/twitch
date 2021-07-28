"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const firebase_1 = __importDefault(require("../../config/firebase"));
const MainNav = (props) => {
  // console.log('nav user: ', props.user)
  const history = react_router_dom_1.useHistory();
  const logout = () => {
    firebase_1.default
      .auth()
      .signOut()
      .catch((error) => {
        console.log(error);
      });
    props.setUser({
      id: undefined,
      email: undefined,
      username: undefined,
      firebaseID: undefined,
    });
    history.push("/login");
  };
  return react_1.default.createElement(
    "div",
    null,
    react_1.default.createElement(
      "nav",
      { id: "navcontain" },
      react_1.default.createElement(
        react_router_dom_1.Link,
        { to: "/gallery" },
        " The Fellowship Feed "
      ),
      react_1.default.createElement(
        react_router_dom_1.Link,
        { to: "/add" },
        " Add Post "
      ),
      react_1.default.createElement(
        react_router_dom_1.Link,
        { to: `/user/${props.user.id}` },
        " My Journey "
      ),
      react_1.default.createElement("button", { onClick: logout }, " Logout ")
    )
  );
};
exports.default = MainNav;
