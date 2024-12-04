const HeroSection = () => {
    return (
        <main className="Hero container"> 
        <div className="HeroContent">
        <h1>YOUR FEET 
DESERVE
THE BEST
        </h1>
        <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
        
        <div className="hero-btn">
            <button>Shop Now</button>
            <button className="scnd-btn">Category</button>
        </div>
        <div className="Shopping">
            <p>Also Available on</p>
            <div className="brand-icons">
            <button className="flipbtn"><img src="/images/flipkart.png" alt="Flipkart-logo"/></button>
            <button className="flipbtn"><img src="/images/amazon.png" alt="Amazon-logo"/></button>
        </div>
        </div>
        </div>
        <div className="HeroImage">
<img src="/images/shoe_image.png" alt="Shoe-Image"/>
        </div>
        
        </main>   
        );
};

export default HeroSection