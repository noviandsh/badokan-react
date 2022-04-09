import React from 'react'
import API_ENDPOINT from '../../pages/api/api-endpoint';
import Link from 'next/link';
import LikeButton from './like-button';

export default function RestaurantItem(props) {
    const restaurant = props.data
    return (
        <div className="restaurant-item" data-city={restaurant.city}>
            <div className="restaurant-item-thumbnail">
                <img className="lazyload" src={API_ENDPOINT.PICTURE_SMALL(restaurant.pictureId)} alt={`Restoran ${restaurant.name} yang berada di kota ${restaurant.city}`} />
                <LikeButton id={restaurant.id} />
            </div>
            <div className="content">
                <p className="rating">Rating restoran {restaurant.rating}
                </p>
                <h1 className="title"><Link href={`/detail/${restaurant.id}`}><a>{restaurant.name}</a></Link></h1>
                <p className="description">{restaurant.description}</p>
            </div>
        </div>
    )
}
