import Layout from "../../components/Layout";
import API_ENDPOINT from "../api/api-endpoint";
import RestaurantDetail from "../../components/Restaurant/restaurant-detail";

export default function Detail({ restaurantData }) {
    const restaurant = restaurantData.restaurant
    return (
        <Layout pageTitle={restaurant.name}>
            <RestaurantDetail restaurant={restaurant} />
        </Layout>
    )
}

export async function getStaticPaths() {
    const res = await fetch('https://restaurant-api.dicoding.dev/list')
    const { restaurants } = await res.json()
    const paths = restaurants.map(restaurant => ({
        params: {
            id: `${restaurant.id}`
        }
    }))
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const { id } = context.params
    const res = await fetch(API_ENDPOINT.DETAIL(id))
    const restaurantData = await res.json()
    return {
        props: {
            restaurantData
        },
        revalidate: 10
    }
}