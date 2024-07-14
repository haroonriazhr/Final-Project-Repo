import './Footer.css'
import footerlogo from '../Assets/logo_big.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footerlogo} alt="" />
            <h5>E-Commerce Store</h5>
        </div>
        <ul className='f-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-icons">
            <p><i class="ri-instagram-line"></i></p>
            <p><i class="ri-pinterest-line"></i></p>
            <p><i class="ri-whatsapp-line"></i></p>
        </div>
        <div className="copyright">
           <p>&copy; 2024 All Right Reserved</p> 
        </div>

    </div>
  )
}

export default Footer