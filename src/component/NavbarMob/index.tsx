export const NavbarMob = () => {
    return (
        <div className="responsive-navigation md:hidden">
            <ul className="flex resp-menu">
                <li>
                    <a href="#" className="resp-link">
                        <span className="icon icon-home" />
                        <span className="text">Home</span>
                    </a>
                </li>
                <li>
                    <a href="#about" className="resp-link">
                        <span className="icon icon-notebook" />
                        <span className="text">About</span>
                    </a>
                </li>
                <li>
                    <a href="#party" className="resp-link">
                        <span className="icon icon-questionmark" />
                        <span className="text"><span className="hidden sm:block">How to </span>BUY</span>
                    </a>
                </li>
                <li>
                    <a href="#duckonomics" className="resp-link">
                        <span className="icon icon-piggy-bank" />
                        <span className="text">Duckonomics</span>
                    </a>
                </li>
                <li>
                    <a href="#duckmap" className="resp-link">
                        <span className="icon icon-map-marker" />
                        <span className="text">Duckmap</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}