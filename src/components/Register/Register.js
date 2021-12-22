import { useNavigate } from "react-router";
import { useAuthContext } from "../../contexts/AuthContext";
import {
  useNotificationContext,
  types,
} from "../../contexts/NotificationContext";
import * as authService from "../../services/authService";

const Register = () => {
  const navigate = useNavigate();
  const { addNotification } = useNotificationContext();

  const { login } = useAuthContext();

  const registerHandler = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const { email, password } = Object.fromEntries(form);

    authService
      .register(email, password)
      .then((authData) => {
        login(authData);
        addNotification(
          "You registered successfully",
          types.success,
          "Registration successful"
        );
        setTimeout(() => {
          navigate("/home");
        }, 2000);
      })
      .catch((err) => {
        addNotification(err, "Register unsuccessful");
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <form className="contact_bg" onSubmit={registerHandler}>
            <div className="row">
              <div className="col-md-12">
                <div className="titlepage">
                  <h2>Register</h2>
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
                <div className="col-md-12">
                  <input
                    className="contactus"
                    placeholder="Please Repeat Your Password"
                    type="password"
                    name="rePassword"
                  />
                </div>
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <button type="submit" className="send">
                    Register
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
