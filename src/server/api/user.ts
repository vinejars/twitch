
import express , {Application, Request, Response, NextFunction} from 'express'
import { User, db, Post, ProfileInfo } from '../db/index'

const router = express.Router();

router.get('/:userId', async(req: Request, res: Response, next: NextFunction)=>{
    try {
        const user = await User.findByPk(req.params.userId, {
            include: [ProfileInfo]
        })
    } catch (error) {
       next(error) 
    }
})