import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [burgerOpen, setBurgerOpen] = useState(false)

    const handleBurgerClick = (e) => {
        const burgerButton = e.currentTarget
        const navElement = document.querySelector('nav')

        if (burgerOpen) {
            burgerButton.classList.remove('open')
            navElement.classList.remove('open')
            setBurgerOpen(false)
        }
        else {
            burgerButton.classList.add('open')
            navElement.classList.add('open')
            setBurgerOpen(true)
        }
    }

    return (
        <header>
            <a href="#main-content" className="skip-link">Skip to content</a>
            <div id="logo">
                <img src="/images/logo/spoon-fork.png" alt="" />
                <div>Badokan</div>
            </div><button onClick={handleBurgerClick} id="hamburger" aria-label="Menu navigasi"><span></span></button>
            <nav>
                <ul>
                    <li><Link href="/"><a>Home</a></Link></li>
                    <li><Link href="/favorite"><a>Favorite</a></Link></li>
                    <li><Link href="https://doyancoding.com/about"><a>About Us</a></Link></li>
                </ul>
            </nav>
        </header>
    )
}
