import { useState, useEffect } from "react"

export default function LikeButton({ id }) {
    const getLikedRestaurants = () => JSON.parse(localStorage.getItem("likedRestaurants")) || {}

    const [isLiked, setIsLiked] = useState(false)

    useEffect(() => {
        let likedRestaurants = getLikedRestaurants()
        if (likedRestaurants.id.includes(id)) {
            setIsLiked(true)
        }
    }, [])

    const LikeButtonTemplate = () => (
        <button onClick={handleClickLike} aria-label="like this restaurant" id="likeButton" className="like">
            <i className="material-icons" aria-hidden="true">favorite_border</i>
        </button>
    )

    const LikedButtonTemplate = () => (
        <button onClick={handleClickLike} aria-label="unlike this restaurant" id="likeButton" className="like">
            <i className="material-icons" aria-hidden="true">favorite</i>
        </button>
    )


    const saveLikedRestaurant = () => {
        // get liked restaurants from localStorage
        let likedRestaurants = getLikedRestaurants()
        // // check if there is liked restaurants saved in localStorage
        if (likedRestaurants) {
            const likedIndex = likedRestaurants.id.indexOf(id)
            if (likedIndex >= 0) {
                likedRestaurants.id.splice(likedIndex, 1)
            } else {
                likedRestaurants.id.push(id)
            }
        }
        else {
            likedRestaurants = {
                id: [id]
            }
        }
        localStorage.setItem('likedRestaurants', JSON.stringify(likedRestaurants))
    }

    const handleClickLike = () => {
        setIsLiked(!isLiked)
        saveLikedRestaurant()
    }

    return (
        <div className="favorite-btn">
            {isLiked ? <LikedButtonTemplate /> : <LikeButtonTemplate />}
        </div>

    )
}
