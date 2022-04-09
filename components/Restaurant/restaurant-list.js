import React from 'react'
import RestaurantItem from './restaurant-item'

export default function RestaurantList({ restaurants, title }) {

    return (
        <div id="restaurant-list">
            <h2>{title}</h2>
            <div id="restaurants">
                {
                    restaurants.map(restaurant => (
                        <RestaurantItem key={restaurant.id} data={restaurant} />
                    ))
                }
            </div>
        </div>
    )
}
