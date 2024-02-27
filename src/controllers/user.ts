import { Response, Request } from 'express'
import { firebaseApp } from '../lib/firebase'
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
} from 'firebase/auth'
import { UserRepository } from '../repositories/user'

const userRepository = new UserRepository()

export class UserController {
  public async createUser(req: Request, res: Response) {
    const auth = getAuth(firebaseApp)
    const { username, email, password } = req.body
    const data = { username, email, password }

    this.handleInputData(data)

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const { user } = userCredential
      const { uid } = user

      const userData = { username, uid }
      userRepository.saveUserInfo(userData)

      sendEmailVerification(user)

      return res.status(204).json('✨Created')
    } catch (error) {
      /* TODO fix error returns */
      return res.json(error)
    }
  }

  public async updateUserProfile(req: Request, res: Response) {}

  public async resetPassword(req: Request, res: Response) {
    const auth = getAuth(firebaseApp)
    const { email } = req.body

    try {
      sendPasswordResetEmail(auth, email)
    } catch (error) {
      res.json(error)
    }
  }

  private handleInputData(data: { username: string; email: string; password: string }) {
    const { username, email, password } = data

    try {
      this.checkValidUsername(username)
      this.checkValidEmail(email)
      //this.checkValidPassword(password)
    } catch (error) {
      throw new Error(`Error during input validation: ${error.message}`)
    }
  }

  private checkValidUsername(username: string) {
    const validUsernameRegex = /^[a-zA-Z]+$/
    /* TODO check if username already exists on database */

    if (!validUsernameRegex.test(username)) {
      throw new Error(`Invalid username. It should contain only letters.`)
    }
  }

  private checkValidEmail(email: string) {
    const validEmailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    if (!validEmailRegex.test(email)) {
      throw new Error(`Invalid email address.`)
    }
  }

  private checkValidPassword(password: string) {
    const validPasswordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/

    if (!validPasswordRegex.test(password)) {
      throw new Error(
        `Invalid password. It must contain one upper case letter, one lower case letter, at least one digit and a minimum 8 in length`,
      )
    }
  }
}
