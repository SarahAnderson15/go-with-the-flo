import {useState} from "react";
import logoWhite from "../assets/Flo-logo-white.png";
import meetfloimafe from "../assets/Who are we post.png";

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
function Home(){
  return (
        <div className="home">
          <header>
            <img 
            src={logoWhite} 
            alt="Go with the flo Logo"
            className="logo"
            />
         </header>
            
            <h1>Go With the Flo</h1>
            <h2>Professional Dog Walking & Pet Care Services</h2>
            <p>Fareham & Surrounding Areas</p>
            <div className="contact-info">
                <a href="tel:07427607987">07427607987</a>
                <span>|</span>
                <a href="mailto:helloflok9@gmail.com?subject=Dog%20Walking%20Enquiry">helloflok9@gmail.com</a>
            </div>
           <Navigation />
           <section className="bio-section">
            <div className="bio-text">
                <h2>A little about me</h2>
                <h3>Meet Flo</h3>
                <p>Hi, I'm Flo, the face behind Go with the Flo Dog Services, and this is Pyro, my four-legged companion and the inspiration behind my business!

I've always grown up around dogs and had a passion for caring for them. It was through owning Pyro myself that I began to appreciate just how challenging it can sometimes be to balance the demands of everyday life with giving our dogs all the time, exercise and attention they deserve.

That got me thinking: why not turn my passion into something that could help other dog owners too?

And so, Go with the Flo Dog Services was born!

My aim is to make life a little easier for dog owners, while making sure their dogs receive the care, attention and adventures they deserve. Whether it's a regular walk, an occasional visit or a little extra help when life gets busy, I'm here to help.

I understand that your dog is part of your family, and I treat every dog in my care with the same love, patience and consideration I'd want for my own.</p>
            </div>
            <div className="bio-image">
                <img src={meetfloimafe} alt="Flo and Pyro" />
            </div>
           </section>
        
        </div>
    );
}

export default Home;