import express , {Application, Request, Response, NextFunction} from 'express'
const router = express.Router();
import { User, db, Post, ProfileInfo } from '../db/index'

//GET ROUTES

//route to get single user's info for profile page
router.get('/user/:userId', async(req: Request, res: Response, next: NextFunction)=>{
    try {
        const user = await User.findByPk(req.params.userId, {
      include: [ProfileInfo]
    })
        res.json(user)
    } catch (error) {
       next(error) 
    }
})


router.get('/allposts/:userId', async(req: Request, res: Response, next: NextFunction)=>{
    try {
        const posts = await Post.findAll({
        where: {userId: req.params.userId}
        })
        res.json(posts)
    } catch (error) {
       next(error) 
    }
})

//POST ROUTES 

//route to create a user
router.post('/create', async(req: Request, res: Response, next: NextFunction)=>{
    try {
        const user = await User.create({
            email: req.body.email,
            username: req.body.username,
            id: req.body.firebase,
            firebaseID: req.body.firebase   
        })

        res.json(user)
    } catch (error) {
       next(error) 
    }
})

//route to create a profile info section
router.post('/createabout', async(req: Request, res: Response, next: NextFunction)=>{
  try {
      const user = await User.findByPk(req.body.id)
      if(!user){
          res.sendStatus(404)
      } else {
         const info = await ProfileInfo.create({
              aboutMe: req.body.about,
              ring: req.body.ring,
              destination: req.body.destination,
              userId: req.body.id
          })
         // user.hasOne(info)
        res.send(info)
      }
      
  } catch (error) {
      
  }
})

router.post('/post', async(req: Request, res: Response, next: NextFunction)=>{
    try {

        const lastPost = await Post.findAll({
        raw: true, limit: 1, order: [ ['createdAt', 'DESC'] ]
        })
        

        const post = await Post.create({
            imageUrl: req.body.imageUrl,
            text: req.body.text,
            userId: req.body.userId,
            id: lastPost[0].id + 1
        })

        res.json(post)
    } catch (error) {
       next(error) 
    }
})



module.exports = router;