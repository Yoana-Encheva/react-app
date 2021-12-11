import * as EmailValidator from "email-validator";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "*Passwords must have at least 6 characters.")
    .max(15, "*Passwords can't be longer than 15 characters.")
    .matches(/(?=.*[0-9])/, "Password must contain a number.")
    .required("*Password is required."),
  email: Yup.string()
    .email("*Must be a valid email address")
    .max(100, "*Email must be less than 100 characters")
    .required("*Email is required")
    .test((value) => EmailValidator.validate(value)),
});

const errorMessages = {
  EMAIL_EXISTS: "This email already exists.",
  INVALID_EMAIL: "This email is not valid.",
  EMAIL_NOT_FOUND: "This email does not persist in the data base.",
  INVALID_PASSWORD: "This password is not valid.",
};

export { validationSchema, errorMessages };
