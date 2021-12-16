import { validationSchema } from "../../helpers/helpers";
import { Formik } from "formik";
import { Button, Form } from "react-bootstrap";
import classes from "./GlobalForm.module.css";

function GlobalForm(props) {
  function submitHandler(event) {
    event.preventDefault();

    let formData = new FormData(event.currentTarget);
    const enteredTitle = formData.get("title");
    const enteredImageUrl = formData.get("url");
    const enteredDescription = formData.get("description");

    const newFormData = {
      title: enteredTitle,
      image: enteredImageUrl,
      description: enteredDescription,
    };

    props.onSubmit(newFormData);
  }

  return (
    <>
      <Formik
        initialValues={{
          title: "",
          url: "",
          description: "",
        }}
        validationSchema={validationSchema}
      >
        {/* Callback function containing Formik state and helpers that handle common form actions */}
        {({ values, errors, touched, handleChange, handleBlur }) => (
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                id="title"
                name="title"
                required
                defaultValue={props.title ?? ""}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  touched.title && errors.title ? classes["error"] : null
                }
              />
              {touched.title && errors.title ? (
                <div className={classes["error-message"]}>{errors.title}</div>
              ) : null}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Image Url</Form.Label>
              <Form.Control
                type="url"
                id="url"
                name="url"
                required
                defaultValue={props.image ?? ""}
                onChange={handleChange}
                onBlur={handleBlur}
                className={touched.url && errors.url ? classes["error"] : null}
              />
              {touched.url && errors.url ? (
                <div className={classes["error-message"]}>{errors.url}</div>
              ) : null}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                id="description"
                name="description"
                required
                defaultValue={props.description}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  touched.description && errors.description
                    ? classes["error"]
                    : null
                }
              />
              {touched.description && errors.description ? (
                <div className={classes["error-message"]}>
                  {errors.description}
                </div>
              ) : null}
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              disabled={
                (touched.title && errors.title) ||
                (touched.url && errors.url) ||
                (touched.description && errors.description)
              }
            >
              {props.buttonLabel}
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default GlobalForm;
