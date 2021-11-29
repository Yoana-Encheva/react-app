import { useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import classes from "./ProfileForm.module.css";

const ProfileForm = () => {
  const navigate = useNavigate();

  const newPasswordInputRef = useRef();
  const authContext = useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredNewPassword = newPasswordInputRef.current.value;

    // to add validation

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCip7fnJIPC5Ukeb7P7fGPPGEZC2rQlIBU",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authContext.token,
          password: enteredNewPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
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
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          id="new-password"
          minLength="7"
          ref={newPasswordInputRef}
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
