import Layout from '../components/Layout'
import RestaurantList from '../components/Restaurant/restaurant-list';
import API_ENDPOINT from "./api/api-endpoint";


export default function Home({ dataRestaurants }) {
  const restaurants = dataRestaurants.restaurants
  return (
    <Layout pageTitle="Home">
      <RestaurantList title="Rekomendasi Restoran" restaurants={restaurants} />
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