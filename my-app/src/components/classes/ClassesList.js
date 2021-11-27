import ClassItem from "./ClassItem";
import classes from "./ClassesList.module.css";

function ClassesList(props) {
  return (
    <ul className={classes.list}>
      {props.classes.map((classItem) => (
        <ClassItem
          key={classItem.id}
          id={classItem.id}
          image={classItem.image}
          title={classItem.title}
          address={classItem.address}
          description={classItem.description}
        />
      ))}
    </ul>
  );
}

export default ClassesList;
