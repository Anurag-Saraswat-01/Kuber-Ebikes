import HeroImage from "../assets/hero.jpg"
import { FaLeaf, FaTools, FaIdBadge, FaBook } from "react-icons/fa"

const Home = () => {
    return (
        <div className="container">
            <div className="hero-section">
                <img src={HeroImage} alt="hero" />
            </div>
            <div className="feature-container">
                <h2>FEATURES</h2>
                <div className="feature-section">
                    <div className="feature">
                        <div className="feature-icon"><FaLeaf /></div>
                        <h3 className="feature-text">Eco Friendly</h3>
                    </div>
                    <div className="feature">
                        <div className="feature-icon"><FaTools /></div>
                        <h3 className="feature-text">Maintenance</h3>
                    </div>
                    <div className="feature">
                        <div className="feature-icon"><FaIdBadge /></div>
                        <h3 className="feature-text">No License</h3>
                    </div>
                    <div className="feature">
                        <div className="feature-icon"><FaBook /></div>
                        <h3 className="feature-text">No Registration</h3>
                    </div>
                </div>
            </div>
            <div className="about-us-section">
                <h2>ABOUT US</h2>
                <p>Kuber E-bikes is one of India’s leading electric two-wheeler manufacturer.
                    Our goal is to build a better, cleaner and greener future for the generations to come. </p>
                <h3>Why Choose Us?</h3>
                <ul>
                    <li>Best Products</li>
                    <li>Quality Service</li>
                    <li>Trusted Dealers</li>
                    <li>Excellent Support</li>
                </ul>
            </div>
        </div>
    )
}

export default Home
