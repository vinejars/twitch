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
const singleUser_1 = require("./callFunctions/singleUser");
const posts_1 = require("./callFunctions/posts");
const MainNav_1 = __importDefault(require("./MainNav"));
const ProfilePage = (props) => {
  const [posts, setPosts] = react_1.useState(null);
  const [loading, setLoading] = react_1.useState(true);
  const [info, setInfo] = react_1.useState(null);
  const history = react_router_dom_1.useHistory();
  function grabUser(id) {
    return __awaiter(this, void 0, void 0, function* () {
      const loggedInUser = yield singleUser_1.getSingleUser(id);
      props.setUser(loggedInUser);
    });
  }
  function grabInfo(id) {
    return __awaiter(this, void 0, void 0, function* () {
      const profileInfo = yield singleUser_1.getInfo(id);
      setInfo(profileInfo);
    });
  }
  function grabPosts(id) {
    return __awaiter(this, void 0, void 0, function* () {
      const gotPosts = yield posts_1.getPosts(id);
      setPosts(gotPosts);
    });
  }
  react_1.useEffect(() => {
    if (!props.user.username) {
      grabUser(window.localStorage.id);
      setLoading(false);
    }
    if (!posts) {
      grabPosts(window.localStorage.id);
    }
    if (!info) {
      grabInfo(window.localStorage.id);
    }
  });
  function handleDelete() {
    posts_1.deletePost(props.user.id);
    grabPosts(props.user.id);
    history.go(0);
  }
  return react_1.default.createElement(
    "div",
    null,
    react_1.default.createElement(MainNav_1.default, {
      user: props.user,
      setUser: props.setUser,
    }),
    !info
      ? null
      : react_1.default.createElement(
          "div",
          { id: "aboutme", key: info.id },
          react_1.default.createElement("h3", null, "About Me: "),
          react_1.default.createElement("p", null, " ", info.aboutMe, " "),
          react_1.default.createElement("h3", null, " My Ring "),
          react_1.default.createElement("p", null, " ", info.ring, " "),
          react_1.default.createElement("h3", null, " My Destination: "),
          react_1.default.createElement("p", null, " ", info.destination, " "),
          react_1.default.createElement(
            react_router_dom_1.Link,
            { to: "/edit" },
            " Start A New Journey "
          )
        ),
    !posts
      ? null
      : react_1.default.createElement(
          "div",
          null,
          posts.map((post) =>
            react_1.default.createElement(
              "div",
              { key: post.id },
              react_1.default.createElement("img", {
                src: post.imageUrl,
                width: 300,
              }),
              react_1.default.createElement("p", null, post.text),
              react_1.default.createElement(
                "button",
                { onClick: handleDelete },
                " Delete "
              )
            )
          )
        )
  );
};
exports.default = ProfilePage;
