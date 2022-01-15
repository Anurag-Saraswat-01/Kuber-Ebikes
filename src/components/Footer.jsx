import India from "../assets/india.jpg"
import { FaFacebook, FaGithub, FaRegCopyright } from "react-icons/fa"

const Footer = () => {
    return (
        <footer>
            <div className="footer-upper">
                <div className="footer-column">
                    <h5>Get in Touch</h5>
                    <p className="footer-link">Contact Us on +918950754626</p>
                    <p className="footer-link">Email Us on info@kuberebikes.com</p>
                </div>
                <div className="footer-column">
                    <h5>Quick Links</h5>
                    <a href="/Kuber-Ebikes" className="footer-link">Home</a>
                    <a href="/Kuber-Ebikes" className="footer-link">About Us</a>
                    <a href="/Kuber-Ebikes" className="footer-link">Become a Dealer</a>
                </div>
                <div className="footer-column">
                    <h5>Models</h5>
                    <a href="/Kuber-Ebikes" className="footer-link">Juniper</a>
                    <a href="/Kuber-Ebikes" className="footer-link">Festiva</a>
                    <a href="/Kuber-Ebikes" className="footer-link">Vamos</a>
                </div>
            </div>
            <div className="footer-image">
                <img src={India} alt="India" />
            </div>
            <div className="footer-lower">
                <p className="kuber-info">
                    <FaRegCopyright />
                    <a href="https://www.kuberebikes.com/" target="_blank" rel="noreferrer"> Kuber E-Bikes </a>
                    <p>2021 All rights reserved.</p>
                </p>
                <a className="fb-icon" href="https://www.facebook.com/kuberebikes/" target="_blank" rel="noreferrer">
                    <FaFacebook />
                </a>
                <p className="my-info">
                    Made by<a href="https://github.com/Anurag-Saraswat-01" target="_blank" rel="noreferrer"> Anurag Saraswat </a>
                    <a href="https://github.com/Anurag-Saraswat-01/Kuber-Ebikes" target="_blank" rel="noreferrer"><FaGithub /></a>
                </p>
            </div>
        </footer>
    )
}

export default Footer
