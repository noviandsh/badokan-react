import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Layout from "../components/Layout"
import API_ENDPOINT from "./api/api-endpoint"
import RestaurantList from "../components/Restaurant/restaurant-list"

export default function Search() {
    const router = useRouter()
    const { q } = router.query
    const [restaurants, setRestaurants] = useState([])
    const [query, setQuery] = useState(q)

    useEffect(() => {
        setQuery(q)
    })

    useEffect(() => {
        if (!router.isReady) return
        const getRestaurants = async () => {
            const response = await fetch(API_ENDPOINT.SEARCH(q))
            const { restaurants } = await response.json()
            setRestaurants(restaurants);
        }
        getRestaurants()
    }, [router.isReady, query])

    return (
        <Layout pageTitle={`${q} - Search`}>
            <div id="search-result">
                {
                    restaurants.length ?
                        <RestaurantList title="Hasil Pencarian" restaurants={restaurants} /> :
                        <>
                            <h2>Hasil Pencarian</h2>
                            <span id="alert">Maaf, restoran dengan nama "{q}" tidak ditemukan.</span>
                        </>
                }
            </div>
        </Layout>
    )
}
