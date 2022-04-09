export default function Footer() {
    return (
        <footer>
            <div className="inner">
                <div id="logo">
                    <img src="/images/logo/spoon-fork.png" alt="" />
                    <div>Badokan</div>
                </div><span id="year">Copyright &copy; {new Date().getFullYear()} - Badokan</span>
            </div>
        </footer>
    )
}
