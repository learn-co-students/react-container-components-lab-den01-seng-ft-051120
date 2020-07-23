// Code MovieReviews Here
import React from 'react'

export default function MovieReviews({ reviews }) {
  function renderMovies() {
    return reviews.map(review => {
      return (
        <div className="review" key={review.id}>
          <h3>{review.display_title}</h3>
          <h4>{review.headline}</h4>
          <img src={review.multimedia.src} alt={review.display_title} />
          <p>{review.summary_short}</p>
          <a href={review.link.url}>{review.link.suggested_link_text}</a>
        </div>
      )
    })
  }

  return (
    <div className="review-list">
      {renderMovies()}
    </div>
  )
}
