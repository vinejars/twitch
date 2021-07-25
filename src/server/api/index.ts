import express , {Application, Request, Response, NextFunction} from 'express'
const router = express.Router();
import { User, db, Post, ProfileInfo } from '../db/index'

//route to get single user's info for profile page
router.get('/:id', async(req: Request, res: Response, next: NextFunction)=>{
    try {
        const user = await User.findByPk(req.params.userId, {
            include: [ProfileInfo]
        })
    } catch (error) {
       next(error) 
    }
})

router.post('/create', async(req: Request, res: Response, next: NextFunction)=>{
    try {
        console.log(
             'email: ' , req.body.email,
            'username: ', req.body.username,
            'id: ', req.body.id,
            'firebaseID: ', req.body.firebase 
        )
        const user = await User.create({
            email: req.body.email,
            username: req.body.username,
            id: req.body.firebase,
            firebaseID: req.body.firebase   
        })

        console.log(user)
    } catch (error) {
       next(error) 
    }
})

module.exports = router;