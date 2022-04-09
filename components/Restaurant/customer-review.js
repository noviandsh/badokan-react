import ReviewForm from "./review-form"
import { useState } from "react"

export default function CustomerReview({ customerReviews }) {
    const [reviews, setReviews] = useState(customerReviews)
    const getCustomerReviews = (newReview) => {
        setReviews(newReview);
    }
    return (
        <>
            <div id="customer-review">
                {
                    reviews.map((review, i) => (
                        <div key={i} className="review-card">
                            <h4>{review.name}</h4>
                            <p>&ldquo;{review.review}&rdquo;</p>
                            <div className="review-date">{review.date} <i className="material-icons">schedule</i></div>
                        </div>
                    ))
                }
            </div>
            <ReviewForm getCustomerReviews={getCustomerReviews} />
        </>
    )
}
