import { Response, Request } from 'express'
import { ReviewRepository } from '@src/repositories/review'

const reviewRepository = new ReviewRepository()
export class ReviewController {
  /**
   * Creates a new review for the given user.
   *
   * @param userId - the ID of the user who wrote the review
   * @param data - the review data, including the rating and review text
   * @param movieId - the ID of the movie, if the review is for a movie
   * @param showId - the ID of the show, if the review is for a show
   * @returns the newly created review
   */
  public async createNewReview(req: Request, res: Response) {
    const { mediaId, mediaType, userId, data } = req.body
    const movieId = mediaType.includes('movie') ? mediaId : undefined
    const showId = mediaType.includes('show') ? mediaId : undefined

    try {
      const review = await reviewRepository.createNewReview(
        userId,
        data,
        movieId,
        showId,
      )
      res.json(review)
    } catch (error) {
      res.json(error)
    }
  }

  public async getFilteredReviews(req: Request, res: Response) {
    const { movieId, showId, userId, rating, reviewedAt } = req.query

    const parsedMovieId = movieId as string | undefined
    const parsedShowId = showId as string | undefined
    const parsedUserId = userId ? parseInt(userId as string, 10) : undefined
    const parsedRating = rating ? parseInt(rating as string, 10) : undefined

    const parsedReviewedAt = reviewedAt
      ? new Date(reviewedAt as string)
      : undefined

    const filter = {
      userId: parsedUserId,
      movieId: parsedMovieId,
      showId: parsedShowId,
      rating: parsedRating,
      reviewAt: parsedReviewedAt,
    }

    try {
      const reviews = await reviewRepository.getFilteredReviews(filter)
      res.json(reviews)
    } catch (error) {
      res.json(error)
    }
  }
}
