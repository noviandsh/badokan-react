import { useEffect } from "react"
import { useRouter } from "next/router";

export default function Custom404() {
    const router = useRouter()
    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 2000);
    }, [])
    return (
        <div>
            <h1>Wuaduh...</h1>
            <h2>Halaman ilang...</h2>
        </div>
    )
}
