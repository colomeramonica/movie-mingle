import express, { Request, Response } from 'express'
import { UserController } from './controllers/user'
import { ReviewController } from './controllers/review'

const router = express.Router()
const userController = new UserController()
const reviewController = new ReviewController()

/** User Routes **/
router.post('/user/new', async (req: Request, res: Response) => {
  return await userController.createUser(req, res)
})

router.post('/update-profile/:userId', async (req: Request, res: Response) => {
  return await userController.updateUserProfile(req, res)
})

router.post('/reset-password/', async (req: Request, res: Response) => {
  return await userController.resetPassword(req, res)
})

router.get('/profile/:userId', async (req: Request, res: Response) => {
  return await userController.getUserProfile(req, res)
})

/** Reviews/Replies Routes **/
router.get('/reviews', async (req: Request, res: Response) => {
  return await reviewController.getFilteredReviews(req, res)
})

export default router
