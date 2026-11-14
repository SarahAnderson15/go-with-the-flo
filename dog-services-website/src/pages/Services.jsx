import {useState} from "react";
import logoWhite from "../assets/Flo-logo-white.png";
function Navigation() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="main-menu">
            <button
                className="hamburger"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation"
                aria-expanded={menuOpen}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div className={`menu-links ${menuOpen ? "open" : ""}`}>
                <a href="/">Home</a>
               <span>|</span>
               <a href="/">About</a>
               <span>|</span>
               <a href="/">Services</a>
               <span>|</span>
               <a href="/">Prices</a>
               <span>|</span>
               <a href="/">Gallery</a>
               <span>|</span>
               <a href="/">Contact</a>
            </div>
        </nav>

    )
}
function Services(){
    return 
    <div className="services">
          <header>
                    <img 
                    src={logoWhite} 
                    alt="Go with the flo Logo"
                    className="logo"
                    />
                 </header>
    <h1>Services</h1>
    <Navigation />
           </div>   
}

export default Services;