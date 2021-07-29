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
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const index_1 = require("../db/index");
//GET ROUTES
//route to get single user's info for profile page
router.get("/user/:userId", (req, res, next) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const user = yield index_1.User.findByPk(req.params.userId, {
        include: [index_1.ProfileInfo],
      });
      res.json(user);
    } catch (error) {
      next(error);
    }
  })
);
//route to get all posts belonging to a specific user
router.get("/allposts/:userId", (req, res, next) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const posts = yield index_1.Post.findAll({
        where: { userId: req.params.userId },
      });
      res.json(posts);
    } catch (error) {
      next(error);
    }
  })
);
//route to get certain user's profile info
router.get(`/user/post/:userId`, (req, res, next) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const info = yield index_1.ProfileInfo.findByPk(req.params.userId);
      res.json(info);
    } catch (error) {
      next(error);
    }
  })
);
//route to get all posts in database for gallery
router.get("/gallery", (req, res, next) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const posts = yield index_1.Post.findAll();
      res.json(posts);
    } catch (error) {
      next(error);
    }
  })
);
//POST ROUTES
//route to create a user
router.post("/create", (req, res, next) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const user = yield index_1.User.create({
        email: req.body.email,
        username: req.body.username,
        id: req.body.firebase,
        firebaseID: req.body.firebase,
      });
      res.json(user);
    } catch (error) {
      next(error);
    }
  })
);
//route to create a profile info section
router.post("/createabout", (req, res, next) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const user = yield index_1.User.findByPk(req.body.id);
      if (!user) {
        res.sendStatus(404);
      } else {
        const info = yield index_1.ProfileInfo.create({
          id: req.body.id,
          aboutMe: req.body.about,
          ring: req.body.ring,
          destination: req.body.destination,
          userId: req.body.id,
        });
        // user.hasOne(info)
        res.send(info);
      }
    } catch (error) {
      next(error);
    }
  })
);
//create a post
router.post("/post", (req, res, next) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const lastPost = yield index_1.Post.findAll({
        raw: true,
        limit: 1,
        order: [["createdAt", "DESC"]],
      });
      let newId = lastPost[0].id + 1;
      const post = yield index_1.Post.create({
        userId: req.body.userId,
        text: req.body.text,
        imageUrl: req.body.imageUrl,
        id: newId,
      });
      res.json(post);
    } catch (error) {
      next(error);
    }
  })
);
//PUT ROUTES
//route to edit About Me info for a user
router.put("/editabout", (req, res, next) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const info = yield index_1.ProfileInfo.findByPk(req.body.id);
      if (!info) {
        res.sendStatus(404);
      }
      info.update(req.body);
    } catch (error) {
      next(error);
    }
  })
);
//DELETE ROUTES
//route to delete a post
router.delete("/deletepost/:userId", (req, res, next) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const post = yield index_1.Post.findOne({
        where: { userId: req.params.userId },
      });
      if (!post) {
        res.sendStatus(404);
      } else {
        yield post.destroy();
      }
    } catch (error) {
      console.log(error);
    }
  })
);
module.exports = router;
