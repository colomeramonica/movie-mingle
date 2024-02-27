import express, { Request, Response } from 'express'
import { UserController } from './controllers/user'

const router = express.Router()
const userController = new UserController()

router.get('/hi', () => {
  return console.log('hello')
})
router.post('/user/new', async (req: Request, res: Response) => {
  return await userController.createUser(req, res)
})

router.post('/update-profile/:id', async (req: Request, res: Response) => {
  return await userController.updateProfile(req, res)
})

router.post('/reset-password/', async (req: Request, res: Response) => {
  return await userController.resetPassword(req, res)
})

export default router
