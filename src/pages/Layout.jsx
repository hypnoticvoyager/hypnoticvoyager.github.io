import { Outlet, Link } from "react-router-dom"
import { Helmet } from "react-helmet"

const Layout = () => {
    return (
        <>
            <Helmet>
                <script src="/src/cosmetic/music.js"></script>
            </Helmet>
            <div id="wrapper">
                <header>
                <h1>
                        HypnoticvoyageR
                    </h1>
                    <audio loop id="now-playing">
                        <source src="/src/music/starmap.mp3" type="audio/mpeg"/>
                    </audio>
                    <div id="mt-div">
                        <button id="music-toggle">
                            <img src="src/assets/ui-sound-off.png" alt="Music Off"/>
                        </button>
                    </div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/blog">Blog</Link>
                            </li>
                            <li>
                                <Link to="/projects">Projects</Link>
                            </li>
                            <li>
                                <Link to="/starmap">Star Map</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                <main>
                    <Outlet/>
                </main>
                <footer>
                    &copy; 2025 hypnoticvoyager DO NOT STEAL
                </footer>
            </div>
        </>
    );
};

export default Layout;