import { databaseConn } from '@src/util/prisma'

export class ReviewRepository {
  public async createNewReview(
    userId: number,
    data: {
      rating: number
      review: string
    },
    filmId?: string,
    showId?: string,
  ) {
    return await databaseConn.review.create({
      data: {
        filmId,
        showId,
        rating: data.rating,
        review: data.review,
        user: {
          connect: { id: userId },
        },
      },
    })
  }
  public async getFilteredReviews(
    filter: {
      userId?: number
      movieId?: string
      showId?: string
      rating?: number
      reviewAt?: Date
    } = {},
  ) {
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
