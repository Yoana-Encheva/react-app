import { Button, Form } from "react-bootstrap";

function ClassForm(props) {
  function submitHandler(event) {
    event.preventDefault();

    let formData = new FormData(event.currentTarget);

    const enteredTitle = formData.get("title");
    const enteredImageUrl = formData.get("url");
    const enteredDescription = formData.get("description");

    const newClassData = {
      title: enteredTitle,
      image: enteredImageUrl,
      description: enteredDescription,
    };

    props.onUpdateClass(newClassData);
  }

  return (
    <>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3">
          <Form.Label>Class Title</Form.Label>
          <Form.Control
            type="text"
            required
            id="title"
            name="title"
            defaultValue={props.title ?? ""}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Class Image</Form.Label>
          <Form.Control
            type="url"
            required
            id="url"
            name="url"
            defaultValue={props.image ?? ""}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            maxLength="200"
            id="description"
            required
            name="description"
            defaultValue={props.description ?? ""}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          {props.buttonLabel} Class
        </Button>
      </Form>
    </>
  );
}

export default ClassForm;
