import { useContext, useState } from "react";
import AuthContext from "../../store/auth-context";
import { Button, Form } from "react-bootstrap";

function ArticleForm(props) {
  const authContext = useContext(AuthContext);
  const [selectedCategory, setSelectedCategory] = useState(props.category);

  function changeCategoryHandler(e) {
    setSelectedCategory(e.target.value);
  }

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
      created: props?.created || new Date(),
      createdBy: authContext.userId,
      category: selectedCategory,
    };

    props.onSubmit(newFormData);
  }

  return (
    <>
      <Form onSubmit={submitHandler}>
        <Form.Select
          aria-label="Select category dropdown"
          id="category"
          name="category"
          required
          value={selectedCategory || props.category}
          onChange={changeCategoryHandler}
        >
          <option value="activeLife">Active life</option>
          <option value="stories">Stories</option>
          <option value="loseWeight">Lose weight</option>
          <option value="healthy">Healthy food</option>
          <option value="inspiration">Inspiration</option>
        </Form.Select>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            required
            id="title"
            name="title"
            defaultValue={props.title ?? ""}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Image Url</Form.Label>
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
            maxLength="2000"
            id="description"
            required
            name="description"
            defaultValue={props.description ?? ""}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          {props.buttonLabel}
        </Button>
      </Form>
    </>
  );
}

export default ArticleForm;
