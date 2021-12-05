import CoachCard from "../ui/CoachCard";

function Coach(props) {
  return (
    <>
      <CoachCard
        key={props.id}
        id={props.id}
        image={props.image}
        title={props.title}
        description={props.description}
        showDetails={true}
      ></CoachCard>
    </>
  );
}

export default Coach;
