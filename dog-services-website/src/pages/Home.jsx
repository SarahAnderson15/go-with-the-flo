import logoWhite from "../assets/Flo-logo-white.png";

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
                <a href="mailto:helloflok9@gmail.com? subject=Dog%20Walking%20Enquiry">helloflok9@gmail.com</a>
            </div>
            
        </div>
    );
}

export default Home;