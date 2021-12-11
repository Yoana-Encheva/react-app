import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import classes from "./ProfileForm.module.css";
import * as userService from "../../services/user";

const ProfileForm = () => {
  const navigate = useNavigate();

  const authContext = useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventDefault();

    let { password } = Object.fromEntries(new FormData(event.currentTarget));

    const userPayload = {
      idToken: authContext.token,
      password: password,
      returnSecureToken: true,
    };

    // to add validation

    userService
      .changePassword(userPayload)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Unsuccessful attempt to change password!";
            if (data?.error?.message) {
              errorMessage = data.error.message;
            }
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        navigate("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="password">New Password</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          minLength="7"
          defaultValue="password"
          name="password"
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
