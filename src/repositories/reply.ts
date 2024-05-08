import { databaseConn } from '@src/util/prisma'

export class ReplyRepository {
  public async getRepliesForReview(id: string) {
    const reviewId = parseInt(id, 10)
    return await databaseConn.reply.findMany({
      where: {
        reviewId,
      },
    })
  }
}
