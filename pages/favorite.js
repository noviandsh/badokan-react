import { useState, useEffect } from 'react/';
import Layout from '../components/Layout'
import RestaurantList from '../components/Restaurant/restaurant-list';
import API_ENDPOINT from "./api/api-endpoint";

export default function Favorite({ dataRestaurants }) {
    const [restaurants, setRestaurants] = useState({})

    useEffect(() => {
        const likedRestaurants = JSON.parse(localStorage.getItem("likedRestaurants")) || {}
        setRestaurants(dataRestaurants.restaurants.filter(restaurant => (
            likedRestaurants.id.indexOf(restaurant.id) >= 0
        )))
    }, [])
    return (
        <Layout pageTitle="Favorite">
            {
                restaurants.length > 0 ?
                    <RestaurantList title="Restoran Favorit" restaurants={restaurants} /> :
                    <>
                        <h2>Restoran Favorit</h2>
                        <span id="alert">Belum ada restoran yang anda sukai.</span>
                    </>
            }
        </Layout>
    )
}

export async function getStaticProps() {
    const res = await fetch(API_ENDPOINT.LIST)
    const dataRestaurants = await res.json()
    return {
        props: {
            dataRestaurants
        },
        revalidate: 10
    }
}