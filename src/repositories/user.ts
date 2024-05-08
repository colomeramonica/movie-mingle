import { databaseConn } from '@src/util/prisma'
export class UserRepository {
  public async saveUserInfo(data: { username: string; uid: string }) {
    return await databaseConn.user.create({
      data: {
        firebaseUserId: data.uid,
        username: data.username,
      },
    })
  }

  public async getUserProfile(id: string) {
    const userId = parseInt(id, 10)
    return await databaseConn.user.findUniqueOrThrow({
      where: {
        id: userId,
      },
      include: {
        review: true,
      },
    })
  }
}
