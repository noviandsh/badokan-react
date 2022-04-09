import { useRouter } from "next/router"
import { useState } from "react"
import Image from "next/image"

export default function Hero() {
    const [query, setQuery] = useState('')
    const route = useRouter()
    const handleEnterClick = (e) => {
        if (query && e.key === "Enter") {
            route.push(`/search?q=${query}`)
        }
    }
    const handleSearchClick = () => {
        if (query) {
            route.push(`/search?q=${query}`)
        }
    }
    const handleInputChange = (e) => {
        const val = e.currentTarget.value
        setQuery(val)
    }
    return (
        <div className="hero">
            <div id="search-box">
                <Image src="/magnifying.svg" width={26.5} height={26.5} />
                <input onChange={handleInputChange} onKeyUp={handleEnterClick} name="search-input" id="search-input" placeholder="Pencarian" />
                <button onClick={handleSearchClick} id="search-btn">Cari</button>
            </div>
            <div className="inner">
                <h1 className="title">Temukan Makanan Enak di Seluruh Indonesia</h1>
                <p className="tagline">Kurus atau gendut adalah pilihan, tapi makan enak adalah kewajiban</p>
            </div>
            <div className="blur-effect"></div>
        </div >
    )
}
