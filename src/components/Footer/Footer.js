import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="container">
          <div className="copyright">
            <p>
              Copyright 2021 All Right Reserved By 
              <Link to="/home"> Music World</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
