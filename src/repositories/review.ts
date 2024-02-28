import { databaseConn } from '@src/lib/prisma'

export class ReviewRepository {
  public async getFilteredReviews(
    filter: {
      userId?: number
      movieId?: string
      showId?: string
      rating?: number
      reviewAt?: Date
    } = {},
  ) {
    console.log('repo', filter)
    return await databaseConn.review.findMany({
      where: {
        userId: filter.userId,
        OR: [{ filmId: filter.movieId }, { showId: filter.showId }],
        rating: filter.rating,
        reviewAt: filter.reviewAt,
      },
    })
  }
}
