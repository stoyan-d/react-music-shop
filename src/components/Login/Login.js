import { useNavigate } from 'react-router';
import { useAuthContext } from '../../contexts/AuthContext';
import * as authService from '../services/authService';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuthContext();

  const loginHandler = (e) => {
    e.preventDefault();
    
    const form = new FormData(e.currentTarget);
    const { email, password } = Object.fromEntries(form);

    authService.login(email, password)
      .then((authData) => {
        login(authData);
        navigate('/home');
      })
      .catch(err => {

      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <form className="contact_bg" onSubmit={loginHandler}>
            <div className="row">
              <div className="col-md-12">
                <div className="titlepage">
                  <h2>Login</h2>
                </div>
                <div className="col-md-12">
                  <input
                    className="contactus"
                    placeholder="Please Enter Your Email"
                    type="text"
                    name="email"
                  />
                </div>
                <div className="col-md-12">
                  <input
                    className="contactus"
                    placeholder="Please Enter Your Password"
                    type="password"
                    name="password"
                  />
                </div>
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <button type="submit" className="send">Login</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
