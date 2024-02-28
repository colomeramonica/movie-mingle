import { databaseConn } from '@src/lib/prisma'
export class UserRepository {
  public async saveUserInfo(data: { username: string; uid: string }) {
    return await databaseConn.user.create({
      data: {
        firebaseUserId: data.uid,
        username: data.username,
      },
    })
  }
}
