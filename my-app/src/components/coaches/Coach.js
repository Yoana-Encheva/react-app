import CoachCard from "../ui/CoachCard";
import classes from "./CoachList.module.css";

function Coach(props) {
  return (
    <>
      <CoachCard
        className={classes["flex-card"]}
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
