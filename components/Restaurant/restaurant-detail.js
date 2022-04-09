import API_ENDPOINT from "../../pages/api/api-endpoint"
import CustomerReview from "./customer-review"
import LikeButton from "./like-button"

export default function RestaurantDetail(props) {
    const { restaurant } = props
    return (
        <div id="restaurant-detail">
            <div id="detail-image">
                <picture>
                    <source media="(max-width: 600px)" srcSet={API_ENDPOINT.PICTURE_SMALL(restaurant.pictureId)} />
                    <img alt={`Restoran ${restaurant.name} yang berada di kota ${restaurant.city}`} src={API_ENDPOINT.PICTURE_LARGE(restaurant.pictureId)} />
                </picture>
                <div id="image-attr">
                    <div id="detail-rating"><i className="material-icons">star</i> {restaurant.rating}</div>
                    <LikeButton id={restaurant.id} />
                </div>
                <div id="restaurant-categories">
                    <ul>
                        {
                            restaurant.categories.map((categories, i) => (<li key={i}>{categories.name}</li>))
                        }
                    </ul>
                </div>
                <div id="restaurant-location">
                    <i className="material-icons">location_on</i> <a href={`https://www.google.com/maps/search/${restaurant.address.replace(/\s/g, '+')}+${restaurant.city.replace(/\s/g, '+')}`} target="_blank" rel="noreferrer"> {restaurant.address}, {restaurant.city}</a>
                </div>
            </div>
            <h2>{restaurant.name}</h2>
            <p>{restaurant.description}</p>
            <div id="menu-container">
                <h2>Menu</h2>
                <div id="menu-list">
                    <div id="food-menu">
                        <h3>
                            <i className="material-icons">restaurant</i> <span> Makanan </span> <i className="material-icons">restaurant</i>
                        </h3>
                        <ul>
                            {
                                restaurant.menus.foods.map((food, i) => (<li key={i}>{food.name}</li>))
                            }
                        </ul>
                    </div>
                    <div id="food-menu">
                        <h3>
                            <i className="material-icons">local_cafe</i> <span> Minuman </span> <i className="material-icons">local_cafe</i>
                        </h3>
                        <ul>
                            {
                                restaurant.menus.drinks.map((drink, i) => (<li key={i}>{drink.name}</li>))
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <div id="review-container">
                <h2>Ulasan Pelanggan</h2>
                <CustomerReview customerReviews={restaurant.customerReviews} />
            </div>
        </div>
    )
}
