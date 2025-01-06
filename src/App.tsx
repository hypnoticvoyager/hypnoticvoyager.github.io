import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from './pages/Layout'
import Home from './pages/Home'
import About from "./pages/About";
import Blog from "./pages/Blog";
import Projects from "./pages/Projects";
import StarMap from "./pages/StarMap";
import Contact from "./pages/Contact";
import './App.css'
import ReactDOM from "react-dom/client";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/starmap" element={<StarMap />} />
                    <Route path="/contact" element={<Contact />} />
                </Route>
            </Routes>
        </Router>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);