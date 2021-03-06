import ArticleCard from "./ArticleCard";

function Article(props) {
  return (
    <ArticleCard
      key={props.id}
      id={props.id}
      category={props.category}
      createdOn={props.createdOn}
      description={props.description}
      image={props.image}
      title={props.title}
      showDetails={true}
    ></ArticleCard>
  );
}

export default Article;
