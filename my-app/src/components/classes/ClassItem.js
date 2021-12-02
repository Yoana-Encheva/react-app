import Card from "../ui/Card";

function ClassItem(props) {
  return (
    <Card
      key={props.id}
      id={props.id}
      image={props.image}
      title={props.title}
      description={props.description}
      showDetails={true}
    ></Card>
  );
}

export default ClassItem;
