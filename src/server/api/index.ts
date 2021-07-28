import express, { Application, Request, Response, NextFunction } from 'express';
const router = express.Router();
import { User, db, Post, ProfileInfo } from '../db/index';

//GET ROUTES

//route to get single user's info for profile page
router.get(
	'/user/:userId',
	async (req: Request, res: Response, next: NextFunction) => {
		try {
			const user = await User.findByPk(req.params.userId, {
				include: [ProfileInfo],
			});
			res.json(user);
		} catch (error) {
			next(error);
		}
	}
);

//route to get all posts belonging to a specific user
router.get(
	'/allposts/:userId',
	async (req: Request, res: Response, next: NextFunction) => {
		try {
			const posts = await Post.findAll({
				where: { userId: req.params.userId },
			});
			res.json(posts);
		} catch (error) {
			next(error);
		}
	}
);

//route to get certain user's profile info
router.get(
	`/user/post/:userId`,
	async (req: Request, res: Response, next: NextFunction) => {
		try {
			const info = await ProfileInfo.findByPk(req.params.userId);
			res.json(info);
		} catch (error) {
			next(error);
		}
	}
);

//route to get all posts in database for gallery

router.get(
	'/gallery',
	async (req: Request, res: Response, next: NextFunction) => {
		try {
			const posts = await Post.findAll();
			res.json(posts);
		} catch (error) {
			next(error);
		}
	}
);

//POST ROUTES

//route to create a user
router.post(
	'/create',
	async (req: Request, res: Response, next: NextFunction) => {
		try {
			const user = await User.create({
				email: req.body.email,
				username: req.body.username,
				id: req.body.firebase,
				firebaseID: req.body.firebase,
			});

			res.json(user);
		} catch (error) {
			next(error);
		}
	}
);

//route to create a profile info section
router.post(
	'/createabout',
	async (req: Request, res: Response, next: NextFunction) => {
		try {
			const user = await User.findByPk(req.body.id);
			if (!user) {
				res.sendStatus(404);
			} else {
				const info = await ProfileInfo.create({
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
	}
);

//create a post
router.post(
	'/post',
	async (req: Request, res: Response, next: NextFunction) => {
		try {
			// const lastPost = await Post.findAll({
			// 	raw: true,
			// 	limit: 1,
			// 	order: [['createdAt', 'DESC']],
			// });

			console.log(lastPost);

			const post = await Post.create({
				imageUrl: req.body.imageUrl,
				text: req.body.text,
				userId: req.body.userId,
				id: 1,
			});

			console.log('this is req.body: ', req.body);
			res.json(post);
		} catch (error) {
			next(error);
		}
	}
);

//PUT ROUTES

//route to edit About Me info for a user

router.put(
	'/editabout',
	async (req: Request, res: Response, next: NextFunction) => {
		try {
			const info: any = await ProfileInfo.findByPk(req.body.id);
			if (!info) {
				res.sendStatus(404);
			}
			info.update(req.body);
		} catch (error) {
			next(error);
		}
	}
);

//DELETE ROUTES

//route to delete a post

router.delete(
	'/deletepost/:userId',
	async (req: Request, res: Response, next: NextFunction) => {
		try {
			const post = await Post.findOne({
				where: { userId: req.params.userId },
			});
			if (!post) {
				res.sendStatus(404);
			} else {
				await post.destroy();
			}
		} catch (error) {
			console.log(error);
		}
	}
);

module.exports = router;
