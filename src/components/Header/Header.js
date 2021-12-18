import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import './Header.css';

const Header = () => {

  const { user } = useAuthContext();

  const userLoginRegister = (
    <>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
    </>
  );

  const userLogout = (
    <li>
      <NavLink to="/logout">Logout</NavLink>
    </li>
  );

  return (
    <div className="header">
          <div className="container">
            <div className="row">
              <div className="col-xl-2 col-lg-2 col-md-2 col-sm-3 col logo_section">
                <div className="full">
                  <div className="center-desk">
                    <div className="logo">
                      <Link to="/home">
                        <img src="https://docs.google.com/uc?export=download&id=1jyh6tY-5I47bBI9aJ7S49u3zSSHtzeNS" alt="logo" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-10 col-lg-10 col-md-10 col-sm-9">
                <div className="menu-area">
                  <div className="limit-box">
                    <nav className="main-menu ">
                      <ul className="menu-area-main">
                        {
                          user.email ?
                          <li className="no-blue user-logged-in">
                            <h3>Welcome, { user.email }</h3>
                          </li> :
                          ''
                        }
                        <li>
                          <NavLink to="/home" >Home</NavLink>
                        </li>
                        <li>
                          <NavLink to="/concerts" >Concerts</NavLink>
                        </li>
                        <li>
                          <NavLink to="/stories">Stories</NavLink>
                        </li>
                        <li>
                          <NavLink to="/categories" >Instruments</NavLink>
                        </li>
                        <li>
                          <NavLink to="/about" >About</NavLink>
                        </li>
                        <li>
                          <NavLink to="/contact-us" >Contact us</NavLink>
                        </li>
                        { !user.email ? userLoginRegister : userLogout }
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  );
};

export default Header;
